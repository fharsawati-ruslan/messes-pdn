import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import Occupant from '#models/occupant'
import House from '#models/house'
import Position from '#models/position'

export default class OccupantsController {
  /**
   * List penghuni + search
   */
  async index({ request, view }: HttpContext) {
    const search = request.input('search', '').trim()

    const query = Occupant.query()
      .preload('house')
      .preload('position')
      .orderBy('name', 'asc')

    if (search) {
      query.where((builder) => {
        builder
          .whereILike('name', `%${search}%`)
          .orWhereILike('nik', `%${search}%`)
          .orWhereILike('phone', `%${search}%`)
      })
    }

    const occupants = await query

    return view.render('pages/occupants/index', {
      occupants,
      search,
    })
  }

  /**
   * Form tambah penghuni
   */
  async create({ view }: HttpContext) {
    const positions = await Position.query()
      .where('is_active', true)
      .orderBy('name', 'asc')

    const houses = await House.query()
      .where('is_active', true)
      .orderBy('name', 'asc')

    return view.render('pages/occupants/create', {
      positions,
      houses,
    })
  }

  /**
   * Simpan penghuni
   */
  async store({ request, response, session }: HttpContext) {
    const data = request.only([
      'name',
      'nik',
      'phone',
      'positionId',
      'workplace',
      'houseId',
      'roomNumber',
      'status',
      'description',
    ])

    const occupant = await Occupant.create({
      name: data.name,
      nik: data.nik || null,
      phone: data.phone || null,
      positionId: data.positionId ? Number(data.positionId) : null,
      workplace: data.workplace || null,
      houseId: data.houseId ? Number(data.houseId) : null,
      roomNumber: data.roomNumber || null,
      status: data.status || 'active',
      description: data.description || null,
    })

    const photo = request.file('photo', {
      size: '2mb',
      extnames: ['jpg', 'jpeg', 'png', 'webp'],
    })

    if (photo) {
      const filename = `${occupant.id}-${Date.now()}.${photo.extname}`

      await photo.move(app.makePath('public/uploads/occupants'), {
        name: filename,
        overwrite: true,
      })

      occupant.photo = `/uploads/occupants/${filename}`
      await occupant.save()
    }

    session.flash('success', 'Penghuni berhasil ditambahkan.')

    return response.redirect().toRoute('dashboard')
  }

  /**
   * Detail penghuni
   */
  async show({ params, view }: HttpContext) {
    const occupant = await Occupant.query()
      .where('id', params.id)
      .preload('house')
      .preload('position')
      .firstOrFail()

    return view.render('pages/occupants/show', {
      occupant,
    })
  }

  /**
   * Form edit penghuni
   */
  async edit({ params, view }: HttpContext) {
    const occupant = await Occupant.findOrFail(params.id)

    const positions = await Position.query()
      .where('is_active', true)
      .orderBy('name', 'asc')

    const houses = await House.query()
      .where('is_active', true)
      .orderBy('name', 'asc')

    return view.render('pages/occupants/edit', {
      occupant,
      positions,
      houses,
    })
  }

  /**
   * Update penghuni
   */
  async update({ params, request, response, session }: HttpContext) {
    const occupant = await Occupant.findOrFail(params.id)

    const data = request.only([
      'name',
      'nik',
      'phone',
      'positionId',
      'workplace',
      'houseId',
      'roomNumber',
      'status',
      'description',
    ])

    occupant.merge({
      name: data.name,
      nik: data.nik || null,
      phone: data.phone || null,
      positionId: data.positionId ? Number(data.positionId) : null,
      workplace: data.workplace || null,
      houseId: data.houseId ? Number(data.houseId) : null,
      roomNumber: data.roomNumber || null,
      status: data.status || 'active',
      description: data.description || null,
    })

    const photo = request.file('photo', {
      size: '2mb',
      extnames: ['jpg', 'jpeg', 'png', 'webp'],
    })

    if (photo) {
      const filename = `${occupant.id}-${Date.now()}.${photo.extname}`

      await photo.move(app.makePath('public/uploads/occupants'), {
        name: filename,
        overwrite: true,
      })

      occupant.photo = `/uploads/occupants/${filename}`
    }

    await occupant.save()

    session.flash('success', 'Data penghuni berhasil diperbarui.')

    return response.redirect().toRoute('dashboard')
  }

  /**
   * Hapus penghuni
   */
  async destroy({ params, response, session }: HttpContext) {
    const occupant = await Occupant.findOrFail(params.id)

    await occupant.delete()

    session.flash('success', 'Penghuni berhasil dihapus.')

    return response.redirect().toRoute('dashboard')
  }
}

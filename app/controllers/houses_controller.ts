import type { HttpContext } from '@adonisjs/core/http'
import House from '#models/house'

export default class HousesController {
  /**
   * Daftar rumah mess
   */
  async index({ view }: HttpContext) {
    const houses = await House.query()
      .withCount('occupants')
      .orderBy('name', 'asc')

    return view.render('pages/houses/index', {
      houses,
    })
  }

  /**
   * Form tambah rumah
   */
  async create({ view }: HttpContext) {
    return view.render('pages/houses/create')
  }

  /**
   * Simpan rumah
   */
  async store({ request, response, session }: HttpContext) {
    const data = request.only([
      'code',
      'name',
      'address',
      'capacity',
      'picName',
      'picPhone',
      'description',
      'isActive',
    ])

    await House.create({
      code: data.code,
      name: data.name,
      address: data.address || null,
      capacity: data.capacity ? Number(data.capacity) : 0,
      picName: data.picName || null,
      picPhone: data.picPhone || null,
      description: data.description || null,
      isActive: data.isActive !== 'false',
    })

    session.flash('success', 'Rumah mess berhasil ditambahkan.')

    return response.redirect().toRoute('houses.index')
  }

  /**
   * Detail rumah
   */
  async show({ params, view }: HttpContext) {
    const house = await House.query()
      .where('id', params.id)
      .withCount('occupants')
      .preload('occupants')
      .firstOrFail()

    return view.render('pages/houses/show', {
      house,
    })
  }

  /**
   * Form edit rumah
   */
  async edit({ params, view }: HttpContext) {
    const house = await House.findOrFail(params.id)

    return view.render('pages/houses/edit', {
      house,
    })
  }

  /**
   * Update rumah
   */
  async update({ params, request, response, session }: HttpContext) {
    const house = await House.findOrFail(params.id)

    const data = request.only([
      'code',
      'name',
      'address',
      'capacity',
      'picName',
      'picPhone',
      'description',
      'isActive',
    ])

    house.merge({
      code: data.code,
      name: data.name,
      address: data.address || null,
      capacity: data.capacity ? Number(data.capacity) : 0,
      picName: data.picName || null,
      picPhone: data.picPhone || null,
      description: data.description || null,
      isActive: data.isActive !== 'false',
    })

    await house.save()

    session.flash('success', 'Data rumah mess berhasil diperbarui.')

    return response.redirect().toRoute('houses.index')
  }

  /**
   * Hapus rumah
   */
  async destroy({ params, response, session }: HttpContext) {
    const house = await House.findOrFail(params.id)

    await house.delete()

    session.flash('success', 'Rumah mess berhasil dihapus.')

    return response.redirect().toRoute('houses.index')
  }
}

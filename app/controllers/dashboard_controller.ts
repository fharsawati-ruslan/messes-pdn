import type { HttpContext } from '@adonisjs/core/http'
import Occupant from '#models/occupant'
import House from '#models/house'

export default class DashboardController {
  async index({ view, auth }: HttpContext) {
    const user = auth.getUserOrFail()

    const [
      totalOccupants,
      totalHouses,
      activeHouses,
      occupiedRooms,
      recentOccupants,
      houses,
    ] = await Promise.all([
      Occupant.query().count('* as total'),

      House.query().count('* as total'),

      House.query()
        .where('is_active', true)
        .count('* as total'),

      Occupant.query()
        .whereNotNull('room_number')
        .count('* as total'),

      Occupant.query()
        .preload('house')
        .preload('position')
        .orderBy('createdAt', 'desc')
        .limit(5),

      House.query()
        .where('is_active', true)
        .orderBy('name', 'asc')
        .limit(5),
    ])

    return view.render('pages/home', {
      user,

      totalOccupants: Number(totalOccupants[0].$extras.total),
      totalHouses: Number(totalHouses[0].$extras.total),
      activeHouses: Number(activeHouses[0].$extras.total),
      occupiedRooms: Number(occupiedRooms[0].$extras.total),

      recentOccupants,
      houses,
    })
  }
}

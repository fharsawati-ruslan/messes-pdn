import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import House from '#models/house'
import Position from '#models/position'

export default class Occupant extends BaseModel {
  static table = 'occupants'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare nik: string | null

  @column()
  declare phone: string | null

  @column()
  declare positionId: number | null

  @column()
  declare workplace: string | null

  @column()
  declare houseId: number | null

  @column()
  declare roomNumber: string | null

  @column()
  declare status: string

  @column()
  declare description: string | null

  @column()
  declare photo: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => House)
  declare house: BelongsTo<typeof House>

  @belongsTo(() => Position)
  declare position: BelongsTo<typeof Position>
}

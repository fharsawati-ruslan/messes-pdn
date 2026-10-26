import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Occupant from '#models/occupant'

export default class House extends BaseModel {
  static table = 'houses'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare code: string

  @column()
  declare name: string

  @column()
  declare address: string | null

  @column()
  declare capacity: number

  @column()
  declare picName: string | null

  @column()
  declare picPhone: string | null

  @column()
  declare description: string | null

  @column()
  declare isActive: boolean

  @hasMany(() => Occupant)
  declare occupants: HasMany<typeof Occupant>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

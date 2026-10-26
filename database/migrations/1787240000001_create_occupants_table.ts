import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'occupants'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 150).notNullable()
      table.string('nik', 50).nullable()
      table.string('phone', 30).nullable()

      table
        .integer('position_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('positions')
        .onDelete('SET NULL')

      table.string('workplace', 150).nullable()

      table
        .integer('house_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('houses')
        .onDelete('SET NULL')

      table.string('room_number', 30).nullable()

      table.string('status', 30).notNullable().defaultTo('active')

      table.text('description').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'occupants'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('photo', 255).nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('photo')
    })
  }
}

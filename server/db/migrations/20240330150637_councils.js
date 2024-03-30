/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('councils', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('address')
    table.string('website')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('councils')
}

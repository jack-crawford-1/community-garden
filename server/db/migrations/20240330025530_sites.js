/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('sites', (table) => {
    table.increments('id')
    table.string('latlong')
    table.string('address')
    table.string('description')
    table.integer('userId')
    table.boolean('parking')
    table.boolean('aceessible')
    table.integer('userId').references('users.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('sites')
}

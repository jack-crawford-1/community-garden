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
    table.integer('councilId').unsigned()
    table.integer('userId').unsigned()
    table.boolean('isPublic')
    table.boolean('hasWaterAccess')
    table.boolean('isAvailable')
    table.boolean('hasShade')
    table.string('soilType')
    table.string('size')
    table.string('accessibility')
    table.foreign('councilId').references('id').inTable('councils')
    table.foreign('userId').references('id').inTable('users')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('sites')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'John', userName: 'jsmith82', location: 'Wellington' },
    { id: 2, name: 'Susan', userName: 'sadams77', location: 'Auckland' },
    { id: 3, name: 'Peter', userName: 'pt500', location: 'Christchurch' },
    { id: 4, name: 'Mary', userName: 'mazza', location: 'Wellington' },
    { id: 5, name: 'Bob', userName: 'bbb000', location: 'Auckland' },
    { id: 6, name: 'Sarah', userName: 'sezza61', location: 'Wellington' },
  ])
}

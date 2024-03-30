/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('councils').del()
  await knex('councils').insert([
    {
      id: 1,
      name: 'Wellington City Council',
      email: 'info@wcc.govt.nz',
      phone: '04 499 4444',
      address: '101 Wakefield Street, Wellington',
      description: 'Serving the residents of Wellington.',
    },
    {
      id: 2,
      name: 'Auckland City Council',
      email: 'contact@aucklandcouncil.govt.nz',
      phone: '09 301 0101',
      address: '135 Albert St, Auckland',
      description: 'Responsible for Aucklands regional affairs.',
    },
    {
      id: 3,
      name: 'Christchurch City Council',
      email: 'ccc@ccc.govt.nz',
      phone: '03 941 8999',
      address: '53 Hereford St, Christchurch',
      description: 'Governing Christchurch, the garden city.',
    },
  ])
}

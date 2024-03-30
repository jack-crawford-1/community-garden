/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sites').del()
  await knex('sites').insert([
    {
      id: 1,
      latlong: '1423420-414',
      address: '123 Smith St',
      description: 'A nice place for a garden',
      userId: 1,
      parking: true,
      aceessible: true,
    },
    {
      id: 2,
      latlong: '111120-44214',
      address: '800 John St',
      description: 'A nice place for a garden',
      userId: 1,
      parking: true,
      aceessible: true,
    },
    {
      id: 3,
      latlong: '145420-4124',
      address: '62 Deep St',
      description: 'A nice place for a garden',
      userId: 4,
      parking: true,
      aceessible: true,
    },
    {
      id: 4,
      latlong: '322120-64214',
      address: '6 Far St',
      description: 'A nice place for a garden',
      userId: 2,
      parking: true,
      aceessible: true,
    },
    {
      id: 5,
      latlong: '290120-1182',
      address: '12 Near St',
      description: 'A nice place for a garden',
      userId: 5,
      parking: true,
      aceessible: true,
    },
  ])
}

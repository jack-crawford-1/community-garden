// //@vitest-environment jsdom

import { it, expect } from 'vitest'
import { renderRoute } from '../../test/setup.tsx'
import nock from 'nock'

nock.disableNetConnect()

const mockUserData = {
  id: 1,
  name: 'Peter Pan',
  userName: 'flyer12',
  email: 'ppan1',
  password: 'password',
  location: 'Neverland',
  createdAt: '2021-09-01T00:00:00.000Z',
  updatedAt: '2021-09-01T00:00:00.000Z',
}

// it('renders loading state initially', async () => {
//   const scope = await nock('http://localhost')
//     .get(`/api/v1/users/1`)
//     .reply(200, mockUserData)

//   const { ...screen } = renderRoute('/1')

//   const loading = await screen.findByText(/Loading.../)

//   expect(loading).toBeVisible()
// })

it('should show the user has an ID', async () => {
  const scope = nock('http://localhost')
    .get(`/api/v1/users/1`)
    .reply(200, mockUserData)

  const { ...screen } = renderRoute('/1')

  const name = await screen.findByText(/ID/i)

  expect(name).toBeVisible()
})

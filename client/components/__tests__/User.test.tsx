// //@vitest-environment jsdom

import { describe, it, expect, test } from 'vitest'
import nock from 'nock'
import { render, screen } from '@testing-library/react'
import User from '../users/User.tsx'
import '../../test/setup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

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

describe('User', () => {
  test('renders loading state initially', async () => {
    const scope = nock('http://localhost')
      .get(`/api/v1/users/1`)
      .reply(200, mockUserData)

    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/users/1']}>
          <Routes>
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    )

    const loading = await screen.getByText('Loading...')
    expect(loading).toBeVisible()
  })
})

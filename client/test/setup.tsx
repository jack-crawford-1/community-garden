import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
// import { routes } from '../router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllUsers from '../components/users/AllUsers'
import { InitialEntry } from '@remix-run/router'

beforeEach(cleanup)
expect.extend(matchers)

const routes = [{ path: '/users/:id', element: <AllUsers /> }]

export function renderRoute(route: InitialEntry) {
  const router = createMemoryRouter(routes, {
    initialEntries: [route],
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  const user = userEvent.setup()
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
  return { user, ...screen }
}

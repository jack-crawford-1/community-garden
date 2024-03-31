import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import router from './router.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <>
      <Auth0Provider
        domain="tohora-24-jack.au.auth0.com"
        clientId="Vh44BHAoLk4oc4xSXLADZEznkKH3U6s9"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: 'https://communitygarden/api',
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
        ,
      </Auth0Provider>
    </>,
  )
})

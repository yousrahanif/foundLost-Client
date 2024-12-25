import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<HelmetProvider>
<AuthProvider>
<RouterProvider router={Router} />

</AuthProvider>
</HelmetProvider>
  </StrictMode>,
)

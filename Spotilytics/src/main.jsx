import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './ContactForm.css'
import './Header.css'

import { router } from './router/index'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

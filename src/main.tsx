import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageHome } from './pages/home/'
import { PageItem } from './pages/item/'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />,
  },
  {
    path: '/item/',
    element: <PageItem />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { PageHome } from './pages/home/'
import { PageMaterial } from './pages/material'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <PageHome />,
      },
      {
        path: 'material/:id',
        element: <PageMaterial />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { PageEffect, PageHome, PageMaterial } from './pages/'
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
      {
        path: 'effect/:id',
        element: <PageEffect />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

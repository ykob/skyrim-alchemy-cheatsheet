import { createHashRouter } from 'react-router-dom'
import App from './App'
import { PageEffect, PageHome, PageMaterial } from './pages'

export const router = createHashRouter([
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
    ],
  },
])


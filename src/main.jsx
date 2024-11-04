import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <h2>Statistics</h2>,
      },
      {
        path: '/Dashboard',
        element: <h2>Dashboard</h2>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

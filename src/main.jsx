import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout/MainLayout.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import GadgetDetail from './components/GadgetDetail/GadgetDetail.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('gadgetsData.json'),
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetail />,
        loader: () => fetch('gadgetsData.json'),
      },
      {
        path: '/statistics',
        element: <h2>Statistics</h2>,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
        loader: () => fetch('gadgetsData.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </StrictMode>,
)

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
import Statistics from './components/Statistics/Statistics.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../gadgetsData.json'),
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetail />,
        loader: () => fetch('../gadgetsData.json'),
      },
      {
        path: '/statistics',
        element: <Statistics/>,
        loader: () => fetch('../gadgetsData.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        loader: () => fetch('../gadgetsData.json'),
      },
      {
        path: '/feedback',
        element: <h2>Coustomer Feedback</h2>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
    />
  </StrictMode>,
)

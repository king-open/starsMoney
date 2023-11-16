import { createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from '../pages/NotFoundPage'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './WelcomeRoutes'

export const router = createBrowserRouter([
  {
    path:'/home',
    element:<div>Home</div>
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      welcomeRoutes
    ],
  },
])

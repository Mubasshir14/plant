import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import CategoryTab from './components/CategoryTab';
import PlantCardDetails from './components/PlantCardDetails';
import Blogs1 from './components/Blogs1';
import Blogs2 from './components/Blogs2';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthProvider from './components/AuthProvider';
import Cart from './components/Cart';
import TopSelling from './components/TopSelling';
import Planters from './components/Planters';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <CategoryTab />
      },
      {
        path: '/category/:id',
        element: <PlantCardDetails />
      },
      {
        path: '/plants/:id',
        element: <PlantCardDetails /> // Add this route
      },
      {
        path: '/blogs1',
        element: <Blogs1 />
      },
      {
        path: '/blogs2',
        element: <Blogs2 />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/hot',
        element: <TopSelling />
      },
      {
        path: '/planters',
        element: <Planters/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto bg-[#E7EDE7]'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)

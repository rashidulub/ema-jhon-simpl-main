import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';

import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import CartProductsLoader from './CartProductsLoader/CartProducsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children :[
      {
          path:'/',
          element:<Shop></Shop>
    },
    {
     path:'Orders',
     element:<Orders></Orders>,
     loader: CartProductsLoader
    },
    {
      path:'Inventory',
      element: <Inventory></Inventory>
    },
    {
      path: '/checkout',
      element:<Checkout></Checkout>

    },
    {
      path:'Login',
      element: <Login></Login>
    }
    
  ]  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)

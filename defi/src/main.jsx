import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from './AppLayout.jsx'
import App from './App.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Features from './Features.jsx'
import Guide from './Guide.jsx'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path: "products",
        element: <Product/>
      },
      {
        path: "features",
        element: <Features/>
      },
      {
        path: "guide",
        element: <Guide/>
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

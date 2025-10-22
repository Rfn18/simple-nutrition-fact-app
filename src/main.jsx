import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Menu from './assets/components/menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/menu",
    element: <Menu />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)

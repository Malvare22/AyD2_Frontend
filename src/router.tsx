import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import LayoutLogin from "./layouts/layoutLogin";
import Register from "./pages/register";

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
        {
            path: '1',
            element: <h1>Inicio</h1>,
        },
        {
            path: '2',
            element: <h1>Final</h1>,
        },
        {
          path: 'login',
          element: <LayoutLogin><Login/></LayoutLogin>
        },
        {
          path: 'register',
          element: <LayoutLogin><Register/></LayoutLogin>
        }
      ]
    },
   
  ]);
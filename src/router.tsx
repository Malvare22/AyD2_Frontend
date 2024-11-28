import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Usuarios from "./pages/Usuarios";

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
          path: '',
          index: true,
          element: <Inicio />
        }
      ]
    },
   
  ]);
import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Usuarios from "./pages/Usuarios";
import Cursos from "./pages/Cursos";
import MatricularCurso from "./pages/MatricularCurso";
import Login from "./pages/login";
import LayoutLogin from "./layouts/layoutLogin";
import Register from "./pages/register";
import Footer from "./components/footer";
import Header from "./components/header";

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
          element: <><Header/><Inicio /><Footer/></>
        },
        {
          path: '/usuarios',
          element: <Usuarios />
        },
        {
          path: '/cursos',
          element: <Cursos />
        },
        {
          path: '/cursos/:id',
          element: <MatricularCurso />
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
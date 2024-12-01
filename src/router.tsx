import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Usuarios from "./pages/Usuarios";
import Cursos from "./pages/Cursos";
import MatricularCurso from "./pages/MatricularCurso";
import Login from "./pages/login";
import LayoutLogin from "./layouts/layoutLogin";
import Footer from "./components/footer";
import Header from "./components/header";
import Registro from "./pages/register";
import Solicitar from "./pages/recuperarContrasenia/Solicitar";
import Cambiar from "./pages/recuperarContrasenia/Cambiar";
import CursosAdmin from "./pages/CursosAdmin";
import CrearCursoAdmin from "./pages/CrearCurso";
import ValidarCodigo from "./pages/recuperarContrasenia/ValidarCodigo";
import EditarCursoAdmin from "./pages/EditarCurso";
import Perfil from "./pages/perfil";

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
          element: <><Header/><Usuarios /><Footer/></>
        },
        {
          path: '/usuarios/registrar',
          element: <LayoutLogin><Registro/></LayoutLogin>
        },
        {
          path: '/cursos',
          element: <><Header/><Cursos /><Footer/></>
        },
        {
          path: '/cursos/:id',
          element: <><Header/><MatricularCurso /><Footer/></>
        },
        {
          path: 'cursos-admin',
          element: <><Header/><CursosAdmin /><Footer/></>
        },
        {
          path: 'cursos-crear',
          element: <><Header/><CrearCursoAdmin /><Footer/></>
        },
        {
          path: 'cursos-editar/:id',
          element: <><Header/><EditarCursoAdmin /><Footer/></>
        },
        {
          path: 'login',
          element: <LayoutLogin><Login/></LayoutLogin>
        },
        {
          path: 'perfil',
          element: <><Header/><div className="md:p-20"><div className="border border-black"><LayoutLogin><Perfil/></LayoutLogin></div></div><Footer/></>
        },
        {
          path: 'cambiarContrasenia',
          children:[
            {
              path: 'solicitar',
              element: <LayoutLogin><Solicitar/></LayoutLogin>
            },
            {
              path: 'cambiar',
              element: <LayoutLogin><Cambiar/></LayoutLogin>
            },
            {
              path: 'validar',
              element: <LayoutLogin><ValidarCodigo/></LayoutLogin>
            }
          ]
        }
      ]
    },
   
  ]);
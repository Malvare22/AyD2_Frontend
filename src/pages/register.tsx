import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";

function Register() {

    const navigate = useNavigate();
    
  return (
    <>
      {/* Contenido */}
      <div className="flex justify-end h-0.5/6">
        <div className="flex space-x-3 p-10">
          <div className="text-xl">Ya tienes una Cuenta?</div>
          <div className="text-xl underline font-semibold text-[#BD0011] cursor-pointer" onClick={() => navigate('/login')}>
            Iniciar Sesión
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-5/6 m-[-40px]">
        <div className="flex justify-center align-middle">
          <div className="w-5/6">
            <div className="font-bold text-4xl text-center mb-12">
              Crear Cuenta
            </div>
            <div className="space-y-8">
              <div className="flex space-x-5">
                <Input label="Código"></Input>
                <Input label="Nombres"></Input>
              </div>
              <div className="flex space-x-5">
                <Input label="Apellidos"></Input>
                <Input label="Correo"></Input>
              </div>
              <div className="w-6/12">
                <Input label="Contraseña"></Input>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => navigate('/login')} className="bg-[#BD0011] hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 h-14">
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ***** */}
    </>
  );
}

export default Register;

import { useNavigate } from "react-router-dom";
import Input from "../../components/input";

function Cambiar() {

    const navigate = useNavigate();
    
  return (
    <>
      {/* Contenido */}
      <div className="flex justify-end h-0.5/6">
        <div className="flex space-x-3 p-10">
          <div className="text-xl underline font-semibold text-[#BD0011] cursor-pointer" onClick={() => navigate('/login')}>
            Iniciar Sesión
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-5/6 m-[-40px]">
        <div className="flex justify-center align-middle">
          <div className="w-3/6">
            <div className="font-bold text-4xl text-center mb-12">
              Nueva Contraseña
            </div>
            <div className="space-y-14">
                <Input label="Nueva Contraseña"></Input>
                <Input label="Confirmación Nueva Contraseña"></Input>
            </div>
            <div className="flex justify-center mt-20">
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

export default Cambiar;

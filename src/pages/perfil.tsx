import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import LayoutLogin from "../layouts/layoutLogin";

function Perfil() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Visible en pantallas medianas y mayores */}
      <div className="hidden md:block">
        <LayoutLogin>
          <Contain />
        </LayoutLogin>
      </div>

      {/* Visible en pantallas pequeñas */}
      <div className="block md:hidden">
        <Contain />
      </div>

      {/* Botón */}
      <div className="my-10 flex justify-center">
        <Button
          text="Cerrar Sesión"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

const Contain = () => {
  return (
    <div className="md:my-24 mb-0">
      <div className="text-4xl text-center font-bold my-10">Perfil</div>
      <div className="md:w-10/12 mx-auto border border-black rounded-lg shadow-lg p-6 text-xl bg-white mb-24">
        {/** Cabecera estética con fondo limpio */}
        <div className="grid grid-cols-2 gap-y-4 items-center p-10 space-y-8">
          {/** Etiquetas alineadas y columnas con estructura */}
          <div className="font-semibold text-bolder text-right pr-4 mt-8">
            Código:
          </div>
          <div className="text-gray-800">12345</div>

          <div className="font-semibold text-bolder text-right pr-4">
            Nombre:
          </div>
          <div className="text-gray-800">Juan</div>

          <div className="font-semibold text-bolder text-right pr-4">
            Apellido:
          </div>
          <div className="text-gray-800">Pérez</div>

          <div className="font-semibold text-bolder text-right pr-4">
            Correo:
          </div>
          <div className="text-gray-800">juan.perez@example.com</div>

          <div className="font-semibold text-bolder text-right pr-4">Rol:</div>
          <div className="text-gray-800">Administrador</div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;

function Perfil() {
  return (
    <>
      <div className="my-24">
        <div className="text-4xl text-center font-bold my-10">Perfil</div>
        <div className="w-10/12 mx-auto border border-black rounded-lg shadow-lg p-6 text-2xl bg-white h-full mb-24">
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

            <div className="font-semibold text-bolder text-right pr-4">
              Rol:
            </div>
            <div className="text-gray-800">Administrador</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;

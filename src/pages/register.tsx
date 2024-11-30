import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../forms/registerSchema"; // Tu esquema Zod
import { z } from "zod";

// Inferimos el tipo de los campos del formulario desde el esquema Zod
type FormData = z.infer<typeof registerSchema>;

function Registro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Hook para "ver" los valores del formulario
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado:", data);
  };

  // Obtén los valores actuales del formulario
  const formValues = watch();

  console.log(formValues); // Esto imprimirá los valores del formulario en tiempo real

  return (
    <>
      {/* Navegación */}
      <div className="flex justify-end h-0.5/6">
        <div className="flex space-x-3 p-10">
          <div className="text-xl">¿Ya tienes una Cuenta?</div>
          <div
            className="text-xl underline font-semibold text-[#BD0011] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="flex flex-col justify-center h-5/6 m-[-40px]">
        <div className="flex justify-center align-middle">
          <form onSubmit={handleSubmit(onSubmit)} className="w-5/6">
            <div className="font-bold text-4xl text-center mb-12">
              Crear Cuenta
            </div>
            <div className="space-y-8">
              {/* Primera fila */}
              <div className="flex space-x-5">
                <div className="w-full">
                  <Input type="text" label="Código" {...register("codigo")} />
                  {errors.codigo && (
                    <p className="text-red-500 text-sm mt-1">{errors.codigo.message}</p>
                  )}
                </div>
                <div className="w-full">
                  <Input type="text" label="Nombres" {...register("nombre")} />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>
              </div>

              {/* Segunda fila */}
              <div className="flex space-x-5">
                <div className="w-full">
                  <Input label="Apellidos" {...register("apellido")} />
                  {errors.apellido && (
                    <p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>
                  )}
                </div>
                <div className="w-full">
                  <Input label="Correo" {...register("correo")} />
                  {errors.correo && (
                    <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>
                  )}
                </div>
              </div>

              {/* Contraseña */}
              <div className="w-6/12">
                <Input label="Contraseña" {...register("contrasena")} />
                {errors.contrasena && (
                  <p className="text-red-500 text-sm mt-1">{errors.contrasena.message}</p>
                )}
              </div>
            </div>

            {/* Botón */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#BD0011] hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-96 h-14"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registro;

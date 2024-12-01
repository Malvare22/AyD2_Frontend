import { useEffect, useState } from "react";
import { Curso, matricular, obtenerDetalle } from "../services/cursoService";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MatricularCurso = () => {
    const [curso, setCurso] = useState<Curso>();
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const response = await obtenerDetalle({ id: parseInt(id!) })
            setCurso(response.curso)
        })();
    }, [])

    const matricularCurso = async () => {
        const response = await Swal.fire({
            text: 'Quieres matricularte en este curso?',
            icon: 'question',
            confirmButtonText: 'Matricularse',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
        })
        if(response.isConfirmed){
            const idE = parseInt(localStorage.getItem('USER_ID')!);
            const response = await matricular({
                id_estudiante: idE,
                id: parseInt(id!)
            })
            Swal.fire({
                title: response.mensaje
            })
            
        }
    }

    return (<>

        <main className="flex-1">

            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
                <div className="relative w-full h-[400px] overflow-hidden">
                    <img
                        src={curso?.ruta_imagen}
                        alt={curso?.nombre}
                        className="w-full h-full object-cover"

                    />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {curso?.nombre}
                </h1>

                <p className="text-gray-600 text-lg mb-6">
                    {curso?.descripcion}
                </p>

                <div className="text-gray-600 mb-8">
                    Inicia el {curso?.fecha_inicio}
                </div>

                <button
                    onClick={()=>matricularCurso()}
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                    Matricular curso {">"}
                </button>
            </div>

        </main>


    </>)
}

export default MatricularCurso;
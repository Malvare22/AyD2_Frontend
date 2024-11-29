import { useEffect, useState } from "react";
import { Curso, listarCursos } from "../services/cursoService";
import CursoCard from "../components/CursoCard";


const Cursos = () => {
    const [cursos, setCursos] = useState<Curso[]>([])

    useEffect(() => {
        (async () => {
            const response = await listarCursos()

            setCursos(response)

        })();
    }, [])

    return (
        <>
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Cursos de Profundización</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Aquí podrás ver todos los cursos que ofertamos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cursos.map((curso, index) => (
                        <CursoCard key={index} curso={curso} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Cursos;
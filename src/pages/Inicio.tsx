import { useEffect, useState } from "react";
import { listarCursos, Curso } from "../services/cursoService";
import CursoCard from "../components/CursoCard";
import { Link } from "react-router-dom";

interface Teacher {
    name: string;
    title: string;
    description: string;
    imageUrl: string;
}

const session = import.meta.env.VITE_SESSION;
const correo = import.meta.env.VITE_EMAIL;

const Inicio = () => {
    const [cursos, setCursos] = useState<Curso[]>([])

    useEffect(() => {
        (async () => {
            const response = await listarCursos({
                session: session, 
                token: "abc",
                correo: correo
            })

            setCursos(response)
            
        })();
    }, [])

    const teachers: Teacher[] = [
        {
            name: 'Full name',
            title: 'Professional title',
            description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip.',
            imageUrl: '/api/placeholder/200/200'
        },
        {
            name: 'Full name',
            title: 'Professional title',
            description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip.',
            imageUrl: '/api/placeholder/200/200'
        },
        {
            name: 'Full name',
            title: 'Professional title',
            description: 'Commodo qui nulla ipsum ea cupidatat sit aliquip.',
            imageUrl: '/api/placeholder/200/200'
        },
    ];
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-between">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold mb-6">Cursos de Profundización</h1>
                    <p className="text-gray-600 mb-8">
                        Explora una variedad de cursos diseñados para ampliar tus conocimientos en áreas especializadas.
                        Postúlate y lleva tu formación académica al siguiente nivel con programas que se ajustan a tus intereses y
                        metas profesionales.
                    </p>
                </div>
                <div className="relative">
                    <img
                        src="/api/placeholder/500/300"
                        alt="Estudiantes"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </section>
            {/* Latest Courses Section */}
            <section className="bg-[#B71C1C] text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Ultimos Cursos Agregados</h2>
                    <p className="text-center mb-12">
                        Explora nuestros cursos y matricúlate en el que más te guste.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {cursos.slice(0,2).map((curso: Curso, idx: number) => <CursoCard key={idx} curso={curso} />)}
                    </div>
                    <div className="text-center mt-12">
                        <Link to={'/cursos'}>
                        <button className="px-6 py-3 bg-black text-white rounded">
                            Ver más cursos
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Teachers Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Nuestros Docentes</h2>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Nuestros cursos son impartidos por un equipo de profesores altamente calificados y con amplia
                        experiencia en sus respectivas áreas. Descubre a los profesionales que te guiarán en tu camino
                        hacia la especialización y éxito académico.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teachers.map((teacher, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <img
                                    src={teacher.imageUrl}
                                    alt={teacher.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <h3 className="font-bold text-xl">{teacher.name}</h3>
                                <p className="text-[#B71C1C] mb-4">{teacher.title}</p>
                                <p className="text-gray-600 mb-4">{teacher.description}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-blue-400">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-blue-700">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Inicio;
import { useEffect, useState } from "react"
import PencilSVG from "../assets/svgs/pencil"
import PlusSVG from "../assets/svgs/plus"
import { Curso, listarCursos } from "../services/cursoService"
import { Link } from "react-router-dom"



const CursosAdmin = () => {
    const [cursos, setCursos] = useState<Curso[]>([])

    useEffect(()=>{
        (async ()=>{
            const response = await listarCursos();
            
            setCursos(response)
        })()
    },[])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">EDITAR CURSOS</h1>
        <Link to='/cursos-crear'>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
          <PlusSVG />
          NUEVO
        </button></Link>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 font-semibold">NOMBRE</th>
              <th className="text-left py-3 px-4 font-semibold">SALÓN</th>
              <th className="text-left py-3 px-4 font-semibold">HORARIO</th>
              <th className="text-left py-3 px-4 font-semibold">PRESUPUESTO</th>
              <th className="text-left py-3 px-4 font-semibold">DOCENTE</th>
              <th className="text-left py-3 px-4 font-semibold">MAXIMO ESTUDIANTES</th>
              <th className="text-left py-3 px-4 font-semibold">EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso, index) => (
              <tr 
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-3 px-4">{curso.nombre}</td>
                <td className="py-3 px-4">{curso.salon}</td>
                <td className="py-3 px-4">{curso.horario}</td>
                <td className="py-3 px-4">$ {curso.presupuesto.toLocaleString()}</td>
                <td className="py-3 px-4">{curso.descripcion}</td>
                <td className="py-3 px-4">{curso.cantidad_maxima_estudiantes}</td>
                <td className="py-3 px-4">
                  <button 
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Editar curso"
                  >
                    <PencilSVG />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CursosAdmin;
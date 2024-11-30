import { useState } from 'react'

interface Person {
  id: string
  name: string
}

const CrearCursoAdmin = () => {
  const [selectedTeachers, setSelectedTeachers] = useState<Person[]>([])
  const [selectedStudents, setSelectedStudents] = useState<Person[]>([])
  const [timeFormat, setTimeFormat] = useState<'AM' | 'PM'>('AM')

  // Sample data for dropdowns
  const people: Person[] = [
    { id: '1', name: 'PEDRO NAVAJAS' },
    { id: '2', name: 'AGUINANDO' },
    { id: '3', name: 'BUÑUELO' },
    { id: '4', name: 'NATILLA' },
    { id: '5', name: 'PEDRO PABLO' },
  ]

  const removeTeacher = (teacherId: string) => {
    setSelectedTeachers(selectedTeachers.filter(t => t.id !== teacherId))
  }

  const removeStudent = (studentId: string) => {
    setSelectedStudents(selectedStudents.filter(s => s.id !== studentId))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">CREAR CURSO</h1>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition-colors">
          GUARDAR
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-2">NOMBRE DEL CURSO:</label>
            <input
              type="text"
              placeholder="NOMBRE DEL CURSO"
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">DESCRIPCIÓN DEL CURSO:</label>
            <textarea
              placeholder="DESCRIPCIÓN DEL CURSO"
              rows={3}
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">SALÓN:</label>
            <input
              type="text"
              placeholder="ESCRIBE EL SALÓN"
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">HORARIO:</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="ESCRIBE EL HORARIO"
                className="flex-1 px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <div className="flex rounded overflow-hidden">
                <button
                  className={`px-3 py-2 ${timeFormat === 'AM' ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTimeFormat('AM')}
                >
                  AM
                </button>
                <button
                  className={`px-3 py-2 ${timeFormat === 'PM' ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => setTimeFormat('PM')}
                >
                  PM
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">PRESUPUESTO:</label>
            <input
              type="text"
              placeholder="ESCRIBE EL PRESUPUESTO"
              className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-2">DOCENTE:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="NOMBRE DEL DOCENTE"
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="mt-2 bg-gray-200 rounded">
              {people.map(person => (
                <button
                  key={person.id}
                  className="w-full text-left px-4 py-2 hover:bg-gray-300 transition-colors"
                  onClick={() => setSelectedTeachers([...selectedTeachers, person])}
                >
                  {person.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">DOCENTE ASIGNADO:</label>
            <div className="flex flex-wrap gap-2">
              {selectedTeachers.map(teacher => (
                <div
                  key={teacher.id}
                  className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
                >
                  {teacher.name}
                  <button
                    onClick={() => removeTeacher(teacher.id)}
                    className="hover:bg-gray-300 rounded-full p-0.5"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">ESTUDIANTE:</label>
            <div className="relative">
              <input
                type="text"
                placeholder="NOMBRE DEL ESTUDIANTE"
                className="w-full px-4 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              
            </div>
            <div className="mt-2 bg-gray-200 rounded max-h-40 overflow-y-auto">
              {people.map(person => (
                <button
                  key={person.id}
                  className="w-full text-left px-4 py-2 hover:bg-gray-300 transition-colors"
                  onClick={() => setSelectedStudents([...selectedStudents, person])}
                >
                  {person.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">ESTUDIANTE ASIGNADOS:</label>
            <div className="flex flex-wrap gap-2">
              {selectedStudents.map(student => (
                <div
                  key={student.id}
                  className="bg-gray-200 px-3 py-1 rounded flex items-center gap-2"
                >
                  {student.name}
                  <button
                    onClick={() => removeStudent(student.id)}
                    className="hover:bg-gray-300 rounded-full p-0.5"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrearCursoAdmin;
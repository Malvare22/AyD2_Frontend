interface User {
    name: string
    code: string
    email: string
    role: "Estudiante" | "Profesor"
}

const users: User[] = [
    {
        name: "Elizabeth Lopez",
        code: "1551186",
        email: "elopez@yahoo.com",
        role: "Estudiante",
    },
    {
        name: "Matthew Martinez",
        code: "1551186",
        email: "mmartinez1997@gmail.com",
        role: "Estudiante",
    },
    {
        name: "Elizabeth Hall",
        code: "1551186",
        email: "elizabeth_1998@gmail.com",
        role: "Estudiante",
    },
    {
        name: "Maria White",
        code: "1551186",
        email: "maria_white@hotmail.com",
        role: "Estudiante",
    },
    {
        name: "Elizabeth Watson",
        code: "1551186",
        email: "ewatson@yahoo.com",
        role: "Estudiante",
    },
    {
        name: "Elizabeth Allen",
        code: "1551186",
        email: "eallen@gmail.com",
        role: "Profesor",
    },
    {
        name: "Caleb Jones",
        code: "1551186",
        email: "calebjones@gmail.com",
        role: "Profesor",
    },
]

const Usuarios = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Usuarios matriculados</h2>
            <div className="border rounded-lg overflow-hidden">
                <table className="w-full border-collapse bg-white text-sm">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Nombre</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Código</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Email</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Rol</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600 w-[100px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.email} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="border-b py-2 px-4">{user.name}</td>
                                <td className="border-b py-2 px-4">{user.code}</td>
                                <td className="border-b py-2 px-4">{user.email}</td>
                                <td className="border-b py-2 px-4">
                                    <span
                                        className={`${user.role === "Estudiante"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="border-b py-2 px-4">
                                    <button
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                                    >
                                        Editar
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

export default Usuarios;
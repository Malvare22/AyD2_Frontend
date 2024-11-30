import { useEffect, useState } from "react";
import { listarCuentas, modificarCuenta, Usuario } from "../services/usuarioService";
import { useNavigate } from "react-router-dom";


interface EditableRowProps {
    usuario: Usuario;
    isEditing: boolean;
    onEdit: () => void;
    onSave: (updatedUser: Usuario) => void;
    onCancel: () => void;
}

// Componente para una fila editable
const EditableRow: React.FC<EditableRowProps> = ({
    usuario,
    isEditing,
    onEdit,
    onSave,
    onCancel
}) => {
    const [editedUser, setEditedUser] = useState<Usuario>(usuario);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onSave(editedUser);
    };
    if (!isEditing) {
        return (
            <tr className="bg-white hover:bg-gray-50">
                <td className="border-b py-2 px-4">{usuario.nombres}</td>
                <td className="border-b py-2 px-4">{usuario.apellidos}</td>
                <td className="border-b py-2 px-4">{usuario.codigo}</td>
                <td className="border-b py-2 px-4">{usuario.correo}</td>
                <td className="border-b py-2 px-4">
                    <span className={`${usuario.rol === "estudiante" ? "text-green-600" : "text-red-600"} capitalize`}>
                        {usuario.rol}
                    </span>
                </td>
                <td className="border-b py-2 px-4">
                    <button
                        onClick={onEdit}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Editar
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <tr className="bg-gray-50">
            <td className="border-b py-2 px-4">
                <input
                    name="nombres"
                    value={editedUser.nombres}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="apellidos"
                    value={editedUser.apellidos}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="codigo"
                    value={editedUser.codigo}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                    disabled
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="correo"
                    value={editedUser.correo}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <select
                    name="rol"
                    value={editedUser.rol}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                >
                    <option value="estudiante">Estudiante</option>
                    <option value="docente">Docente</option>
                </select>
            </td>
            <td className="border-b py-2 px-4">
                <div className="flex gap-2">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-100 hover:bg-green-200 text-green-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Cancelar
                    </button>
                </div>
            </td>
        </tr>
    );
};
    if (!isEditing) {
        return (
            <tr className="bg-white hover:bg-gray-50">
                <td className="border-b py-2 px-4">{usuario.nombres}</td>
                <td className="border-b py-2 px-4">{usuario.apellidos}</td>
                <td className="border-b py-2 px-4">{usuario.codigo}</td>
                <td className="border-b py-2 px-4">{usuario.correo}</td>
                <td className="border-b py-2 px-4">
                    <span className={`${usuario.rol === "estudiante" ? "text-green-600" : "text-red-600"} capitalize`}>
                        {usuario.rol}
                    </span>
                </td>
                <td className="border-b py-2 px-4">
                    <button
                        onClick={onEdit}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Editar
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <tr className="bg-gray-50">
            <td className="border-b py-2 px-4">
                <input
                    name="nombres"
                    value={editedUser.nombres}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="apellidos"
                    value={editedUser.apellidos}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="codigo"
                    value={editedUser.codigo}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                    disabled
                />
            </td>
            <td className="border-b py-2 px-4">
                <input
                    name="correo"
                    value={editedUser.correo}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                />
            </td>
            <td className="border-b py-2 px-4">
                <select
                    name="rol"
                    value={editedUser.rol}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded"
                >
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                </select>
            </td>
            <td className="border-b py-2 px-4">
                <div className="flex gap-2">
                    <button
                        onClick={handleSubmit}
                        className="bg-green-100 hover:bg-green-200 text-green-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Guardar
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded text-sm transition-colors duration-200"
                    >
                        Cancelar
                    </button>
                </div>
            </td>
        </tr>
    );
};

// Componente principal de la tabla
const Usuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const response = await listarCuentas();
            console.log(response);
            if(response.e === '3'){
                navigate("/login");
              }
            setUsuarios(response.usuarios);
        })()
    }, [])

    const handleEdit = (codigo: string) => {
        setEditingId(codigo);
    };

    const handleSave = async (updatedUser: Usuario) => {
        try {
            const response = await modificarCuenta({...updatedUser})
            console.log(response);
            

            // Actualiza el estado local después de la respuesta exitosa del backend
            setUsuarios(prev => prev.map(user =>
                user.codigo === updatedUser.codigo ? updatedUser : user
            ));
            setEditingId(null);
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            // Aquí podrías manejar el error, mostrar una notificación, etc.
        }
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-6">Usuarios matriculados</h2>
            <div className="border rounded-lg overflow-hidden">
                <table className="w-full border-collapse bg-white text-sm">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Nombres</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Apellidos</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Código</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Email</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600">Rol</th>
                            <th className="border-b py-2 px-4 text-left font-semibold text-gray-600 w-[100px]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <EditableRow
                                key={usuario.codigo}
                                usuario={usuario}
                                isEditing={editingId === usuario.codigo}
                                onEdit={() => handleEdit(usuario.codigo)}
                                onSave={handleSave}
                                onCancel={handleCancel}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Usuarios;
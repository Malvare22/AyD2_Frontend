const API_KEY: string = import.meta.env.VITE_API_KEY;
const API_URL: string = import.meta.env.VITE_BACKEND_URL;

interface CursoRequest {
  orden: string;
  id?: number;
  nombre?: string;
  descripcion?: string;
  presupuesto?: number;
  cantidad_maxima_estudiantes?: number;
  fecha_inicio?: string;
  fecha_fin?: string;
  horario?: string;
  salon?: string;
  estado_curso?: "activo" | "inactivo" | "completado";
  imagen?: File;
}

export interface UserSession {
  token: string;
  session: string;
  correo: string;
}

// Types
export interface Curso {
  id: number;
  salon: string;
  estado: string;
  nombre: string;
  horario: string;
  fecha_fin: string;
  descripcion: string;
  presupuesto: number;
  ruta_imagen: string;
  fecha_inicio: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
  cantidad_maxima_estudiantes: number;
}


async function sendCursoRequest(data: CursoRequest): Promise<any> {
  const formData = new FormData();
  const sesion: UserSession = {
    correo: localStorage.getItem('USER_EMAIL')!,
    session: localStorage.getItem('USER_TOKEN')!,
    token: ''
  }
  data = {...data, ...sesion};
  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined) formData.append(key, value as string | Blob);
  });

  

  const response = await fetch(`${API_URL}/api/curso`, {
    method: "POST",
    headers: {
      "x-api-key": API_KEY,
    },
    body: formData,
  });



  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export async function crearCurso(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "crear" });
}

export async function modificarCurso(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "modificar" });
}

export async function eliminarCurso(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "eliminar" });
}

export async function listarCursos() {
  return sendCursoRequest({ orden: "listar" });
}

export async function inscribirCurso(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "inscribir" });
}

export async function desinscribirCurso(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "desinscribir" });
}

export async function gestionarCampo(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "campo" });
}

export async function realizarAccion(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "accion" });
}

export async function obtenerDetalle(params: Omit<CursoRequest, "orden">) {
  return sendCursoRequest({ ...params, orden: "detalle" });
}

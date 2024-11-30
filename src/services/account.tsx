import axiosClient from "./axiosClient";

export const loginUser = async (account: { correo: string; clave: string }) => {
  const response = await axiosClient.post("/api/login", account);
  return response.data;
};

interface passwordChangeProps {
  correo: string;
  orden: "solicitar" | "cambiar" | "validar";
  clave: string;
  codigo: string;
}

const templatePasswordChange: passwordChangeProps = {
  correo: "",
  orden: "solicitar",
  clave: "",
  codigo: "",
};
export const requestPasswordGetCode = async (correo: string) => {
  const body: passwordChangeProps = {
    ...templatePasswordChange,
    correo: correo,
    orden: "solicitar",
  };
  const response = await axiosClient.post("/api/recuperarclave", body);
  return response.data;
};

export const requestPasswordValid = async (correo: string, codigo: string) => {
  const body: passwordChangeProps = {
    ...templatePasswordChange,
    correo: correo,
    orden: "validar",
    codigo: codigo,
  };
  const response = await axiosClient.post("/api/recuperarclave", body);
  return response.data;
};

export const requestPasswordChange = async (
  correo: string,
  codigo: string,
  clave: string
) => {
  const body: passwordChangeProps = {
    ...templatePasswordChange,
    correo: correo,
    orden: "cambiar",
    codigo: codigo,
    clave: clave,
  };
  const response = await axiosClient.post("/api/recuperarclave", body);
  return response.data;
};

// export const registerUser = async (account: { correo: string; clave: string }) => {
//   const response = await axiosClient.post("/api/login", account);
//   return response.data;
// };


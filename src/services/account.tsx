import axiosClient from "./axiosClient";

export const loginUser = async (account: {correo: string, clave: string}) => {
    const response = await axiosClient.post('/api/login', account);
    return response.data;
};
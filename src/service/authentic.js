import httpRequest from "../utils/httpRequest";

export const login = async (email, password) => {
    const data = {
        email,
        password
    }
    try {
        const response = await httpRequest.post('/auth/login', data,{
            params: {
            }
        });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}
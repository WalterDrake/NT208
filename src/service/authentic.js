import httpRequest from "../utils/httpRequest";

export const login = async (email, password) => {
    const data = {
        email,
        password
    }
    try {
        const response = await httpRequest.post(`http://localhost:8017/api/users/StudentLogin/${email}/${password}`,)
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}
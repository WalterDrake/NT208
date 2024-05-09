import * as httpRequest from "../utils/httpRequest";

export const login = async (email, password) => {
    const data = {
        email,
        password
    }
    try {
        const response = await httpRequest.post(`users/StudentLogin/${email}/${password}`,data)
        return response

    }
    catch (error) {
        throw error.response
    }
}

export const logout = async (id) => {
    try {
        const response = await httpRequest.put(`users/StudentLogOut/${id}`)
        return response
    }
    catch (error) {
        throw error.response
    }
}

export const register = async (data) => {
    try {
        const response = await httpRequest.post(`users/StudentReg`, data)
        return response
    }
    catch (error) {
        throw error.response
    }
}

export const getAlluserOnline = async () => {
    try {
        const response = await httpRequest.get(`users/getAlluserOnline/`)
        return response
    }
    catch (error) {
        throw error.response
    }
}

import * as httpRequest from "../utils/httpRequest";

export const getForums = async () => {
    try {
        const response = await httpRequest.get('/forums/')
        return
    }
    catch (error) {
        throw error.response
    }
}

export const getForum = async (idForum) => { // co id forum lay thong tin forum
    try {
        const response = await httpRequest.get(`/forums/${id}`)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const addForum = async (data) => {
    try {
        const response = await httpRequest.post('/forums/', data)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const updateForum = async (id, data) => {
    try {
        const response = await httpRequest.put(`/forums/${id}`, data)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const deleteForum = async (id) => {
    try {
        const response = await httpRequest.delete(`/forums/${id}`)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}
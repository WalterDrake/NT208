import * as httpRequest from "../utils/httpRequest";

export const getForums = async () => {
    try {
        const response = await httpRequest.get('/posts/GetPostAll')
        return response.data
    }
    catch (error) {
        throw error.response
    }
}

export const getForum = async (idForum) => { // co id forum lay thong tin forum
    try {
        const response = await httpRequest.get(`/posts/${idForum}`)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const addForum = async (data) => {
    try {
        const response = await httpRequest.post('/posts/CreateNewPost', data)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const updateForum = async (idUser, data) => { // truyen vo id user cap cai post
    try {
        const response = await httpRequest.put(`/posts/UpdatePost/${idUser}`, data)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}

export const deleteForum = async (id) => {
    try {
        const response = await httpRequest.delete(`/posts/DeletePost/:id${id}`)
        return response.data
    }
    catch (error) {
        throw error.response.data
    }
}


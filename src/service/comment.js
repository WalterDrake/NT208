import * as httpRequest from '../utils/httpRequest'

export const createComment = async (data) => { 
    try {
        return await httpRequest.post('/comments/CreateComment', data)
    }
    catch (error) {
        throw Error(error)
    }
}

export const deleteComment = async (id) => {
    try {
        alert(`/comments/DeleteComment${id}`)
        const res = await httpRequest.delete(`/comments/DeleteComment/${id}`)
        return res
    }
    catch (error) {
        throw Error(error)
    }
}
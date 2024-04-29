import * as httpRequest from '../utils/httpRequest'

export const updateUser = async (id, data) => {
    try {
        const response = await httpRequest.put(`users/${id}/`, data)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}


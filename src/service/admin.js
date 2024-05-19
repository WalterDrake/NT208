import * as HttpRequests from '../utils/httpRequest';

export const getAllStudents = async () => {
    try {
        const response = await HttpRequests.get(`/users/GetAllStudents`)
        return response
    } catch (error) {
        throw error
    }

}
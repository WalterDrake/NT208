import  * as httpRequest from '../utils/httpRequest'

export const getCourses = async () => {
    try {
        const response = await httpRequest.get('/users/Khoahoc/')
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const getCourse = async (id) => {
    try {
        const response = await httpRequest.get(`/users/Khoahoc/${id}`)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}
export const getCoursesStudying = async (id) => {
    const data = id ;
    try {
        const response = await httpRequest.get(`/users/Khoahoc/Studying/`,data)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const getCoursesDone = async (id) => {
    try {
        const data = id ;
        const response = await httpRequest.get(`/users/Khoahoc/Done/`,data)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}
import * as httpRequest from '../utils/httpRequest'

export const createComment = async (data) => { 
    try {
        return await httpRequest.post('/comments/CreateComment', data)
    }
    catch (error) {
        throw Error(error)
    }
}
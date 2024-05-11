import * as httpRequests from "../utils/httpRequest"

export const getAddNoti = async () => {
    try {
        const result = await httpRequests.get('/noti/getall');
        return result.data
    } catch (err)  {
        throw err.response 
    }
}

export const addNoti = async (data) => {
    try {
        const result = await httpRequests.post('/noti/addtall',data);
        return result.data
    } catch (err)  {
        throw err.response 
    }
}
import * as httpRequest from "../utils/httpRequest";

export const login = async (email, password) => {
    const data = {
        email,
        password
    }
    try {

        // const response = await httpRequest.post(`users/StudentLogin/`, data,{
        //     params:{
        //         email,
        //         password
        //     }
        // })
        const response = await httpRequest.post(`users/StudentLogin/${email}/${password}`,data)
        return response

    }
    catch (error) {
        throw error.response
    }
}
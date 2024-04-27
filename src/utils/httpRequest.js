import axios  from "axios";

const httpRequest = axios.create({
    baseURL: 'localhost:3000',
}) 

const get = async (url, config) => {
    const response = await httpRequest.get(url, config);
    return response.data;
}

const post = async (url, data, config) => {
    const response = await httpRequest.post(url, data, config);
    return response.data;
}

export {get , post}
export default httpRequest;
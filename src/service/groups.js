import * as httpRequest from '../utils/httpRequest'


const addGroup = async (ListMemberInit,groupData,owner) => {
    try {
        const { name , code } = groupData
        const res = await httpRequest.post('/groups', {
            listMem: ListMemberInit,
            name: name,
            code: code,
            owner:owner._id,
        })
        return res
    } catch (error) {
        throw error.response
    }
}
const getAllGroupByIdUser = async (id) =>
{
    try {
        const response = await httpRequest.get(`/groups/${id}/getall`)
        return response
    } catch (err) {
        throw err.response
    }
}

const getGroupByIdUser = async (id) => {
    try {
        const response = await httpRequest.get(`/groups/${id}/getprivate`)
        return response
    } catch {
        throw err.response
    }
}

const joinGroup = async (code,userId) => {
    try {
        console.log('code',code)
        const response = await httpRequest.put(`groups/${userId}/join`,code)
        return response
    } catch (err) {
        throw err.response
    }
}
const getGroupByCode = async (code) => {
    try {
        const response = await httpRequest.get(`/groups/${code}/getgroup`)
        return response
    } catch (err) {
        throw err.response
    }
}

const leaveGroup = async (code,idUser) => {
    try {
        const response = await httpRequest.put(`/groups/${idUser}/leave`,{code : code})
        return response
    } catch (err) {
        throw err.response
    }
}
export {
    leaveGroup,
    getGroupByCode,
    addGroup,
    getAllGroupByIdUser,
    getGroupByIdUser,
    joinGroup,
}



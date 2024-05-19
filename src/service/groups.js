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
const deleteGroupById = async (id,ownerId) => {
    try {
        console.log('owner',ownerID,id)
        const response = await httpRequest.delete(`/groups/${id}`,{ownerId})
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
        const response = await httpRequest.get(`groups/${userId}/join`,code)
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
export {
    getGroupByCode,
    addGroup,
    getAllGroupByIdUser,
    deleteGroupById,
    getGroupByIdUser,
    joinGroup,
}



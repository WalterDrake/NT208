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

const joinGroup = async (code) => {
    try {
        const response = await httpRequest.post(`groups/${code}/join`)
        return response
    } catch (err) {
        throw err.response
    }
}

export {
    addGroup,
    getAllGroupByIdUser,
    deleteGroupById,
    getGroupByIdUser,
    joinGroup,
}



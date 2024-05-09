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
        throw error
    }
}
const getAllGroupByIdUser = async (id) =>
{
    try {
        const response = await httpRequest.get(`groups/${id}/getall`)
        return response
    } catch (err) {
        throw err
    }
}

const deleteGroupById = async (id) => {
    try {
        const response = await httpRequest.delete(`groups/${id}`)
        return response
    } catch (err) {
        throw err
    }
}
export {
    addGroup,
    getAllGroupByIdUser
}
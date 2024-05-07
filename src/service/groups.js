import * as httpRequest from '../utils/httpRequest'


const addGroup = async (ListMemberInit,groupData,owner) => {
    try {
        console.log(owner)
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

export {
    addGroup
}
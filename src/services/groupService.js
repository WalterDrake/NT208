/* eslint-disable no-useless-catch */
import { chatRealTimeModel } from '~/models/Hocnhom/ChatRealTime/chatRealTimeModel'
import { groupModel } from '~/models/Hocnhom/groupModel'
import { teamBoxModel } from '~/models/Hocnhom/teamboxModel'
import { studentModel } from '~/models/studentModel'

const createNew = async (reqBody) => {
  try {
    // Handle data according to each project
    const newGroup = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdGroup = await groupModel.createNew(newGroup)
    await groupModel.pushToListMem(createdGroup.insertedId, newGroup.owner)
    // Get record board after calling (optional)
    const getNewGroup = await groupModel.findOneById(createdGroup.insertedId)

    // Return result; note: have to return in Service
    return getNewGroup
  } catch (error) { throw error }
}

const update = async (groupId, reqBody) => {
  try {
    const updateData = {
      ...reqBody
    }
    const updatedGroup = await groupModel.update(groupId, updateData)

    const teamBoxId = await teamBoxModel.findOneById(updatedGroup.teamBoxId)
    if (teamBoxId != null)
    {
      const chatRealTimeId = await chatRealTimeModel.findOneById(teamBoxId.chatRealTimeId)
      if (chatRealTimeId != null)
      {
        const conversationMems = chatRealTimeId.conversationMem
        const groupListMems = updatedGroup.listMem
        for (const conversationMem of conversationMems) {
          if (!groupListMems.includes(conversationMem))
          {
            await chatRealTimeModel.pullMemList(conversationMem, chatRealTimeId._id)
          }
        }
        if (groupListMems.length != chatRealTimeId.conversationMem.length)
        {
          for (const groupListMem of groupListMems)
          {
            if (!chatRealTimeId.conversationMem.includes(groupListMem))
            {
              await chatRealTimeModel.pushMemList(groupListMem, chatRealTimeId._id)
            }
          }
        }
      }
    }

    return updatedGroup
  } catch (error) { throw error }
}

const getAll = async(userID) => {
  const getAllGroup = await groupModel.getAll(userID)
  return getAllGroup
}

const getGroupOwnByTeacher = async(userID) => {
  const getAllGroup = await groupModel.getGroupOwnByTeacher(userID)
  return getAllGroup
}

const getGroupOwnByOther= async(userID) => {
  const getAllGroup = await groupModel.getGroupOwnByOther(userID)
  return getAllGroup
}

const joinGroup = async (userId, reqBody) => {
  try {
    const data = {
      ...reqBody
    }
    const getGroup = await groupModel.findOneByCode(data.code)
    if (getGroup != null)
    {
      await groupModel.pushToListMem(getGroup, userId)
      await studentModel.pushToGroup(getGroup, userId)
    }
    return { Joining: 'Successfully!' }
  } catch (error) { throw error }
}

export const groupService ={
  createNew,
  update,
  getAll,
  getGroupOwnByTeacher,
  getGroupOwnByOther,
  joinGroup
}
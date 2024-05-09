import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { GET_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'
import { studentModel } from '../studentModel'

const GROUP_COLLECTION_NAME = 'groups'
const GROUP_COLLECTION_SCHEMA = Joi.object({
  name: Joi.string().required().min(3).max(50).trim().strict(),
  owner: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE)
    .required(),
  listMem: Joi.array()
    .items(Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE))
    .default([]),
  code: Joi.string().required().min(3).max(50).trim().strict(),
  teamBoxId: Joi.string()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  image: Joi.string()
})

const INVALID_UPDATE_FIELDS = ['_id', 'owner', 'code', 'teamBoxId']

const validateBeforeCreate = async (data) => {
  return await GROUP_COLLECTION_SCHEMA.validateAsync(data, {
    abortEarly: false
  })
}

const createNew = async (data) => {
  try {
    const validData = await validateBeforeCreate(data)
    const newGroupToAdd = {
      ...validData,
      owner: new ObjectId(validData.owner)
    }
    const createdGroup = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .insertOne(newGroupToAdd)
    return createdGroup
  } catch (error) {
    throw new Error(error)
  }
}

const findOneById = async (groupId) => {
  try {
    const result = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .findOne({ _id: new ObjectId(groupId) })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const update = async (groupId, updateData) => {
  try {
    // Filter field before updating
    Object.keys(updateData).forEach((fieldName) => {
      if (INVALID_UPDATE_FIELDS.includes(fieldName)) {
        delete updateData[fieldName]
      }
    })

    if (updateData.listMem) {
      updateData.listMem = updateData.listMem.map((_id) => new ObjectId(_id))
    }

    const result = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(groupId) },
        { $set: updateData },
        { returnDocument: 'after' } // returns the updated document.
      )
    return result || null
  } catch (error) {
    throw new Error(error)
  }
}

const updateTeamBoxId = async (id, teamBoxId) => {
  try {
    const result = await GET_DB()
      .collection(GROUP_COLLECTION_NAME)
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        {
          $set: {
            teamBoxId: teamBoxId
          }
        },
        { returnDocument: 'after' } // returns the updated document.
      )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getAll = async (userId) => {
  try {
    const result = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .aggregate([
        {
          $match: {
            _id: new ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: groupModel.GROUP_COLLECTION_NAME,
            localField: '_id',
            foreignField: 'listMem',
            as: 'groupInfo'
          }
        }
      ])
      .toArray()
    return result[0].groupInfo || null
  } catch (error) {
    throw new Error(error)
  }
}

const getGroupOwnByTeacher = async (userId) => {
  try {
    const result = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .aggregate([
        {
          $match: {
            _id: new ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: groupModel.GROUP_COLLECTION_NAME,
            localField: '_id',
            foreignField: 'listMem',
            as: 'groupInfo'
          }
        },
        {
          $unwind: '$groupInfo' // Unwind the groupInfo array
        },
        {
          $lookup: {
            from: studentModel.USER_COLLECTION_NAME,
            localField: 'groupInfo.owner',
            foreignField: '_id',
            as: 'newGroupInfo'
          }
        },
        {
          $match: {
            'newGroupInfo.role': 'GiaoVien' // Filter based on role
          }
        },
        {
          $group: {
            _id: '$_id', // Group back by user ID
            groupInfo: { $push: '$groupInfo' } // Push the matching groupInfo into an array
          }
        }
      ])
      .toArray()
    return result.length > 0 ? result[0].groupInfo : null
  } catch (error) {
    throw new Error(error)
  }
}

const getGroupOwnByOther = async (userId) => {
  try {
    const result = await GET_DB()
      .collection(studentModel.USER_COLLECTION_NAME)
      .aggregate([
        {
          $match: {
            _id: new ObjectId(userId)
          }
        },
        {
          $lookup: {
            from: groupModel.GROUP_COLLECTION_NAME,
            localField: '_id',
            foreignField: 'listMem',
            as: 'groupInfo'
          }
        },
        {
          $unwind: '$groupInfo' // Unwind the groupInfo array
        },
        {
          $lookup: {
            from: studentModel.USER_COLLECTION_NAME,
            localField: 'groupInfo.owner',
            foreignField: '_id',
            as: 'newGroupInfo'
          }
        },
        {
          $match: {
            'newGroupInfo.role': { $ne: 'GiaoVien' }
          } },
        {
          $group: {
            _id: '$_id', // Group back by user ID
            groupInfo: { $push: '$groupInfo' }
          }
        }
      ])
      .toArray()
    return result.length > 0 ? result[0].groupInfo : null
  } catch (error) {
    throw new Error(error)
  }
}

const pushToListMem = async (getGroup, userId) => {
  try {
    const result = await GET_DB().collection(GROUP_COLLECTION_NAME).findOneAndUpdate(
      { _id: new ObjectId(getGroup._id) },
      { $push: { listMem: new ObjectId(userId) } },
      { returnDocument: 'after' }
    )
    return result
  } catch (error) { throw new Error(error) }
}

const findOneByCode = async (codeId) => {
  try {
    const result = await GET_DB().collection(GROUP_COLLECTION_NAME).find({
      code : codeId
    }).toArray()
    return result.length > 0 ? result[0] : null
  }
  catch (error) { throw new Error(error)}
}

const deleteOneById = async (messageId) => {
  try {
    const result = await GET_DB().collection(GROUP_COLLECTION_NAME).deleteOne({ _id: new ObjectId(messageId) })
    return result
  } catch (error) { throw new Error(error) }
}


export const groupModel = {
  GROUP_COLLECTION_NAME,
  createNew,
  findOneById,
  update,
  updateTeamBoxId,
  getAll,
  getGroupOwnByTeacher,
  getGroupOwnByOther,
  pushToListMem,
  findOneByCode,
  deleteOneById
}

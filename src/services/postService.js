/* eslint-disable no-useless-catch */
import { postModel } from '~/models/postModel'
import ApiError from '~/utils/ApiError'
import { StatusCodes } from 'http-status-codes'


const createNew = async (reqBody) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Handle data according to each project
    const newPost = {
      ...reqBody
    }
    // Call model layer to save record into database
    const createdPost = await postModel.createNew(newPost)

    // Get record board after calling (optional)
    const getNewPost = await postModel.findOneById(createdPost.insertedId)

    // Return result; note: have to return in Service
    return getNewPost
  } catch (error) { throw error }
}

const update = async (postId, reqBody) => {
  try {
    const updateData = {
      ...reqBody
    }
    const updatedPost = await postModel.update(postId, updateData)

    return updatedPost
  } catch (error) { throw error }
}

const deletePost = async (postId) => {
  try {
    const targetPost = await postModel.findOneById(postId)

    if (!targetPost) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'Post not found!')
    }

    await postModel.deleteOneById(postId)

    return { deleteResult: 'Post deleted successfully!' }
  } catch (error) { throw error }
}

export const postService =
{
  createNew,
  update,
  deletePost
}
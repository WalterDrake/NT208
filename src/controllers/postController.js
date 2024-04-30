import { StatusCodes } from 'http-status-codes'
import { postService } from '~/services/postService'

const createNew = async (req, res, next) => {

  try {
    // Direct data to Service
    const createdpost = await postService.createNew(req.body)

    // Return response to Client
    res.status(StatusCodes.CREATED).json({ createdpost })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const postId = req.params.id
    const updatedBoard = await postService.update(postId, req.body)

    res.status(StatusCodes.OK).json(updatedBoard)
  } catch (error) { next(error) }
}

const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id
    const result = await postService.deletePost(postId)

    res.status(StatusCodes.OK).json(result)
  } catch (error) { next(error) }
}

export const postController = {
  createNew,
  update,
  deletePost
}
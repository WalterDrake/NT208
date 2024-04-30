
import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './boardRoute'
import { cardRoute } from './cardRoute'
import { columnRoute } from './columnRoute'
import { todoListRoute } from './todoListRoute'
import { postRoute } from './postRoute'
import { messageModelRoute } from './messageModelRoute'
import { chatRealTimeRoute } from './chatRealTimeRoute'

const Router = express.Router()
// Check APIs /status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs are ready to use.' })
})

// Boards APIs
Router.use('/boards', boardRoute)
// Cards APIs
Router.use('/cards', cardRoute)
// Column APIs
Router.use('/columns', columnRoute)
// TodoList APIs
Router.use('/todolists', todoListRoute)
// // TeamBox APIs
// Router.use('/teambox', teamBoxRoute)
// ChatRealTime APIs
Router.use('/chatrealtime', chatRealTimeRoute)
// MessageModel APIs
Router.use('/messagemodels', messageModelRoute)
// Post APIs
Router.use('/posts', postRoute)
// // VideoRealTime APIs
// Router.use('/videorealtime', videoRealTimeRoute)

export const APIs = Router
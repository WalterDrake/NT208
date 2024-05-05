import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './boardRoute'
import { cardRoute } from './cardRoute'
import { columnRoute } from './columnRoute'
import { todoListRoute } from './todoListRoute'
import { postRoute } from './postRoute'
import { messageModelRoute } from './messageModelRoute'
import { chatRealTimeRoute } from './chatRealTimeRoute'
import { videoRealTimeRoute } from './videoRealTimeRoute'
import { groupRoute } from './groupRoute'
import { teamBoxRoute } from './teamBoxRoute'
import { courseRoute } from './courseRoute'
import { notiRoute } from './notiRoute'
import { baitapRoute } from './baitapRoute'
import { studyRoute } from './studyRoute'
import { cboxRoute } from './commentBoxRoute'
import { commentRoute } from './commentRoute'
import { itemRoute } from './itemRoute'
import { videoRoute } from './videoRoute'

const Router = express.Router()
// Check APIs /status
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'APIs are ready to use.' })
})

/** Board APIs */
Router.use('/boards', boardRoute)
// Cards APIs
Router.use('/cards', cardRoute)
// Column APIs
Router.use('/columns', columnRoute)
// TodoList APIs
Router.use('/todolists', todoListRoute)
// TeamBox APIs
Router.use('/teamboxs', teamBoxRoute)
// ChatRealTime APIs
Router.use('/chatrealtimes', chatRealTimeRoute)
// MessageModel APIs
Router.use('/messagemodels', messageModelRoute)
// VideoRealTime APIs
Router.use('/videorealtimes', videoRealTimeRoute)
// Group APIs
Router.use('/groups', groupRoute)

// Course APIs
Router.use('/courses', courseRoute)
// Baitap APIs
Router.use('/baitaps', baitapRoute)
// Item APIs
Router.use('/items', itemRoute)
// Post APIs
Router.use('/posts', postRoute)
// Noti APIs
Router.use('/notis', notiRoute)
// Videos APIs
Router.use('/videos', videoRoute)
// cbox APIs
Router.use('/cboxs', cboxRoute)
// comment APIs
Router.use('/comments', commentRoute)

// Study APIs
Router.use('/studies', studyRoute)

export const APIs = Router

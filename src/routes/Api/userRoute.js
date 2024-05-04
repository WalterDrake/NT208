import express from 'express'
import { courseController } from '~/controllers/courseController'
import { userController } from '~/controllers/userController'
import { userModel } from '~/models/studentModel'
import { userService } from '~/services/userService'
import { userValidation } from '~/validations/userValidation'

const Router = express.Router()

Router.route('/').get((req, res) => {
  res.json({ message: 'GET: API get list ' })
})

//==============================
// STUDENT - CHỨC NĂNG //
//==============================
//---Đăng nhập- Đăng xuất
//--Chức năng đăng nhập kiểm tra

Router.route('/StudentReg').post(userController.StudentRegister)
Router.route('/StudentLogin/:email/:password').post(
  userController.StudentLogin
)

export const userRoute = Router

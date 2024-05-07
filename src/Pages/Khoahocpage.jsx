import React, { useEffect, useState } from "react"

import KhoahocItem from "./Khoahoc/KhoahocItem"
//import { Link, Route } from "react-router-dom"
import "./Add.css"
import useUser from "../hook/useUser"
import * as courses from '../service/courses'
import { CreateCourse } from "../components/teacherAction/courseAction"


const Khoahocpage = () => {
  const [khoahocs, setKhoahocs] = useState([])
  const { user } = useUser()
  useEffect(() => {
    if(user.role === 'teacher'){
      courses.getCourseListTeacher(user._id).then((res) => {
        if(res)
          setKhoahocs(res)
      }).catch((err) => {
        console.log(err)
      })
    }
    else if( user.role === 'student'){
      courses.getCourseListStudent(user._id).then((res) => {
        setKhoahocs(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    else {
      courses.GetCourseAll().then((res) => {
        setKhoahocs(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])

  return (

    <div className=" dimension ">
      <div className="relative ml-[1rem]">
        <h1 className="text-3xl mb-5 ml-2 font-bold">Khóa học</h1>

        <ul className="flex mb-5">
          <li className="m-2 font-bold effect" >
            Tất cả
          </li>
          <li className="m-2 font-bold effect" >
            Đang học
          </li>
          <li className="m-2 font-bold effect" >
            Hoàn thành
          </li>
        </ul>
        {(user.role === 'teacher' || user.role === 'admin') ? <CreateCourse isCourse={true} isStudy={false} user={user} /> : null}
        <div className="container flex">
          {Array(khoahocs).length > 0 ? (Array(khoahocs)
            .map((khoahoc, index) => (
              <div key={index} className="item">
                <KhoahocItem KhoaHoc={khoahoc} />
              </div>
            ))): <h1>Không có khóa học nào</h1>}
        </div>
      </div>
    </div>

  )
}

export default Khoahocpage

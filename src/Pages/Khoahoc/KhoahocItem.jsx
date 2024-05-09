import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import useUser from "../../hook/useUser"
import *  as courses from '../../service/courses'
import useKhoaHocRender from "../../hook/useKhoaHocRender"


const KhoahocItem = ({ KhoaHoc, className }) => {
  const { user } = useUser()
  const test = useKhoaHocRender()
  const handleDelete = async (e) => {
    e.stopPropagation()
    const res = await courses.deleteCourse(KhoaHoc._id)
    res.then((res) => {
      console.log('res xoa khoa hoc', res)
      if(test)
        test.SetKhoaHocRender(pre => pre +1)
    })
      .catch((err) => {
        console.log('err xoas khoa hoc', err)
      })
  }

  return (
    <div className={`md:ml-4 frame rounded-md bg-white wrap h-auto ${className}`}>
      <Link to={`/Khoahocpage/${KhoaHoc._id}/${KhoaHoc.owner}`}>
        <img
          src={KhoaHoc.linkimage}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt={KhoaHoc.title}
        />
        {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          {/* content của môn học*/}
          <h1 className="font-bold text-xs mb-2 ">{KhoaHoc.title}</h1>
          <h1 className="font-thin text-xs mb-2">{KhoaHoc.description}</h1>
        </div>
      </Link>
      <div className="font-bold text-red-600 flex flex-col md:flex-row justify-between h-auto">
        <span className="text-black">
          <FontAwesomeIcon icon={faUser} />
          {KhoaHoc.memberof}
        </span>
        {(user?.role === "teacher" || user?._id === KhoaHoc.owner) && test != null ?
          (<><button
            onClick={handleDelete}
            className="round-2xl p-2 bg-custom-gradient rounded-xl hover:bg-blue-500 md:mr-4 mr-2">xóa</button></>) : <></>}
      </div>
    </div>
  )
}
export default KhoahocItem

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
    // eslint-disable-next-line no-useless-catch
    try {
      e.stopPropagation()
      const res = await courses.deleteCourse(KhoaHoc._id)
      console.log('res delete course', res)
      if (test != null) {
        test.SetKhoaHocRender(pre => pre + 1)
      }
    }
    catch (err) {
      throw err
    }
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
      <div className=' ml-2.5 mt-1 flex flex-col md:flex-row justify-between'>
        <p className="font-bold mb-4 text-red-600"><span className="text-black mr-1">
          <FontAwesomeIcon icon={faUser} />
        </span>{KhoaHoc.memberof}</p>

        {(user?.role === "admin" || user?._id === KhoaHoc.owner) && test != null ?
          (<><button
            onClick={handleDelete}
            className="ml-2.5 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2">Xóa</button></>) : <></>}


      </div>
    </div>
  )
}
export default KhoahocItem

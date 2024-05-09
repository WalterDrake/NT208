import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import useUser from "../../hook/useUser"
import * as groups from '../../service/groups'
const HocNhomItem = ({ HocNhom }) => { // tạo props với object
  const {user} = useUser()
  const handleDeleteGroup = () => {
    groups.deleteGroupById(HocNhom._id)
    .then((res) => {
      console.log('delete group', res)
    })
    .catch((err) => {
      console.log('err delete group', err)
    })
  }
  return (
      <div className=" ml-4  frame rounded-md bg-white wrap">
    <Link to={`/Hocnhompage/${HocNhom._id}`}>
        <img src={HocNhom.image}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt={HocNhom.name}
        /> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          <h1 className="font-bold text-xs mt-4 mb-4 "> {HocNhom.name}</h1> {/* content của môn học*/}
        </div>
    </Link>
          <div className="font-bold text-red-600 ml-2.5 mt-1 flex flex-col md:flex-row justify-between"> 
          <span className="text-black"><FontAwesomeIcon icon={faUser} />      
           {HocNhom?.listMem.length}
          </span>
          {(user.role ==='admin' || HocNhom?.owner === user._id) && 
          <button 
            onClick={handleDeleteGroup}
            className="ml-2.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2" >Xóa</button>}
          </div>
      </div>
  )
}
// tạo componentHocNhomItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HocNhomItem;

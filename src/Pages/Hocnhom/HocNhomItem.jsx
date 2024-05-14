import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import * as groups from '../../service/groups'

import useUser from '../../hook/useUser'
const HocNhomItem = ({ HocNhom }) => { // tạo props với object
  const { user } = useUser()
  const handleDeleteGroup = () => {
    groups.deleteGroupById(HocNhom._id, HocNhom.owner)
      .then((res) => {
        console.log('delete group', res)
      })
      .catch((err) => {
        console.log('err delete group', err)
      })
  }
  return (
    <div className=' ml-2 mr-2 gap-2 frame rounded-md'>
      <Link to={`/Hocnhompage/${HocNhom._id}`}>
        <div className="mb-3 frame rounded-md bg-white wrap">

          <img src={HocNhom.image}
            className='mt-4 ml-2 rounded-md frame'
            style={{ height: '166.27px', width: '175.53px' }}
            alt={HocNhom.name}
          /> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
          <div className='ml-2.5 mt-1'>
            <h1 className='font-bold text-xs mt-4 mb-4 '> {HocNhom.name}</h1> {/* content của môn học*/}
          </div>

          <div className=' ml-2.5 mt-1 flex flex-col md:flex-row justify-between'>
            <p className="font-bold text-red-600"><span className="text-black">
              <FontAwesomeIcon icon={faUser} />
            </span> {HocNhom?.listMem.length}</p>

            {(user.role === 'admin' || HocNhom?.owner === user._id) &&
              <button
                onClick={handleDeleteGroup}
                className='ml-2.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2' >Xóa</button>}
          </div>
        </div>
      </Link>

    </div>
  )
}
// tạo componentHocNhomItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HocNhomItem;

import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import KhoahocItem from "./Khoahoc/KhoahocItem"
import CreateCourse from "../components/Form/CreateCourse";
//import { Link, Route } from "react-router-dom"
import "./Add.css"
import useUser from "../hook/useUser"
import * as courses from '../service/courses' 

const initkhoahocs = [
  {
    id:1,
    image: 'src\\assets\\KhoaHoc_img\\WannaGame.jpg',
    ten: 'WannaGame',
    mota: 'Chuỗi training CTF do CLB Wanna.W1n tổ chức',
    siso: 30,
    tinhtrang: 1
  },

  {
    id:2,
    image: "src\\assets\\KhoaHoc_img\\AWS.jpg",
    ten: "AWS Cloud Training",
    mota: "Khoa Mạng máy tính và Truyền thông",
    siso: 140,
    tinhtrang: 1
  },

  {
    id:3,
    image: "src\\assets\\KhoaHoc_img\\TDL.png",
    ten: "Truyền dữ liệu",
    mota: "Khoa Mạng máy tính và Truyền thông dữ liệu",
    siso: 100,
    tinhtrang: 1
  },


  {
    id:4,
    image: "src\\assets\\KhoaHoc_img\\dotNET.png",
    ten: "Lập trình mạng căn bản",
    mota: "Khoa Mạng máy tính và Truyền thông",
    siso: 95,
    tinhtrang: 1
  },



  {
    id:5,
    image: "src\\assets\\KhoaHoc_img\\KNTT.jpg",
    ten: "Training Kỹ năng thông tin",
    mota: "Do Thư viện Trường Đại học Công nghệ Thông tin tổ chức",
    siso: 140,
    tinhtrang: 1
  },


  {
    id:6,
    image: "src\\assets\\KhoaHoc_img\\WebProgramming.png",
    ten: "Lập trình Web",
    mota: "Khoa Mạng máy tính và Truyền thông",
    siso: 140,
    tinhtrang: 1
  },


  {
    id:7,
    image: "src\\assets\\KhoaHoc_img\\Vidieukhien.png",
    ten: "Vi xử lý - Vi điều khiển",
    mota: "Khoa Kỹ thuật máy tính",
    siso: 140,
    tinhtrang: 1
  },


  {
    id:8,
    image: "src\\assets\\KhoaHoc_img\\cryptology.jpg",
    ten: "Mật mã học",
    mota: "Khoa Mạng máy tính và Truyền thông",
    siso: 140,
    tinhtrang: 1
  }
]

const Khoahocpage = () => {
  const [khoahoc,setKhoahoc] = useState(initkhoahocs)
  const {user} = useUser()
  const [showFormCreateCourse, setShowFormCreateCourse] = useState(false)
  useEffect(() => {
    courses.getCourses()
      .then((res) => {
          setKhoahoc(res)
      })
      .catch((res)=>
      {
        console.log(res)
        alert('hien khong the lay cac khoa hoc')
      })
  },[])
  const handleCloseFromCreate = () => { 
    setShowFormCreateCourse(false)
  }
  const handleOpenFromCreate = () => { 
    setShowFormCreateCourse(true)
  }
  const [filter, setFilter] = useState(2); // Default filter: all (2)
  const handleFilterChange = (value) => {
    setFilter(value)
  }

  return (

    <div className=" dimension ">
      <div className="relative ml-[1rem]">
        <h1 className="text-3xl mb-5 ml-2 font-bold">Khóa học</h1>

        <ul className="flex mb-5">
          <li className="m-2 font-bold effect" onClick={() => handleFilterChange(2)}>
            Tất cả
          </li>
          <li className="m-2 font-bold effect" onClick={() => handleFilterChange(1)}>
            Đang học
          </li>
          <li className="m-2 font-bold effect" onClick={() => handleFilterChange(0)}>
            Hoàn thành
          </li>
        </ul>
        <Button onClick={handleOpenFromCreate}>Create Course</Button>
        <Dialog open={showFormCreateCourse} onClose={handleCloseFromCreate}>
        <DialogTitle>Create Course</DialogTitle>
        <DialogContent>
          <CreateCourse user={user} isCourse={true} isStudy={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFromCreate}>Cancel</Button>
          <Button onClick={handleCloseFromCreate}>Create</Button>
        </DialogActions>
      </Dialog>
        <div className="container flex">
          {khoahoc
            .filter((item) => filter === 2 || item.tinhtrang === filter)
            .map((khoahoc, index) => (
              <div key={index} className="item">
                <KhoahocItem KhoaHoc={khoahoc} Tinhtrang={filter} />
              </div>
            ))}
        </div>
      </div>
    </div>

  )
}

export default Khoahocpage

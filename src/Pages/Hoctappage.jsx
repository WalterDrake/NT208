import React, { useState } from "react"
import HoctapItem from "./Hoctap/HocTapItem"
import { useParams } from "react-router-dom"
import "./Add.css"
import { FaHeadphonesAlt } from "react-icons/fa"

import useUser from "../hook/useUser"
import { CreateCourse } from "../components/teacherAction/courseAction"


const HocTap = [
  {
    id: 1,
    image: "src\\assets\\HocTap_img\\Quantri.png",
    ten: "Quản trị mạng và hệ thống",
    giaovien: "Bùi Thanh Bình",
    giaovienTH: "Văn Thiên Luân",
    siso: 30,
    tinhtrang: 1
  },

  {
    id: 2,
    image: "src\\assets\\HocTap_img\\HDH.png",
    ten: "Hệ điều hành",
    giaovien: "Đoàn Duy",
    giaovienTH: "",
    siso: 140,
    tinhtrang: 1
  },

  {
    id: 3,
    image: "src\\assets\\HocTap_img\\Truyen.png",
    ten: "Truyền dữ liệu",
    giaovien: "Nguyễn Tấn Hoàng Phước",
    giaovienTH: "Trần Văn Như Ý",
    siso: 100,
    tinhtrang: 1
  },

  {
    id: 4,
    image: "src\\assets\\HocTap_img\\Laptrinh.png",
    ten: "Lập trình mạng căn bản",
    giaovien: "Đặng Lê Bảo Chương",
    giaovienTH: "Nguyễn Văn Bảo",
    siso: 95,
    tinhtrang: 1
  }
]
const Hoctappage = () => {
  const { user } = useUser()
  const [filter, setFilter] = useState(2); // Default filter: all (2)  sài hook nha ae

  const handleFilterChange = (value) => {
    setFilter(value);
  }
  return (
    <div>

      <div className="relative ml-[1rempx]">
        <h1 className="text-3xl mb-5 ml-2 font-bold">Học tập</h1>

        <ul className="flex mb-5">
          <li
            className="m-2 font-bold effect"
            onClick={() => handleFilterChange(2)}
          >
            Tất cả
          </li>
          <li
            className="m-2 font-bold effect"
            onClick={() => handleFilterChange(1)}
          >
            Đang học
          </li>
          <li
            className="m-2 font-bold effect"
            onClick={() => handleFilterChange(0)}
          >
            Hoàn thành
          </li>
        </ul>
        {(user.role === "teacher") ? <CreateCourse isCourse={flase} isStudy={true} user={user}/> : null}

        <div className=" container flex">
          {HocTap.filter(
            (item) => filter === 2 || item.tinhtrang === filter
          ).map((HocTap, index) => (
            <div key={index} className="item">
              <HoctapItem HocTap={HocTap} Tinhtrang={filter} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Hoctappage

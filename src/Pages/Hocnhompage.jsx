import { useState, createContext } from "react";
import HocNhomItem from "./Hocnhom/HocNhomItem";
import HocNhom_Setting from "./Hocnhom/HocNhom_Setting";
import * as GroupActions from './Hocnhom/GroupActions'

const HocNhom = [
  {
    id:1,
    image: "src\\assets\\HocNhom_img\\img_1.jpg",
    ten: "10 điểm Lt Web",
    siso: 6,
    tinhtrang: 0,
  },

  {
    id : 2,
    image: "src\\assets\\HocNhom_img\\img_2.jpg",
    ten: "Chúng ta của tương lai <3",
    siso: 3,
    tinhtrang: 0,
  },

  {
    id: 3,
    image: "src\\assets\\HocNhom_img\\img_3.jpg",
    ten: "Học, học nữa, học mãi....",
    siso: 7,
    tinhtrang: 0,
  },

  {
    id: 4,
    image: "src\\assets\\HocNhom_img\\img_4.jpg",
    ten: "Ăn ngủ cùng dl 💀",
    siso: 10,
    tinhtrang: 0,
  },

  {
    id: 5,
    image: "src\\assets\\HocNhom_img\\img_5.jpg",
    ten: "Im coi, đừng để anh bực bội!",
    siso: 6,
    tinhtrang: 0,
  },
  { 
    id: 6,
    image: "src\\assets\\KhoaHoc_img\\WannaGame.jpg",
    ten: "WannaGame",
    mota: "Chuỗi training CTF do CLB Wanna.W1n tổ chức",
    siso: 30,
    tinhtrang: 1,
  },

  {
    id: 7,
    image: "src\\assets\\KhoaHoc_img\\AWS.jpg",
    ten: "AWS Cloud Training",
    mota: "Khoa Mạng máy tính và Truyền thông",
    siso: 140,
    tinhtrang: 1,
  },
];
export const ShowFormAddGroupContext = createContext()

const HocNhompage = () => {
  const [filter, setFilter] = useState(2) // Default filter: all (2)  sài hook nha ae

  const handleFilterChange = (value) => {
    setFilter(value)
  }

  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [openJoinGroup, setOpenJoinGroup] = useState(false);

  return (
    <div>
      <div className="relative ml-[1rem] ">
        <h1 className="text-3xl mb-5 ml-2 font-bold">Học nhóm</h1>
        <div className="end-3 md:float-right">
          <ShowFormAddGroupContext.Provider value={{openAddGroup, setOpenAddGroup,openJoinGroup, setOpenJoinGroup}}><HocNhom_Setting /></ShowFormAddGroupContext.Provider>
        </div>
        <div className="flex justify-between">
          {" "}
          {/* header của hocnhompage */}
          <ul className="flex mb-5">
            <li
              className="m-2 font-bold effect "
              onClick={() => handleFilterChange(2)}
            >
              Tất cả
            </li>
            <li
              className="m-2 font-bold effect "
              onClick={() => handleFilterChange(1)}
            >
              Lớp học
            </li>
            <li
              className="m-2 font-bold effect"
              onClick={() => handleFilterChange(0)}
            >
              Nhóm riêng tư
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
            {openAddGroup && <GroupActions.CreateGroup />}
            {openJoinGroup && <GroupActions.JoinGroup />}
        </div>
        <div className="container flex">
          {HocNhom.filter(
            (item) => filter === 2 || item.tinhtrang === filter
          ).map((HocNhom, index) => (
            <div key={index} className="item">
              <HocNhomItem HocNhom={HocNhom} Tinhtrang={filter} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HocNhompage

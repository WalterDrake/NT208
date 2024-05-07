import { useState, createContext, useEffect } from "react";
import HocNhomItem from "./Hocnhom/HocNhomItem";
import HocNhom_Setting from "./Hocnhom/HocNhom_Setting";
import * as GroupActions from './Hocnhom/GroupActions'
import * as groups from "../service/groups"
import useUser from "../hook/useUser";


export const ShowFormAddGroupContext = createContext()

const HocNhompage = () => {
   const {user} = useUser()
  const [hocnhoms,setHocnhoms] = useState([])
  useEffect(()=>{
    groups.getAllGroupByIdUser(user._id)
    .then((res) => {
      setHocnhoms(res)
    })
    .catch ((err) => {
      console.log('err get list group',err)
    })
  }
  ,[])
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
              className="m-2 font-bold effect " >
              Tất cả
            </li>
            <li
              className="m-2 font-bold effect " >
              Lớp học
            </li>
            <li
              className="m-2 font-bold effect" >
              Nhóm riêng tư
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
            {openAddGroup && <GroupActions.CreateGroup />}
            {openJoinGroup && <GroupActions.JoinGroup />}
        </div>
        <div className="container flex">
          { hocnhoms.map((HocNhom, index) => (
            <div key={index} className="item">
              <HocNhomItem HocNhom={HocNhom}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HocNhompage

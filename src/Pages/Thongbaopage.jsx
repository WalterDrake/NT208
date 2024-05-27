import React, { useEffect, useState } from 'react'
import ThongBaoItem from '../components/Item/ThongBaoItem'
import useUser from '../hook/useUser'
import * as event from '../service/event'
const Thongbaopage = () => {
  const {user} =useUser()
  console.log(user)
  const [thongBaoList,setThongBaoList] = useState([])
  useEffect(() => {
    if (user.role === "student") {
      event.getStudentEventList(user._id).then(res => {
        setThongBaoList(res)
      }).catch(err => {
        console.log(err)
      })
    } 
    else if (user.role === "admin" || user.role === "teacher"){
      event.getAllEventList().then(res => {
        setThongBaoList(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])
  return (
<div className='w-full'>
  <div className="flex justify-between">
    <h3 className='md:text-4xl text-2xl font-bold'>Thông báo</h3>
  </div>
      <ul className='m-0 bg-custom-gradient'>
        {thongBaoList.length>0&&thongBaoList.map((item,index) => {
          return (
            <ThongBaoItem key={index} thongbao={item}/>
          )
        })}
      </ul>
</div>
  )
}

export default Thongbaopage

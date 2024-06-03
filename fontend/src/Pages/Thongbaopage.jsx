import React, { useEffect, useState } from 'react'
import ThongBaoItem from '../components/Item/ThongBaoItem'
import useUser from '../hook/useUser'
import useNotificationEvent from '../hook/useNotificationEvent'

Array.prototype.reverseMap = function(callback) {
  const newArray = []
  for(let  i = this.length - 1; i >= 0; i--) {
      newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const Thongbaopage = () => {
  const { notificationEvent } = useNotificationEvent()
  return (
    <div className='w-full'>
      <div className="flex justify-between">
        <h3 className='md:text-4xl text-2xl font-bold'>Thông báo</h3>
      </div>
      <ul className='m-0'>
        {notificationEvent.length > 0 && notificationEvent.reverseMap((item, index) => {
          return (
            <ThongBaoItem key={index} thongbao={item} />
          )
        })}
      </ul>
    </div>
  )
}

export default Thongbaopage

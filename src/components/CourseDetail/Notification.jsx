import React,{useContext, useEffect} from 'react'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import * as notification from '../../service/notification'
import AddNotiItem from '../Form/AddNotiItem';
import { CurrentVideoContext } from '../../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem';
export default function Notification({id}) {
  const {curNotiList, setCurNotiList,curItem} = useContext(CurrentVideoContext)
    useEffect(() => {
        notification.GetlistNoti(curItem._id)
        .then(res => {
          if(res)
            setCurNotiList(res)
            console.log('res get list noti', res)
        })
        .catch(err => {
            console.log('err get list noti', err)
        })
    },[curNotiList,curItem])
    const handleShowAddNoti = () => {
        const formAddNoti = document.querySelector('#add-noti-form')
        if (formAddNoti.style.display === 'none') {
          formAddNoti.style.display = 'block'
        } else {
          formAddNoti.style.display = 'none'
        }
    }
  return (
    <div className='absolute w-[15rem] h-[20rem] box-border md:text-xl text-base top-[60px] text-black none right-[0rem] rounded-xl shadow-2xl bg-white' id={id}>
      <div>
        <span className='p-4 relative'><NotificationAddIcon onClick={handleShowAddNoti}></NotificationAddIcon> <AddNotiItem idItem={curItem._id}/></span>
        <h4 className='font-bold border-b-2 border-black inline'>Bài tập</h4>
        </div>
      <div>
        <ul>
            {curNotiList.map((noti, index) => {
                return (
                    <li key={index} className='p-4 border-b-2 border-black'>
                        <h4 className='font-bold'>{noti.title}</h4>
                        <p>{noti.description}</p>
                        <p>{noti.deadline}</p>
                    </li>
                )
            })}
        </ul>
      </div>
    </div>
  )
}

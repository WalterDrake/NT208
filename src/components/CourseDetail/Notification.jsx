import React,{useContext, useEffect} from 'react'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import * as notification from '../../service/notification'
import AddNotiItem from '../Form/AddNotiItem';
import { CurrentVideoContext } from '../../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem';
import useUser from '../../hook/useUser';
export default function Notification({id}) {
  const {user} = useUser()
  const {curNotiList, setCurNotiList,curItem} = useContext(CurrentVideoContext)
    useEffect(() => {
      const intervalListNoti = setInterval(() => {
        notification.GetlistNoti(curItem._id)
        .then(res => {
          if(res)
            setCurNotiList(res)
            // console.log('res get list noti', res)
        })
        .catch(err => {
            console.log('err get list noti', err)
        })},3000)
        return () => {
          clearInterval(intervalListNoti)
        }
    },[curItem])
    const handleShowAddNoti = () => {
        const formAddNoti = document.querySelector('#add-noti-form')
        if (formAddNoti.style.display === 'none') {
          formAddNoti.style.display = 'block'
        } else {
          formAddNoti.style.display = 'none'
        }
    }
  return (
    <div className='absolute w-[15rem] h-[20rem] box-border md:text-xl text-base top-[60px] text-black none right-[0rem] rounded-xl shadow-2xl bg-white ' id={id}>
      <div className='text-center'>
        {(user.role != 'student') && <button onClick={handleShowAddNoti} className='absolute right-0 top-0'><NotificationAddIcon/></button>}
        <h4 className='font-bold border-b-2 border-black inline'>Bài tập</h4>
        </div>
      <div className='overflow-y-auto h-4/5 md:text-base text-sm'>
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

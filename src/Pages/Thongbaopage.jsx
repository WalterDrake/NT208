import React, { useEffect, useState } from 'react'
import ThongBaoItem from '../components/Item/ThongBaoItem'
import useUser from '../hook/useUser'
import {getAddNoti} from '../service/notification'
import { Button } from '@mui/material'
import CreatePost from '../components/Forum/CreatePost'


const Thongbaopage = () => {
  const {user} =useUser()
  console.log(user)
  const [showCreatePost,setShowCreatePost] = useState(false)
  const [thongBaoList,setThongBaoList] = useState([
    {
        id: 1,
        img: 'https://via.placeholder.com/150',
        title: 'Post 1',
        owner: 'User1',
        body: 'This is the body of post 1',
        like: 10,
        comment: 5,
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/156',
        title: 'Post 2',
        owner: 'User1',
        body: 'This is the body of post 2',
        like: 0,
        comment: 0,
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/160',
        title: 'Post 3',
        owner: 'User2',
        body: 'This is the body of post 3',
        like: 1,
        comment: 2,
    }
])
const handleCreatePost = () => {
  setShowCreatePost(pre => !pre)

}
const updateNoti =() => {
  const fecthApiNotification = async () => {
    const result =  await getAddNoti(user._id)
    setThongBaoList(result)
  }
  fecthApiNotification();
}
  useEffect(updateNoti,[])
  return (
<div className='w-full'>
  <div className="flex justify-between">
    <h3>Thong báo đâyyyy</h3>
    {
      (user.role==='teacher') ?
      <Button variant="contained" onClick={handleCreatePost} className="p-2 mr-2 md:mr-8 w-auto max-h-10   ">Create ThongBao</Button> : <></>
    }
  </div>
      <div className="flex justify-center">{showCreatePost && <CreatePost />}</div>
      <ul>
        {thongBaoList.map((item,index) => {
          return (
            <ThongBaoItem key={index} thongbao={item}/>
          )
        })}
      </ul>
</div>
  )
}

export default Thongbaopage

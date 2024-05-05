import React, { useCallback } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { pink } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Tooltip } from '@mui/material';
import * as forum from '../../service/forum'
import UpdatePost from './UpdatePost';

function More({className, myEvent,...props}) {
  return (
    <div className={`relativ ${className}`} {...props}>
      <p onClick={myEvent.handleDelete}>deleted</p>
      {/* <p onClick={myEvent.setShowUpdate(pre => !pre)}>update</p> */}
    </div>
  )
}
export default function PostItem({ post }) {
  const [open, setOpen] = React.useState(false);
  // const [showUpdate, setShowUpdate] = React.useState(false);

  const handleDelete = useCallback(() => {
    forum.deleteForum(post.id)
    .then(() => {
      alert('Delete success')
    })
    .catch(() => {
      alert('Delete failed')
    })
  }, [])
  const handleTooltipClick = () => {
    setOpen(pre => !pre);
  }
  return (
    <>
      {/* {showUpdate && <UpdatePost post={post} setShowUpdate={setShowUpdate} />} */}
      <li className='flex w-[80%] bg-white mx-auto rounded-3xl my-4 overflow-hidden h-auto'>
        <div className="w-1/5">
          <img src="https://via.placeholder.com/150" alt="Post" />
        </div>
        <div className='w-4/5'>
          <div className='flex justify-between'>
            <div className='text-sm font-bold mt-4 mb-2 bg-white shadow py-[2px] w-20 text-center rounded-md'>hoi dap</div>
            <div className='relative'>
              <Tooltip title={<More className=" bg-blue-500 w-auto text-white" myEvent={{handleDelete}}/>}  open={open} onClick={handleTooltipClick}>
                <MoreVertIcon />
              </Tooltip>
            </div>
  
          </div>
          <h3 className='font-bold text-xl bg-slate-100 hover:bg-slate-300 max-w-[70%] w-auto rounded-md shadow pl-8'>{post.title}</h3>
          <div className='flex-col h-full'>
            <div>
              <p>{post.owner}: {post.body}</p>
            </div>
            <div className='flex justify-start'>
              {post.like}<FavoriteIcon sx={{ color: pink[500] }} fontSize='small' className='mx-4' />
              {post.comment}<ChatBubbleIcon color="primary" fontSize='small' className='mx-4' />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

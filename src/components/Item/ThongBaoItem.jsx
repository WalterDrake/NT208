import React, { useCallback } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { pink } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Tooltip } from '@mui/material';

function More({className, myEvent,...props}) {
  return (
    <div className={`relativ ${className}`} {...props}>
      <p onClick={myEvent.handleDelete}>deleted</p>
      {/* <p onClick={myEvent.setShowUpdate(pre => !pre)}>update</p> */}
    </div>
  )
}
export default function ThongBaoItem({ thongbao }) {
  const [open, setOpen] = React.useState(false);
  // const [showUpdate, setShowUpdate] = React.useState(false);

  const handleDelete = useCallback(() => {}, [])
  const handleTooltipClick = () => {
    setOpen(pre => !pre);
  }
  if(!thongbao)
    return <></>
  return (
    <>
      {/* {showUpdate && <UpdateThongBao thongbao={thongbao} setShowUpdate={setShowUpdate} />} */}
      <li className='flex w-[80%] bg-white mx-auto rounded-3xl my-4 overflow-hidden h-auto'>
        <div className="w-1/5">
          <img src="https://via.placeholder.com/150" alt="ThongBao" />
        </div>
        <div className='w-4/5'>
          <div className='flex justify-between'>
            <div className='text-sm font-bold mt-4 mb-2 bg-white shadow py-[2px] w-20 text-center rounded-md'>hoi dap</div>
            <div className='relative'>
              <Tooltip 
                title={<More className=" bg-blue-500 w-auto text-white" myEvent={{handleDelete}}/>}  
                open={open} onClick={handleTooltipClick}
                disableInteractive={false}>
                <MoreVertIcon />
              </Tooltip>
            </div>
  
          </div>
          <h3 className='font-bold text-xl bg-slate-100 hover:bg-slate-300 max-w-[70%] w-auto rounded-md shadow pl-8'>{thongbao.title}</h3>
          <div className='flex-col h-full'>
            <div>
              <p>{thongbao.owner}: {thongbao.body}</p>
            </div>
            <div className='flex justify-start'>
              {thongbao.like}<FavoriteIcon sx={{ color: pink[500] }} fontSize='small' className='mx-4' />
              {thongbao.comment}<ChatBubbleIcon color="primary" fontSize='small' className='mx-4' />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

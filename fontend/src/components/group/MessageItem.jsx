import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import { IconButton, Menu, MenuItem } from '@mui/material'
import useUser from '../../hook/useUser'
import useTime from '../../hook/useTime'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const  MoreMessage = ({deleteMessage, message}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    const handleDelete = () => {
        const isConfirm = window.confirm('Bạn có chắc chắn muốn xóa tin nhắn này không?')
        if(isConfirm) {
            deleteMessage(message)
        }
    }
    return (
        <Box>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
      </Box>
    )
}

function MessageItem({ message, isSameSender , deleteMessage}) {
    const { user } = useUser()
    const [seeTime, setSeeTime] = React.useState(false)

    const handleToggleTime = () => {
        setSeeTime(!seeTime)
    }
    if(message.isDeleted) {
        if (user._id === message.userid) 
        return (
            <div className='flex gap-3 justify-end m-2'>
                <div className='flex gap-3'>
                    <div>
                        <p
                            onClick={handleToggleTime}
                            className='font-thin p-2 bg-slate-400 inline-block box-content border-[2px] border-blue-300 rounded-xl max-w-[300px] break-words'>
                            Tin nhắn đã bị xóa
                        </p>
                        {seeTime && (
                            <time className='block text-[0.7rem] font-thin'>
                                {useTime(message.createdAt)}
                            </time>
                        )}
                    </div>
                    {isSameSender ? (
                        <img className='w-10 h-10 rounded-full' src={message.linkimage} alt='avatar' />
                    ) : (
                        <div className='w-10 h-10 rounded-full'></div>
                    )}
                </div>
            </div>
        )
        if (user._id !== message.userid)
        return (
            <div className='flex gap-3 m-2'>
                <div className='flex gap-3'>
                    {isSameSender ? (
                        <img className='w-10 h-10  rounded-full' src={message.linkimage} alt='avatar' />
                    ) : (
                        <div className='w-10 h-10 rounded-full'></div>
                    )}
                    <div className='w-auto'>
                        {isSameSender && <h4 className='font-bold'>{message.username}</h4>}
                        <p
                            onClick={handleToggleTime}
                            className='font-thin p-2  max-w-[300px] border-[2px] border-gray-500 bg-blue-200 inline-block box-content rounded-xl break-words'>
                            Tin nhắn đã bị xóa
                        </p>
                        {seeTime && (
                            <time className='block text-[0.7rem] font-thin'>
                                {useTime(message.createdAt)}
                            </time>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    if (user._id === message.userid) {
        return (
            <div className='flex gap-3 justify-end m-2'>
                <div className='flex gap-3'>
                    <MoreMessage message= {message} deleteMessage={deleteMessage}/>
                    <div>
                        <p
                            onClick={handleToggleTime}
                            className='font-thin p-2 bg-white inline-block box-content border-[2px] border-blue-300 rounded-xl max-w-[300px] break-words'>
                            {message.message}
                        </p>
                        {seeTime && (
                            <time className='block text-[0.7rem] font-thin'>
                                {useTime(message.createdAt)}
                            </time>
                        )}
                    </div>
                    {isSameSender ? (
                        <img className='w-10 h-10 rounded-full' src={message.linkimage} alt='avatar' />
                    ) : (
                        <div className='w-10 h-10 rounded-full'></div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className='flex gap-3 m-2'>
            <div className='flex gap-3'>
                {isSameSender ? (
                    <img className='w-10 h-10  rounded-full' src={message.linkimage} alt='avatar' />
                ) : (
                    <div className='w-10 h-10 rounded-full'></div>
                )}
                <div className='w-auto'>
                    {isSameSender && <h4 className='font-bold'>{message.username}</h4>}
                    <p
                        onClick={handleToggleTime}
                        className='font-thin p-2 bg-gradient-to-r max-w-[300px] border-[2px] border-gray-500 from-[#7de2fc] to-[#7de2fc] inline-block box-content rounded-xl break-words'>
                        {message.message}
                    </p>
                    {seeTime && (
                        <time className='block text-[0.7rem] font-thin'>
                            {useTime(message.createdAt)}
                        </time>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MessageItem

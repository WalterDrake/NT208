import React, { useEffect, useRef, useContext } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { CurrentVideoContext, CurrentCommentListContext } from '../../../../state/CoursecDetailProvider'
import useUser from '../../../../hook/useUser'
import * as comment from '../../../../service/comment'
import * as commentbox from '../../../../service/commentbox'
import { Avatar, Box, Button, Drawer, TextField } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment';

export default function CommentVideo() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const commentInputRef = useRef(null)
  const { user } = useUser()
  const { curVideo } = useContext(CurrentVideoContext)
  const { curCommentList, setCurCommentList } = useContext(CurrentCommentListContext)

  useEffect(() => {
    const fetchComments = () => {
      commentbox.getListComments(curVideo.commentBox)
        .then(res => {
          if (res)
            setCurCommentList(res)
        })
        .catch(err => {
          console.log('err get list comment', err)
        })
    }

    const intervalId = setInterval(fetchComments, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [curVideo, setCurCommentList])

  const handleSubmitComment = (e) => {
    e.preventDefault()
    const commentText = commentInputRef.current.value
    if (commentText) {
      comment.createComment({ datatext: commentText, owner: user._id, commentbox: curVideo.commentBox })
        .then(res => {
          console.log('res create comment', res)
          commentInputRef.current.value = ''
        })
        .catch(err => {
          alert('error create comment', err)
        })
    }
  }

  const handleDeleteComment = (id) => {
    comment.deleteComment(id)
      .then(res => {
        alert('deleted comment', res)
      })
      .catch(err => {
        console.log('err comment dele', err)
      })
  }

  const DrawerList = (
    <Box sx={{ width: 250, maxHeight:500 }} role="presentation" onClick={toggleDrawer(true)}>
      <div className='mt-8 w-full md:text-base text-xs'>
        <form onSubmit={handleSubmitComment} className='w-full flex justify-center' style={{display:"flex"}} >
          <TextField
            inputRef={commentInputRef}
            type="text"
            className='md:w-2/4 w-3/4 h-14 border-2 border-black'
            placeholder='comment....'
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            <SendIcon />
          </Button>
        </form>
        <div className='w-full flex justify-center'>
          <ul className='md:w-[90%] w-[95%]'>
            {curCommentList.map((comment, index) => (
              <li key={index} className='border-y-2 border-black my-4 rounded-xl w-full'>
                <div className='flex items-center' style={{display:"flex"}}>
                  <Avatar src='https://thespiritofsaigon.net/wp-content/uploads/2022/10/avatar-vo-danh-15.jpg' />
                  <h4 className='font-bold mx-2'>{comment.owner || 'Ẩn danh'}</h4>
                </div>
                <p className='ml-4 text-sm md:text-base'>{comment.datatext}</p>
                {(user.role === 'admin' || comment.owner === user._id) && (
                  <Button onClick={() => handleDeleteComment(comment._id)}>Xóa</Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)} className='fixed right-0 bottom-[200px]'><CommentIcon></CommentIcon>Bình luận</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='bottom'>
        {DrawerList}
      </Drawer>
    </>
  )
}
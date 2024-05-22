import React, { useEffect, useRef, useContext } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { CurrentVideoContext, CurrentCommentListContext } from '../../../../state/CoursecDetailProvider'
import useUser from '../../../../hook/useUser'
import * as comment from '../../../../service/comment'
import * as commentbox from '../../../../service/commentbox'
import { Avatar, Box, Button, Drawer, TextField } from '@mui/material'

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
    fetchComments()

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
        alert('err delete comment', err)
        console.log('err comment dele', err)
      })
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <div className='mt-8 w-full md:text-base text-xs'>
        <form onSubmit={handleSubmitComment} className='w-full flex justify-center'>
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
                <div className='flex items-center'>
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
      <Button onClick={toggleDrawer(true)}>Bình luận</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}
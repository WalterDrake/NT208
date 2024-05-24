import React, { useEffect, useRef, useContext } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { CurrentVideoContext, CurrentCommentListContext } from '../../../../state/CoursecDetailProvider'
import useUser from '../../../../hook/useUser'
import * as comment from '../../../../service/comment'
import * as commentbox from '../../../../service/commentbox'
import { Avatar, Box, Button, Drawer, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'
import { NavigationIcon } from 'lucide-react'

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
    <Box sx={{
      width: 450, padding: 2, display: 'flex'
    }} role="presentation" onClick={toggleDrawer(true)} >
      <div className='mt-8 w-full  md:text-base text-xs'>

        <Box sx={{
          display: 'flex'
        }}>
          {/* <ul className='md:w-[90%] flex flex-row w-[95%]'>
            {curCommentList.map((comment, index) => (
              <li key={index} className='border-y-2 border-black my-4 rounded-xl flex flex-row w-full'>
                <div className='flex flex-row items-center'>
                  <Avatar src='https://thespiritofsaigon.net/wp-content/uploads/2022/10/avatar-vo-danh-15.jpg' />
                  <h4 className='font-bold mx-2'>{comment.owner || 'Ẩn danh'}</h4>
                  <p className='ml-4 text-sm md:text-base'>{comment.datatext}</p>

                </div>
                {(user.role === 'admin' || comment.owner === user._id) && (
                  <Button onClick={() => handleDeleteComment(comment._id)}>Xóa</Button>
                )}
              </li>
            ))}
          </ul> */}

          <List>
            {curCommentList.map((comment, index) => (
              <ListItem sx={{ mb: 2 }} key={index} disablePadding>

                <ListItemIcon sx={{ flexDirection: 'column', mr: 2 }}>
                  <Avatar src='https://thespiritofsaigon.net/wp-content/uploads/2022/10/avatar-vo-danh-15.jpg' />
                  <h4>{comment.owner || 'Ẩn danh'}</h4>

                </ListItemIcon>
                <ListItemText sx={{ border: '2px solid grey', borderRadius: 2, p: 1 }} primary={comment.datatext} />

                {(user.role === 'admin' || comment.owner === user._id) && (
                  <Button onClick={() => handleDeleteComment(comment._id)}>Xóa</Button>
                )}
              </ListItem>
            ))}
          </List>

        </Box>

        <form onSubmit={handleSubmitComment} >
          <TextField

            inputRef={commentInputRef}
            type="text"
            placeholder='comment....'
            variant="outlined"
          />
          <Button sx={{
            ml: 2
          }} type="submit" variant="contained">
            <SendIcon />
          </Button>
        </form>
      </div>
    </Box >
  )

  return (
    <>
      <Fab variant="extended" onClick={toggleDrawer(true)} color="primary" sx={{ position: 'absolute', bottom: 20, right: 25 }}>
        <NavigationIcon sx={{ mr: 1 }} />
        Bình luận
      </Fab>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}
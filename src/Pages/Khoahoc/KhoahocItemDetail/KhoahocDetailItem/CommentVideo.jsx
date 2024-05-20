import React, { useEffect, useRef, useContext } from 'react'
import SendIcon from '@mui/icons-material/Send';

import { CurrentVideoContext, CurrentCommentListContext } from '../../../../state/CoursecDetailProvider';
import useUser from '../../../../hook/useUser'
import * as comment from '../../../../service/comment'
import * as commentbox from '../../../../service/commentbox'
import { Avatar } from '@mui/material';


export default function CommentVideo() {
  const commentInputRef = useRef()
  const { user } = useUser()
  const { curVideo } = useContext(CurrentVideoContext)
  const { curCommentList, setCurCommentList } = useContext(CurrentCommentListContext)
  useEffect(() => {
    const commentForm = document.getElementById('comment-video-form')
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const commentText = commentInputRef.current.value
      if (commentText) {
        comment.createComment({ datatext: commentText, owner: user._id, commentbox: curVideo.commentBox })
          .then(res => {
            console.log('res create comment', res)
          })
          .catch(err => {
            alert('error create comment', err)
          })
      }
    })
  }, [curVideo])
  useEffect(() => {
    const intervalListComment = setInterval(() => {
      commentbox.getListComments(curVideo.commentBox)
        .then(res => {
          if (res)
            setCurCommentList(res)
        })
        .catch(err => {
          console.log('err get list comment', err)
        })
    }, 3000)
    return () => {
      clearInterval(intervalListComment)
    }
  }, [curVideo])

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

  return (
    <div className='mt-8 w-full md:text-base text-xs' >
      <form id="comment-video-form" className='w-full flex justify-center'>
        <input ref={commentInputRef} type="text" className='md:w-2/4 w-3/4  h-14 border-2 border-black' placeholder='comment....' />
        <button type="submit" ><SendIcon /></button>
      </form>
      <div className='w-full flex justify-center' >
        <ul className='md:w-[90%] w-[95%]'>
          {curCommentList.map((comment, index) => {
            return (
              <li key={index} className='border-y-2 border-black my-4 rounded-xl w-full'>
                <div className='flex items-center'>
                  <Avatar src='https://thespiritofsaigon.net/wp-content/uploads/2022/10/avatar-vo-danh-15.jpg' />
                  <h4 className='font-bold mx-2'>{comment.owner || 'Ẩn danh'}</h4>
                </div>
                <p className='ml-4 text-sm md:text-base' >{comment.datatext}</p>
                {(user.role === 'admin' || comment.owner === user._id) ? 
                  <button onClick={() => handleDeleteComment(comment._id)}>xóa</button> : <></>}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

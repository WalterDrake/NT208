import React, { useEffect, useRef,useContext } from 'react'
import SendIcon from '@mui/icons-material/Send';

import { CurrentVideoContext , CurrentCommentListContext} from '../../../../state/CoursecDetailProvider';
import validator from '../../../../hook/validate'
import useUser from '../../../../hook/useUser'
import * as comment from '../../../../service/comment'
import * as commentbox from '../../../../service/commentbox'


export default function CommentVideo() {
  const commentInputRef = useRef()
  const { user } = useUser()
  const { curVideo } = useContext(CurrentVideoContext)
  const {curCommentList,setCurCommentList} = useContext(CurrentCommentListContext)  
  useEffect(() => {
    validator({
      form: '#comment-video-form',
      formGroup: '.form-group',
      errorMessage: '.form-message',
      styleInvalid: 'border-red-500',
      rules: [
        validator.isRequired('#comment-video-input', 'Comment is required')
      ],
      onSubmit: function (data) {
        
        comment.createComment({...data,commentbox:curVideo.commentBox,owner:user._id})
        .then(res => {
          alert('created comment', res)
        })
        .catch((err) => {
          alert('err create comment', err)
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
  },[curVideo])

  return (
    <div className='mt-8 w-full flex md:text-base text-xs justify-center' >
      <form id="comment-video-form" className='w-full'>
        <div className='form-group md:h-auto'>
          <div className="flex rounded-md shadow-sm ring-1 ring-inset 
                        w-[50%] md:h-[60px] 
                      ring-gray-300 focus-within:ring-2 focus-within:ring-inset 
                      focus-within:ring-indigo-600 sm:max-w-md"
                     >
            <input name='datatext' id='comment-video-input'
              ref={commentInputRef}
              type='text' placeholder='comment here'
              className='block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' />
            <span className='items-center justify-center p-2'><button type="submit" >Send< SendIcon /></button></span>
          </div>
          <div className='form-message text-red-500'></div>
        </div>
      </form>
      <div className='w-full'>
        <ul className='w-full'>
          {curCommentList.map((comment, index) => {
            return (
              <li key={index} className='border-b-2 border-black'>
                <h4 className='font-bold'>{comment.owner}</h4>
                <p>{comment.datatext}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

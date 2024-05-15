import React, { useEffect } from 'react'

import validator from '../../../../hook/validate'
import useUser from '../../../../hook/useUser'

export default function CommentVideo() {
  const {user} = useUser()
  useEffect(() => {
    validator({
      form: '#comment-video-form',
      formGroup: '.form-group',
      errorMessage: '.form-message',
      styleInvalid: 'border-red-500 border-2',
      rules: [
        validator.isRequired('#comment-video-form [name="datatext"]', 'Comment is required')
      ],
      onSubmit: function (data) {
        console.log('data comment', data)
      }
    
    })
  },[])

  return (
    <div className='mt-8 w-full flex justify-center'>
      <form id="comment-video-form" className='w-[80%]'>
        <div className='form-group md:h-auto'>
          <input type="text" name="datatext" className='w-full h-[50px] border-[1px] border-gray-300 rounded-xl' placeholder='Comment here...'/>
          <div className='form-message text-red-500'></div>
        </div>
      </form>
    </div>
  )
}

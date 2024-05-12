import React from 'react'

export default function CommentVideo() {
  return (
    <div className='mt-8 w-full flex justify-center'>
        <form className='flex justify-center w-4/5'>
            <div className="form-group w-full flex justify-center">
                <input type="text" className="form-control w-1/2" id="comment" placeholder="Enter comment" name="comment" />
            </div>
        </form>
    </div>
  )
}

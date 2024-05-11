import React, { useEffect } from 'react'
import validator from '../../hook/validate'
export default function CreateVideoForm() {

    useEffect(() => {
        validator({
            form: '#create-video-form',
            formGroup: '.form-group',
            errorMessage: '.form-message',
            styleInvalid: 'border-red-500' ,
            rules: [
                validator.isRequired('#title', 'Vui lòng nhập title'),

            ],
            onsubmit: function (data) {
                console.log('data',data)
                ///call api
            }

        })
    },[])    
  return (
    <form id='create-video-form'>
        <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' className='form-control' />
            <div className='form-message'></div>
        </div>
        <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea id='description' name='description' className='form-control'></textarea>
            <div className='form-message'></div>
        </div>
        <div className='form-group'>
            <label htmlFor='link'>Link Video: </label>
            <input type='text' id='link' name='link' className='form-control' />
            <div className='form-message'></div>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

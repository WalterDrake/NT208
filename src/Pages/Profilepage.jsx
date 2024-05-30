import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'

import * as update from '../service/updates'
import useUser from '../hook/useUser'

const Profilepage = () => {
  const { user, setUser } = useUser()
  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState('123456')
  const [avatar, setAvatar] = useState(user.linkimage)

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmitProfile = (e) => {
    e.preventDefault()
    let data = {}
    if (username && username.trim() !== '')
      data.username = username
    if (password)
      data.password = password
    if (avatar && avatar.trim() !== '')
      data.linkimage = avatar

    if (user.role === 'teacher') {
      update.updateTeacher(user._id, data)
        .then(response => {
          alert('Thay đổi thông tin thành công')
          setUser({ ...user, username, linkimage: avatar })
        })
        .catch(error => {
          alert('Thay đổi thông tin thất bại', error)
        })
    } else {
      update.updateUser(user._id, data)
        .then(response => {
          alert('Thay đổi thông tin thành công')
          setUser({ ...user, username, linkimage: avatar })
        })
        .catch(error => {
          alert('Thay đổi thông tin thất bại', error)
        })
    }
  }

  useEffect(() => {
    const FormProfile = document.querySelector('#form-profile')
    FormProfile.addEventListener('submit', handleSubmitProfile)
  }, [])

  return (
    <div className='m-28 bg-slate-100 w-full flex-row'>
      <h1 className='text-4xl font-bold text-center'>Profile Page</h1>
      <div className='flex justify-center'>
        <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 90, height: 90 }} />
      </div>
      <p>Tên: {user.username}</p>
      <p>Role: {user.role}</p>
      <form id='form-profile' onSubmit={handleSubmitProfile}>
        <div className='profile-form-group flex'>
          <label htmlFor='avatar' className='p-6 w-30 sm:w-40'>Avatar: </label>
          <input type='url' name='avatar' placeholder='chosse link iamge' autoComplete='off' value={avatar} className='border-2 border-black flex-1 ' onChange={e => setAvatar(e.target.value)}></input>
        </div>
        <br></br>
        <>
          <div className='profile-form-group flex'>
            <label htmlFor='username' className='p-6 w-30 sm:w-40'>Username: </label>
            <input type='text' name='username' autoComplete='off' className='border-2 border-black flex-1 ' placeholder='username' value={username} onChange={handleUsername}></input>
          </div>
          <br></br>
          <div className='profile-form-group flex'>
            <label htmlFor='password' className='p-6 w-30 sm:w-40'>Password: </label>
            <input type='password' name='password' className='border-2 border-black flex-1 ' placeholder='nhập password' value={password} onChange={handlePassword}></input>
          </div>
        </>

        <input type='submit' value='Thay doi profile' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'></input>
      </form>
    </div>
  )
}

export default Profilepage
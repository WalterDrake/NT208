import {useState} from 'react'
import { Avatar } from '@mui/material'

import useUser from '../hook/useUser'
import * as update from '../service/updates'

const Profilepage = () => {
  const {user, setUser} = useUser()
  const [username, setUsername] = useState('')
  const [tieusu, setTieusu] = useState('')
  const handleTieuSu = (e) => {
    setTieusu(e.target.value)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleSubmitProfile = (e) => {
    e.preventDefault()
    update.updateUser(user.id, {username, tieusu})
    .then(response => {
      console.log(response)
      alert('Thay đổi thông tin thành công')
      setUser(response)
    })
    .catch(error => {
      alert('Thay đổi thông tin thất bại',error)
    })
  }
  return (
    <div className='m-28 bg-slate-100 w-full flex-row'>
      <h1 className='text-4xl font-bold text-center'>Profile Page</h1>
    <div className='flex justify-center'>
        <Avatar alt="Remy Sharp" 
        src="https://cafefcdn.com/203337114487263232/2023/11/10/3973458008682621746622754496184739628312577n-1699579828420446675022-1699585042628-16995850429731302910822-1699589610283-1699589610606939672173.jpg" 
        sx={{ width: 90, height: 90 }}/>
    </div>
      <h1 className='text-center'> Đổi Ảnh</h1>
    <form id='form-profile' onSubmit={handleSubmitProfile}>
      <div className='profile-form-group flex'> 
        <lable htmlFor='username' className='p-6 w-30 sm:w-40'>Username: </lable>
        <input type='textbox' 
            name='username' 
            className='border-2 border-black flex-1 ' 
            placeholder='username'
            value={username}
            onChange={handleUsername}></input>
      </div>
      <br></br>
      <div className='profile-form-group flex'> 
        <lable htmlFor='username' className='p-6 w-30 sm:w-40'>Tiểu sử: </lable>
        <input type='textbox' 
          name='username' 
          className='border-2 border-black flex-1 ' 
          placeholder='tiểu sử'
          value={tieusu}
          onChange={handleTieuSu}></input>
      </div>
      <input type='submit' value='Thay doi profile' 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' 
      ></input>
    </form>
    </div>
  )
}

export default Profilepage
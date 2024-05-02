import {useState} from 'react'
import Avatar from '@mui/material/Avatar'

import useUser from '../hook/useUser'
import * as update from '../service/updates'

const Profilepage = () => {
  const {user, setUser} = useUser()
  const [username, setUsername] = useState('')
  const [tieusu, setTieusu] = useState('')
 const [avatarurl, setAvatarurl] = useState(null);
const [avatar,setAvatar] = useState(()=>{
    if (user.avatar) {
      return user.avatar
    }
    return null
  
  })  
  const handleTieuSu = (e) => {
    setTieusu(e.target.value)
  }
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmitProfile = (e) => {
    e.preventDefault()
    update.updateUser(user.id, {username, tieusu, avatar})
    .then(response => {
      console.log(response)
      alert('Thay đổi thông tin thành công')
    })
    .catch(error => {
      alert('Thay đổi thông tin thất bại',error)
    })
  }

  const hanleFileChange = (e) => {
    const file = e.target.files[0]
    setAvatar(file)
    setAvatarurl(URL.createObjectURL(file))
  }

  const curAvatar = () => {
    if (user.avatar) {
      return user.avatar
    }
    return avatar
  }
  console.log(avatar)
 

  return (
    <div className='m-28 bg-slate-100 w-full flex-row'>
      <h1 className='text-4xl font-bold text-center'>Profile Page</h1>
    <div className='flex justify-center'>
        <Avatar alt="Remy Sharp" 
        src={avatarurl ? avatarurl : curAvatar()}
        sx={{ width: 90, height: 90 }}/>
    </div>
    <form id='form-profile' onSubmit={handleSubmitProfile}>
      <div className='profile-form-group flex'>
        <label htmlFor = 'avatar' className='p-6 w-30 sm:w-40'>Avatar: </label>
        <input type='file'
          // chỉ file dạng ảnh
          name='avatar'
          accept='image/*'
          placeholder='chpsse avatar'
          onChange={(e) => hanleFileChange(e)}>
        </input>
      </div>
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
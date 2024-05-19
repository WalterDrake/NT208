import { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip } from '@mui/material';
import * as groups from '../../../service/groups'

export default function HocNhomDetail() {
  const { code } = useParams()
  const navigate = useNavigate()
  const [groupDetails, setgroupDetails] = useState({})
  const handleBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    const formMessage = document.querySelector('#message-group-chat-form')
    formMessage.addEventListener('submit', (e) => {
      e.preventDefault()
      const message = formMessage.querySelector('input').value
    })
  }, [])
  useLayoutEffect(() => {
    groups.getGroupByCode(code)
      .then(res => {
        console.log('res', res)
        setgroupDetails(res)
      })
      .catch(err => {
        console.log('err', err)
      })
  }, [code])
  const handleSeeNav = () => {
    const nav = document.querySelector('#nav-bar-group-action')
    nav.classList.toggle('hidden')
  }
  return (
    <div className='relative h-full'> 
      <nav className='flex justify-between 
        bg-gradient-to-r from-[#FE676E] to-[#FD8F52] 
        align-middle items-center
        px-3 md:px-5 h-14'>
        <div className='flex'>
          <Tooltip title='Back' className='md:mx-5 mx-3 hover:bg-blue-500'>
            <ArrowBackIcon fontSize="large" onClick={handleBack} className='cursor-pointer' />
          </Tooltip>
          <h1 className='md:mx-5 mx-3 text-2xl font-bold md:text-4xl'>{groupDetails.name}</h1>
        </div>
        <div className='flex align-middle items-center'>
          <button className='text-black rounded-md px-3 py-1 m-3 hover:bg-[#C73866] block md:hidden'
            onClick={handleSeeNav}>
            More<MoreVertIcon />
          </button>
          <ul className='flex-col md:flex-row gap-2 pr-2 md:flex hidden'>
            <li className='hover:bg-[#FF7A7B]'>Member</li>
            <li className='hover:bg-[#FF7A7B]'>Leave</li>
            <li className='hover:bg-[#FF7A7B]'>Showcode</li>
            <li className='hover:bg-[#FF7A7B]'>Member</li>
          </ul>
        </div>
      </nav>
      <ul className='flex-col  
        bg-gradient-to-r from-[#FFDCA2] to-[#FF7A7B]
        flex items-center gap-2 pr-2 hidden' id="nav-bar-group-action">
        <li className='hover:bg-[#FF7A7B]'>Member</li>
        <li className='hover:bg-[#FF7A7B]'>Leave</li>
        <li className='hover:bg-[#FF7A7B]'>Showcode</li>
        <li className='hover:bg-[#FF7A7B]'>Member</li>
      </ul>
      <div id="chatbox" className='flex h-[calc(100%-56px)] bg-slate-500'>
        <div id="chat-service" 
            className='md:w-[25%] h-full
            bg-gradient-to-r from-[#56C596] to-[#7BE495] '>
        </div>
        <div id="chat-content" 
            className='h-full md:flex-1 
            bg-gradient-to-r from-[#FF9CDA] to-[#EA4492]'>
          <div id="chat-message" className='mt-0 overflow-y-scroll h-4/5'>

          </div>
          {/* chat send */}
          <div id="chat-send" className='h-1/5'>
            <form className='h-full box-border p-2' id='message-group-chat-form'>
              <input type="text" placeholder='Type your message here' 
                  className='box-border w-[70%] mx-[5%] h-full rounded-xl' 
                  />  
              <span className='w-1/5 box-border' id="more-type-message">
                <Tooltip title='image'>
                  <ImageIcon />
                </Tooltip>
                <Tooltip title='more'>
                  <AddCircleIcon />
                </Tooltip>
                <Tooltip title='Send'>
                  <button type='submit'><SendIcon /></button>
                </Tooltip>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


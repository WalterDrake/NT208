import { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Tooltip } from '@mui/material';
import * as groups from '../../../service/groups'
export default function HocNhomDetail() {
  const { code } = useParams()
  const navigate = useNavigate()
  const [groupDetails, setgroupDetails] = useState({})
  const handleBack = () => {
    navigate(-1)
  }
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
  return (
    <div>
      <div className='flex justify-between bg-'>
        <div className='flex'>
          <Tooltip title='Back' className='md:mx-5 mx-3 hover:bg-blue-500'>
            <ArrowBackIcon fontSize="large" onClick={handleBack} className='cursor-pointer' />
          </Tooltip>
          <h1 className='md:mx-5 mx-3 text-2xl font-bold md:text-4xl'>{groupDetails.name}</h1>
        </div>
        <nav className>
          <ul className='flex'>
            <li className='md:mx-5 mx-3 hover:bg-blue-500'>
              <a href='#' className='cursor-pointer'>SeeCode</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

import React from 'react'
import { FaBars, FaSearch, FaHome } from 'react-icons/fa'
import { HiMiniHome } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { UserProfile } from './UserProfile';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='bg-white flex px-4 py-3 justify-end'>

            <div className='flex items-center  gap-x-10 '>
                <div className='justify-start'>
                    <img src='/assets/img/LogoUIT.svg' alt='LogoUIT' />
                </div>
                <div className='relative grow ml-2'>
                    <span className='relative md:absolute inset-y-0 left-0 flex pl-2'>
                        <button className='p-3 focus:outline-none text-black md:text-black'><FaSearch /></button></span>
                    <input type="text" className='mr-2 w-full px-4 py-2 pl-24 rounded shadow-lg outline-none' placeholder='Tìm kiếm Khóa học, Tài liệu, Môn học,...' />
                </div>
                <div className='text-[#0077FF] '>
                    <HiMiniHome className='w-10 h-10' />
                </div>
                <div className='text-[#0077FF]'>
                    <AiOutlineMessage className='w-10 h-10' />
                </div>
                <div className='text-[#0077FF]'>
                    <IoNotificationsOutline className='w-10 h-10' />
                </div>
                <div><UserProfile /></div>

            </div>

        </nav>
    )
}

export default Navbar
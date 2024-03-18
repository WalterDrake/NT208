import React from 'react'
import { FaBars, FaSearch, FaHome } from 'react-icons/fa'
import { HiMiniHome } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { UserProfile } from './UserProfile';
import { IoNotificationsOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className='bg-white items-center flex p-26 pt-[0.5rem]'>
            <div>
                <img className='ml-[4rem]  ' src="./src/assets/LogoUIT.svg" alt="logiUIT" />

            </div>
            <div className=' relative ml-40 h-[3.125rem] w-[27rem]'>
                <input type="text" className='mr-16 w-full px-4 py-2 shadow-lg rounded-3xl border-2 border-gray-300 pl-10 trancate outline-none' placeholder='Tìm kiếm Khóa học, Tài liệu, Môn học,...' />
                <FaSearch className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
            </div>
            <div className='flex items-center ml-auto gap-x-10 '>


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
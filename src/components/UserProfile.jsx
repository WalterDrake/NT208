import React from 'react'

export const UserProfile = () => {
    return (

        <div className='flex w-[14rem] rounded-lg gap-x-2' >
            <div>
                <h1 className='font-bold'>Lê Thị Thùy Trang</h1>
                <h2 className='text-gray-500'>MMTT2022</h2>
            </div>
            <img className='w-[48px] rounded-full shadow-lg border-[4px] border-[#925FE2]' src="./src/assets/Avt.jpg" alt="avt" />
        </div>
    )
}

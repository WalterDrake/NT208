import React from 'react'

export const UserProfile = () => {
    return (

        <div className='flex w-[32rem] rounded-lg gap-x-2' >
            <div>
                <h1 className='font-bold'>Lê Thị Thùy Trang</h1>
                <h2 className='text-gray-500'>MMTT2022</h2>
            </div>
            <img src="/img/avt.svg"
                className='w-30 rounded-full border-[5px] border-purple-500' alt="avt" />

        </div>
    )
}

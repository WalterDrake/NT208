import React, { useEffect, useContext, useState } from 'react'

import { CurrentVideoContext } from '../../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem'
import * as videos from '../../service/videos'
import useUser from '../../hook/useUser'

export default function ListVideo({ item }) {
    const { user } = useUser()
    const { setCurVideourl } = useContext(CurrentVideoContext)
    const [listVideos, setListVideos] = useState([])
    useEffect(() => {
        videos.getVideoOfItem(item._id)
            .then(res => {
                if (res)
                    setListVideos(res)
            })
            .catch(err => {
                console.log('err get video list', err)
            })
    }, [listVideos])
    const handleDeleteVideo = (id) => {
        videos.deleteVideo(id)
            .then(res => {
                console.log('res delete video', res)
            })
            .catch(err => {
                console.log('err delete video', err)
            })
    }
    return (
        <ul className='bg-blue-200 w-full rounded-xl '>
            {listVideos.map((video, index) => {
                return (
                    <li  key={index} className='mt-0 round-xl border-[1px] border-b-black '>
                        <div onClick={() => { setCurVideourl(video.link) }} >
                            <h5> Title: {video.title}</h5>
                            <p className='text-sm font-thin'> Description: {video.description}</p>
                        </div>
                        {(user.role === 'teacher' || user.role === 'admin') && (
                            <button className='ml-[30%] bg-blue-300 rounded-xl hover:bg-blue-500'
                                onClick={() => handleDeleteVideo(video._id)}
                            >Delete</button>
                        )}
                    </li>
                )
            })
            }
        </ul>
    )
}

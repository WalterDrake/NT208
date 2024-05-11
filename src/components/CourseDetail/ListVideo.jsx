import React, { useEffect,useContext } from 'react'

import {CurrentVideoContext} from '../../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem'
import * as videos from '../../service/videos'

export default function ListVideo({item}) {
    const {setCurVideourl} = useContext(CurrentVideoContext)
    const [listVideos, setListVideos] = useState([])
    useEffect(() =>{
        videos.getVideoOfItem(item._id)
        .then(res => {
            console.log('res list video', res)
            setListVideos(res)
        })
        .catch(err => {
            console.log('err', err)
        })
    },[listVideos])
  return (
    <ul>
        {listVideos.map((video, index) => {
            return (
                <li key={index} onClick={() => {setCurVideourl(video.link)}}>
                    <h5>{video.title}</h5>
                    <p>{video.description}</p>
                </li>
            )})
        }
    </ul>
  )
}

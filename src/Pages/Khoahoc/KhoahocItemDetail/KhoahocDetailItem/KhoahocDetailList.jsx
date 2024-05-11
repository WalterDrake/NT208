import { useContext, useEffect, useState } from 'react'
import * as item from '../../../../service/item'
import { CurrentVideoContext } from '../KhoaHocDetailItem'
import CreateVideo from './CreateVideo'
import CreatePost from './CreatePost'
import CreateVideoForm  from '../../../../components/Form/CreateVideoForm'
import CreatePostForItem from '../../../../components/Form/CreatePostForItem'
import useUser from '../../../../hook/useUser'

export default function KhoahocDetailList() {
        const {user} = useUser()
        const [formCreateVideo, setFormCreateVideo] = useState(false)
        const [formCreatePost, setFormCreatePost] = useState(false)
        const { courseDetails } = useContext(CurrentVideoContext)
        const [listItem, setListItem] = useState([])
        useEffect(() => {
                item.getListItemOfCourse(courseDetails._id)
                        .then(res => {
                                console.log('res list item', res)
                                setListItem(res)
                        })
                        .catch(err => {
                                console.log('err', err)
                        })
        }, [courseDetails])
        return (
                <ul className='h-full overflow-auto'>
                        {
                                listItem.map((item, index) => {
                                        return (
                                                <li key={index} className='flex justify-between items-center p-2 border-b border-[#ccc]'>
                                                        <div>
                                                                <h5> Title : {item.title} </h5>
                                                                <p>Description: {item.description}</p>
                                                        </div>
                                                        <button onClick={() => setFormCreateVideo(pre => !pre)}><CreateVideo></CreateVideo></button>
                                                        <button onClick={()=> setFormCreatePost(pre => !pre)}><CreatePost ></CreatePost></button>
                                                        {((user.role === 'admin' || user.role === 'teacher')&&formCreateVideo ) && <CreateVideoForm item={item}></CreateVideoForm>}
                                                        {((user.role === 'admin' || user.role === 'teacher')&&formCreatePost) && <CreatePostForItem></CreatePostForItem>}
                                                </li>
                                        )
                                })
                        }
                </ul>
        )
}

import { useContext, useEffect, useState } from 'react'
import * as item from '../../../../service/item'
import { CurrentVideoContext } from '../KhoaHocDetailItem'


export default function KhoahocDetailList() {
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
                                                        Title : {item.title}
                                                </li>
                                        )
                                })
                        }
                </ul>
        )
}

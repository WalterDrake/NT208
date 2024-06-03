import React, { useEffect, useState ,useRef} from 'react'
import CircularProgress from '@mui/material/CircularProgress'

import PostItem from './PostItem'
import * as forum from '../../service/forum'

Array.prototype.reverseMap = function(callback) {
    const newArray = []
    for(let  i = this.length - 1; i >= 0; i--) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

export default function PostList() {
    const postForumBottomRef = useRef()
    const [posts,setPosts] =useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const RefInterval = setInterval(() => {
            forum.getForumAll()
            .then(res => {
                setPosts(res)
                setLoading(true)
            })
            .catch(err => {
                console.log('err',err)
            })  
        }, 3000)
        return () => {
            clearInterval(RefInterval)
        }
    },[])
    useEffect(() => {
        //postForumBottomRef.current.scrollIntoView({behavior: 'smooth'})
    },[posts])
    if(!loading)
        return (
            <CircularProgress />
        )
  return (
    <ul>
        {posts.length>0 && posts.reverseMap(post => (
            <PostItem post={post} key={post._id} />
        ))}
        <div id='post-forum-bottom' ref={postForumBottomRef}></div>
    </ul>
  )
}

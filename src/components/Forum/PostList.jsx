import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

import * as forum from '../../service/forum'

export default function PostList() {
    const [posts,setPosts] =useState( [
    ])
    useEffect(() => {
        console.log('mount PostList')
        const RefInterval = setInterval(() => {
            forum.getForumAll()
            .then(res => {
                console.log('res interval',res)
                setPosts(res)
            })
            .catch(err => {
                console.log('err',err)
            })
        }, 3000)
        return () => {
            console.log('unmout Post List')
            clearInterval(RefInterval)
        }
    },[])
  return (
    <ul>
        {posts.length>0 && posts.map(post => (
            <PostItem post={post} key={post._id} />
        ))}
    </ul>
  )
}

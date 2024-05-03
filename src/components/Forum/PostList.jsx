import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

import * as forum from '../../service/forum'

export default function PostList() {
    useEffect(() => {
        forum.getForums()
        .then( res => setPosts(res))
        .catch(err => console.log(err))
    }, [])
    const [posts,setPosts] =useState( [
        {
            id: 1,
            img: 'https://via.placeholder.com/150',
            title: 'Post 1',
            owner: 'User1',
            body: 'This is the body of post 1',
            like: 10,
            comment: 5,
        },
        {
            id: 2,
            img: 'https://via.placeholder.com/156',
            title: 'Post 2',
            owner: 'User1',
            body: 'This is the body of post 2',
            like: 0,
            comment: 0,
        },
        {
            id: 3,
            img: 'https://via.placeholder.com/160',
            title: 'Post 3',
            owner: 'User2',
            body: 'This is the body of post 3',
            like: 1,
            comment: 2,
        }
    ])
  return (
    <ul>
        {posts.map(post => (
            <PostItem post={post} key={post.id} />
        ))}
    </ul>
  )
}

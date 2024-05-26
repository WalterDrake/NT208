import React, { useState } from "react"
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import { Link } from "react-router-dom"

import config from '../config/routes'
import PostList from "../components/Forum/PostList"
import CreatePost from '../components/Forum/CreatePost'


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const Diendanpages = () => {
  const [showCreatePost, setShowCreatePost] = useState(false)

  const handleCreatePost = () => {
    setShowCreatePost(!showCreatePost)
  }
  return (
    <div className="ml-2 bg-[#f0f7ff] w-full">
      <div className="w-full flex-col md:flex-row flex justify-between">
        <div className="flex flex-col md:flex-row m-4">
          <Link to="/Student/dashboard">
            <Button variant="contained" className="bg-black mr-2 rounded-full">Hello world</Button>
          </Link>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            className="w-auto"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
          <CropOriginalIcon className="text-pink-300" />
        </div>
        <Button variant="contained" onClick={handleCreatePost} className="p-2 mr-2 md:mr-8 w-auto max-h-10   ">Create Post</Button>
      </div>
      <div className="flex justify-center">{showCreatePost && <CreatePost setShowCreatePost={setShowCreatePost} />}</div>
      {/* <VideoList /> */}
      <PostList />
    </div >
  )
}

export default Diendanpages

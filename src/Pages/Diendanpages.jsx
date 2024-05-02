import React from "react"
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import VideoList from "./Dropdown/VideoList"
import { Link } from "react-router-dom"
import config from '../config/routes'

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
  return (
    <div className="ml-2">
      <Link to="/Student/dashboard">
        <Button variant="contained" className="bg-black mr-2 rounded-full" >Hello world</Button>
      </Link>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      <CropOriginalIcon className="text-pink-300" />
      <VideoList />
    </div >
  )
}

export default Diendanpages

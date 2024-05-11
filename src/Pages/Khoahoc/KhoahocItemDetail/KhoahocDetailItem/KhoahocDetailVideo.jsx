import React from 'react'
import { useContext } from 'react'
import { CurrentVideoContext } from '../KhoaHocDetailItem'

export default function KhoahocDetailVideo() {
  const {curVideo} = useContext(CurrentVideoContext)
  return (
    <div>
      <iframe width="560" 
      height="315" 
      src={curVideo}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>

      </iframe>
    </div>
  )
}


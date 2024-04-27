import React from 'react'
import { useContext } from 'react'
import { CurrentVideoContext } from '../../../../Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail'

export default function KhoahocDetailVideo() {
  const {curVideo} = useContext(CurrentVideoContext)
  console
  return (
    <div>
      <iframe width="660" 
      height="400" 
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


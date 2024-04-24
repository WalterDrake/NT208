import React from 'react'
import { useContext } from 'react'
import { CurrentVideoContext } from '../../../../Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail'

export default function KhoahocDetailVideo() {
  const {curVideo} = useContext(CurrentVideoContext)
  return (
    <div>
      Video kHóa học {curVideo}
    </div>
  )
}

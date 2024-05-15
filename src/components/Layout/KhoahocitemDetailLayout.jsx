import React from 'react'
import Navbar from '../Navbar'
import CoursecDetailProvider from '../../state/CoursecDetailProvider'

export default function KhoahocitemDetailLayout({children}) {
  return (
    <div   className="bg-blue-100 w-screen  box-border flex-col ">
      <header>
        <Navbar/>
      </header>
      <div className='h-[100px]'></div>

      <CoursecDetailProvider>
        <div className='mt-0 box-border w-full '>{children}</div>
      </CoursecDetailProvider>
    </div>
  )
}

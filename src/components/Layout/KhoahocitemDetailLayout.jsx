import React from 'react'
import Navbar from '../Navbar'

export default function KhoahocitemDetailLayout({children}) {
  return (
    <div   className="bg-blue-100 w-screen  box-border flex-col ">
      <header>
        <Navbar/>
      </header>
      <div className='mt-[7.5rem] box-border w-full '>{children}</div>
    </div>
  )
}

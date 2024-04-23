import React from 'react'
import Navbar from '../Navbar'
export default function KhoahocitemDetailLayout({children}) {
  return (
    <div className="bg-blue-100">
      <header>
        <Navbar />
      </header>
      <div className='mt-[7.5rem]'>{children}</div>
    </div>
  )
}

import React from 'react'

export default function HocnhomDetailLayout({children}) {
return (
  <div className="flex flex-col min-h-screen">
  <header>
    <Navbar />
  </header>
    <div className='h-screen mt-[100px]'>
      {children}
    </div>
</div >
  )
}

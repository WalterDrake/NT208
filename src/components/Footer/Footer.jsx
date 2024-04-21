import React from 'react'
import ItemsContainer from './ItemsContainer'

const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <footer className="bg-gradient-to-r from-[#0077FF] to-[#B5D5FB]  rounded-t-lg  opacity-50 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
      text-center pt-2 text-[#656567] text-sm pb-7">
        <span>Copyright © UITeCo {Year} . All rights reserved.</span>


      </div>
    </footer>
  )
}

export default Footer

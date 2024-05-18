import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='bg-[#191919]  '>
        <Navbar/>
        <div className='line w-full h-[1px] bg-slate-500 align-content '></div>
    </div>
  )
}

export default Header
import React from 'react'
import NavLinks from './Navlinks'

import facebook from '../assets/shared/desktop/icon-facebook.svg'
import twiter from '../assets/shared/desktop/icon-twitter.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#191919]'>
     
<footer
  class="flex flex-col  items-center  text-center text-surface text-white  lg:text-left align-content">
  <div class="container p-6">
    <div class="grid gap-4 lg:grid-cols-2">
      <div class="mb-6 md:mb-0">
        <Link to="/"class="mb-2 text-3xl font-bold">audiophiles</Link>

        <p class="mb-14 text-gray-500">
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>

        <p className='text-gray-500 mb-8'>Copyright 2021. All Rights Reserved</p>
      </div>

      <div class="mb-6 md:mb-1">
        <ul className='lg:flex gap-6 font-bold items-center justify-end '>
          <NavLinks/>
        </ul>

        <div className='flex items-center justify-end mt-28  gap-4'>
          <a href=""><img src={facebook} alt="" /></a>
          <a href=""><img src={twiter} alt="" /></a>
          <a href=""><img src={instagram} alt="" /></a>
        </div>
      </div>
    </div>
  </div>

</footer>
    </div>
  )
}

export default Footer
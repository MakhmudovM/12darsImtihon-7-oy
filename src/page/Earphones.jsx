import { Link } from 'react-router-dom'


import headphones from '../assets/cart/image-xx99-mark-one-headphones.jpg'
import speaker from '../assets/cart/image-zx9-speaker.jpg'
import earphones from '../assets/cart/image-yx1-earphones.jpg'
import bestImg from '../assets/shared/desktop/image-best-gear.jpg'

import hero1 from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

function Earphones() {
  return (
    <div className='bg-[#FAFAFA]'>

       <div className='bg-[#191919] py-[98px]'>
        <h1 className=' text-center font-bold text-5xl text-[#ffffff]'>EARPHONES</h1>
      </div>

      <div className='my-[160px] flex items-center justify-center contain gap-32'>
        <div>
          <img src={hero1} alt=""  className='w-[540px] h-[560px]'/>
        </div>
        <div className='w-[445px]'>
          <h3 className='mb-6 tracking-[8px] text-orange-500'>NEW PRODUCT</h3>
          <h2 className='text-5xl font-bold leading-[50px] tracking-[4px mb-8 uppercase'>YX1 WIRELESS<br/> EARPHONES</h2>
          <p className=' mb-10'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <Link to="/earphonesI" className='font-bold bg-orange-400 py-4 px-8 text-white'>SEE PRODUCT</Link>
        </div>
      </div>


      <div className=' bg-white mb-20 mt-20 '>
          <ul className='flex items-center justify-center gap-40 p-14 contain'>
            <li className='flex flex-col items-center'>
              <img src={headphones} alt="" />
              <h3 className='font-bold'>HEADPHONES</h3>
              <Link to="/headphones">SHOP <span className=' text-orange-500 font-bold text-center ml-1'>{">"}</span></Link>
            </li>
            
            <li className='flex flex-col items-center'>
              <img src={speaker} alt="" />
              <h3 className='font-bold'>SPEAKERS</h3>
              <Link to="/speakers">SHOP<span className=' text-orange-500 font-bold text-center ml-1'>{">"}</span></Link>
            </li>

            <li className='flex flex-col items-center'>
              <img src={earphones} alt="" />
              <h3 className='font-bold'>EARPHONES</h3>
              <Link to="/earphones">SHOP <span className=' text-orange-500 font-bold text-center ml-1'>{">"}</span></Link>
            </li>
          </ul>
        </div>


        <div className='contain flex items-center gap-32 mb-52'>
            <div className='w-[445px] h-[295px] font-san  '>
              <h2 className='font-bold text-4xl mb-8 uppercase'>Bringing you the
              <br/>
              <span className=' text-orange-500'>best</span> audio gear</h2>
              <p className=' text-gray-500'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div > 
              <img src={bestImg} alt="" className='w-[540px] h-[580px] rounded-md'/>
            </div>
          </div>

    </div>
  )
}

export default Earphones
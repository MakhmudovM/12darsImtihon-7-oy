import { Link } from 'react-router-dom'


import headphones from '../assets/cart/image-xx99-mark-one-headphones.jpg'
import speaker from '../assets/cart/image-zx9-speaker.jpg'
import earphones from '../assets/cart/image-yx1-earphones.jpg'
import bestImg from '../assets/shared/desktop/image-best-gear.jpg'
import speaker1 from '../assets/shared/desktop/image-zx9-speaker.jpg'
import speaker2 from '../assets/shared/desktop/image-zx7-speaker.jpg'
 

function Speakers() {
  return (
    <div className='bg-[#FAFAFA]'>
       <div className='bg-[#191919] py-[98px]'>
        <h1 className=' text-center font-bold text-5xl text-[#ffffff]'>SPEAKERS</h1>
      </div>

      <div className='my-[160px] flex items-center justify-center contain gap-32'>
        <div>
          <img src={speaker1} alt=""  className='w-[540px] h-[560px]'/>
        </div>
        <div className='w-[445px]'>
          <h3 className='mb-6 tracking-[8px] text-orange-500'>NEW PRODUCT</h3>
          <h2 className='text-5xl font-bold leading-[50px] tracking-[4px mb-8 uppercase'>ZX9<br/> SPEAKER</h2>
          <p className=' mb-10'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <Link to="/speakersI" className='font-bold bg-orange-400 py-4 px-8 text-white'>SEE PRODUCT</Link>
        </div>
      </div>


      <div className='my-[160px] flex items-center justify-center contain gap-32'>
        <div className='w-[445px]'>
          <h2 className='text-5xl font-bold leading-[50px] tracking-[4px mb-8 uppercase'>ZX7<br/> SPEAKER</h2>
          <p className=' mb-10'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <Link to="/speakersII" className='font-bold bg-orange-400 py-4 px-8 text-white'>SEE PRODUCT</Link>
        </div>
        <div>
          <img src={speaker2} alt=""  className='w-[540px] h-[560px]'/>
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

export default Speakers
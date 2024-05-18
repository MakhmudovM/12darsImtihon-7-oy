import { Link } from 'react-router-dom'

import imageHero from '../assets/home/desktop/image-hero.jpg'
import headphones from '../assets/cart/image-xx99-mark-one-headphones.jpg'
import speaker from '../assets/cart/image-zx9-speaker.jpg'
import earphones from '../assets/cart/image-yx1-earphones.jpg'
import right from '../assets/shared/desktop/icon-arrow-right.svg'
import twoHeroBG from '../assets/home/desktop/pattern-circles.svg'
import speakerHR from '../assets/home/desktop/image-speaker-zx9.png'
import speakerHR2 from '../assets/home/desktop/image-speaker-zx7.jpg'
import earphonesHR from '../assets/home/desktop/image-earphones-yx1.jpg'
import bestImg from '../assets/shared/desktop/image-best-gear.jpg'




function Home() {
  return (
    <div className=''>
      <div className='bg-[#191919]'>
        
        <div className='hero align-content text-white'>
        
          <div className='something'>
            <img src={imageHero} alt=""  />
          </div>
          <div className='w-[398px] h-[346px] font-san mr-auto'>
            <p className='c'>NEW PRODUCT</p>
            <h1 className='text-5xl font-bold leading-[50px] mb-6 tracking-[6px]  '> XX99 Mark II Headphones</h1>
            <p className='w-[349px] mb-10'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <Link className='font-bold bg-orange-400 py-4 px-8' to="/headphones">SEE PRODUCT</Link>
          </div>
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

        
          <div className="contain flex w-full h-[560px] bg-[#D87D4A] rounded-lg p-5 justify-between">
           <div><img src={speakerHR} alt="speaker" className='w-[400px] h-[470px] ml-[100px] mt-[72px]'/></div>

           <div className='flex flex-col justify-center text-white'>
            <h2 className='text-5xl font-bold leading-[50px]  tracking-[4px] '>ZX9</h2>
            <span className='text-5xl font-bold leading-[50px] mb-6 tracking-[4px]'>SPEAKER</span>
            <p className='w-[349px] mb-10'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to="/speakersI" className='font-bold py-3 px-8 bg-black w-[160px] h-[48px] text-center'>See Product</Link>
           </div>

          </div>

          <div className='contain mt-12 mb-12'>
            <div>
            <div className="flex md:flex-row md:gap-[11px] lg:gap-[30px] w-full md:h-full lg:min-w-[730px]">
          <img src={speakerHR2} alt="" className=' relative'/>
          <div className="flex-1 bg-gray-light lg:h-[360px] rounded-[8px] absolute">
            <div className="h-full flex flex-col items-start md:justify-evenly md:py-[100px] lg:px-20">
              <h4 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase mb-8">ZX7 SPEAKER</h4>
              <Link to="/speakersII">
                <button className="btn uppercase bg-transparent text-black border-black border-3 w-[160px] rounded-none">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </div>
            </div>
          </div>

          <div className='contain flex mb-52'>
            <div>
              <img src={earphonesHR} alt="" className=' rounded-md' />
            </div>
            <div className="h-full flex flex-col items-start md:justify-evenly md:py-[100px] lg:px-20 ml-6">
              <h4 className="text-[28px] font-bold leading-normal tracking-[2px] uppercase mb-8">YX1 Earphones</h4>
              <Link to="/earphonesI">
                <button className="btn uppercase bg-transparent text-black border-black border-3 w-[160px] rounded-none">
                  See Product
                </button>
              </Link>
            </div>
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

export default Home
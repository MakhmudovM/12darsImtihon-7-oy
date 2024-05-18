
import { Link, useParams } from 'react-router-dom'



import bestImg from '../assets/shared/desktop/image-best-gear.jpg'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import data from '../data/db.json'





function SingleProduct() {
  const { slug } = useParams();
  const [productData, setProductData] = useState(null);
  const [cartNum, setCartNum] = useState(1);
  const dispatch = useDispatch();
  const cartDecreaseHandler = () => {
    if (cartNum > 1) {
      setCartNum(cartNum - 1);
    }
  };
  

  const cartIncreaseHandler = () => {
    setCartNum(cartNum + 1);
  };

  const addToCartHandler = () => {
    const cartProduct = {
      id: productData.id,
      price: productData.price,
      quantity: cartNum,
      totalPrice: productData.price,
      name: productData.name,
      image: productData.image,
    };
    dispatch(addItemToCart(cartProduct));
  };

  useEffect(() => {
    const matchedProduct = data.find((product) => product.slug === slug);
    setProductData(matchedProduct);
  }, [slug]);

  
  
  return (
    <div>
        <div className='contain mt-20 mb-14'>
            <Link to="/" className=' text-slate-500'>Go Back</Link>
        </div>

        <div className='contain mb-40 flex items-center gap-32 '>
            <div>
                <img src="" alt="" className='w-[540px] h-[560px] bg-slate-100 rounded-md'/>
            </div>
            <div className='content'>
                <h3 className='tracking-[8px] text-orange-500 mb-4'>NEW PRODUCT</h3>
                <h2 className='font-bold text-[40px] tracking-[1.5px leading-10'>YX1 WIRELESS</h2>
                <h2 className='font-bold text-[40px] tracking-[1.5px] leading-10 mb-8'>EARPHONES</h2>
                <p className=' text-base leading-6 opacity-50 text-black mb-8'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <span className='font-bold text-lg leading-6 tracking-[1.3px]'>$ 599</span>

                <div className='flex gap-6 mt-12 items-center'>
                    <button className=' p-2 rounded-md  btn-ghost' onClick={cartDecreaseHandler}>-</button>
                    <span className=' p-2 rounded-md  btn-ghost'>{cartNum}</span>
                    <button className=' p-2 rounded-md  btn-ghost' onClick={cartIncreaseHandler}>+</button>
                    <div><button className=' bg-orange-500 py-4 px-8 text-white font-bold'>ADD TO CART</button></div>
                </div>
            </div>
        </div>

        <div className=' flex contain gap-32 mb-40'>
            <div className='w-[635px] '>
                <h2 className='mb-6 font-bold text-3xl'>FEATURES</h2>
                <p cl>Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.</p>

            </div>

            <div>
                <h2 className='mb-6 font-bold text-3xl' >IN THE BOX</h2>
                <ul>
                    <li className='flex gap-5 items-center'>
                        <span className=' text-orange-600 font-medium'>2x</span> <p className=' opacity-70'>Earphone Unit</p>
                    </li>
                    
                    <li className='flex gap-5 items-center'>
                        <span className=' text-orange-600 font-medium'>6x</span> <p className=' opacity-70'>Multi-size Earplugs</p>
                    </li>

                    <li className='flex gap-5 items-center'>
                        <span className=' text-orange-600 font-medium'>1x</span> <p className=' opacity-70'>User Manual</p>
                    </li>

                    <li className='flex gap-5 items-center'>
                        <span className=' text-orange-600 font-medium'>2x</span> <p className=' opacity-70'>USB-C Charging Cable</p>
                    </li>

                    <li className='flex gap-5 items-center'>
                        <span className=' text-orange-600 font-medium'>1x</span> <p className=' opacity-70'>Travel Pouch</p>
                    </li>
                </ul>
            </div>

        </div>

        <div className='flex contain mb-40'>
            <div className=''>
                <img src="" alt="" className='w-[450px] h-[280px] bg-slate-500 rounded-md '/>
                <img src="" alt="" className='w-[450px] h-[280px] bg-slate-500 rounded-md '/>
            </div>
            <div>
                <img src="" alt="" className='w-[635px] h-[560px] bg-slate-500 rounded-md'/>
            </div>
        </div>

<div className='contain'>
    
            <div className=' bg-white mb-20 mt-20 '>
              <ul className='flex items-center justify-center gap-5  p-14 contain'>
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>HEADPHONES</h3>
                  <Link to="/headphones" className=' bg-orange-500 py-4 px-8 font-bold text-white'>SEE PRODUCT</Link>
                </li>
    
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>SPEAKERS</h3>
                  <Link to="/speakers" className=' bg-orange-500 py-4 px-8 font-bold text-white'>SEE PRODUCT</Link>
                </li>
    
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>EARPHONES</h3>
                  <Link to="/earphones" className=' bg-orange-500 py-4 px-8 font-bold text-white'>SEE PRODUCT</Link>
                </li>
              </ul>
            </div>
            <div className=' bg-white mb-20 mt-20 '>
              <ul className='flex items-center justify-center gap-5 p-14 contain'>
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>HEADPHONES</h3>
                  <Link to="/headphones" className=' bg-orange-500 py-4 px-8 font-bold text-white'>SEE PRODUCT</Link>
                </li>
    
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>SPEAKERS</h3>
                  <Link to="/speakers" className=' bg-orange-500 py-4 px-8 font-bold text-white'>SEE PRODUCT</Link>
                </li>
    
                <li className='flex flex-col items-center'>
                  <img src={0} alt="" className='w-[350px] h-[320px] bg-slate-500'/>
                  <h3 className='font-bold'>EARPHONES</h3>
                  <Link to="/earphones" className=' bg-orange-500 py-4 px-8 font-bold text-white'  >SEE PRODUCT </Link>
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
    </div>
  )
}

export default SingleProduct
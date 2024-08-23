// eslint-disable-next-line no-unused-vars
import React from 'react'
import hero from '../assets/images/hero.jpg'
import logo from '../assets/images/logo.png'

const HeroSection = () => {
     const bgStyle = {
          background: `linear-gradient(#000000aa, #000000aa) ,URL(${hero})`,
     }
     return (
          <div className='h-[90vh] object-cover object-center relative' style={bgStyle}>
               {/* <div className='bg-black absolute inset-0 '></div> */}
               <div className='flex justify-between px-20 py-5'>
                    <img src={logo} alt="" className='w-32'/>
                    <button className='bg-red-700'>Sign In</button>
               </div>
          </div>
     )
}

export default HeroSection

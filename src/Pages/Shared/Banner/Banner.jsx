import React from 'react';
import bannerLogo from '../../../assets/banner-logo.png'

const Banner = () => {
  return (
    <div>
         <div className=" text-center grid lg:flex justify-center items-center bg-gradient-to-r from-[#FFDFE7] to-[#F86486] lg:gap-28">
       <div>
       <h1 className="mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">Search Our Events Here</h1>
        <input type="text" placeholder="Search here...." className="input border-[#DEDEDE] md:w-[470px] h-[50px] rounded-r-sm" />
        <button className=" w-28 h-[49px] bg-gradient-to-r from-[#F86486] to-pink-300 text-white rounded-r-lg">
          Search
        </button>
       </div>
       <img className=' md:mx-auto lg:mx-0' src={bannerLogo} alt="" />
       </div>
    </div>
  )
}

export default Banner;
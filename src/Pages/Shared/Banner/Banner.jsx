import React from 'react';
import bannerLogo from '../../../assets/banner-logo.png'

const Banner = () => {
  return (
    <div>
         <div className=" text-center flex justify-center items-center bg-gradient-to-r from-[#FFDFE7] to-[#F86486] gap-28">
       <div>
       <h1 className="mb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">Search Our Events Here</h1>
        <input type="text" placeholder="Search here...." className="input border-[#DEDEDE] md:w-[470px] h-[50px] rounded-r-sm" />
        <button className=" w-28 h-[49px] bg-[#FF444A] text-white rounded-r-lg">
          Search
        </button>
       </div>
       <img src={bannerLogo} alt="" />
       </div>
    </div>
  )
}

export default Banner;
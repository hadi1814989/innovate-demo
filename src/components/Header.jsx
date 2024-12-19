import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaChevronDown } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
const Header = () => {
  let [show , setShow]= useState(true)
  let handleBar = ()=>{
    setShow(!show)
  }
  return (
  <section className="mb-9">
  <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8">
    <div className="flex flex-wrap items-center justify-between py-4">

      <div className="w-[50%] sm:w-[20%] md:w-[15%] flex justify-start">
        <img src={logo} alt="Logo" className="w-auto h-10 sm:h-12" />
      </div>

      <div className="hidden lg:flex w-full sm:w-[60%] justify-center">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center">
          {[
            'Home',
            'About',
            'Service',
            'Portfolio',
            'Price',
            'Blog',
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 font-bold text-[14px] sm:text-[16px] text-gray-700 hover:text-[orange] cursor-pointer transition duration-200"
            >
              {item} <FaChevronDown className="text-sm" />
            </li>
          ))}
        </ul>
      </div>

      <div className="  w-[50%] sm:w-[25%] md:w-[25%] lg:w-{15%} flex justify-end ">
        <button className="border-2 border-[orange] text-[orange] rounded-full hover:bg-[orange] hover:text-white transition duration-200 py-2 px-4 sm:py-[14px] sm:px-[28px] text-sm sm:text-base">
          Contact Us
        </button>
      </div>
    </div>


     <div className="block lg:hidden relative">
      <button onClick={ handleBar}
        className="text-gray-700 focus:outline-none hover:text-[orange] text-lg"
        id="mobile-menu-btn"
      >
        <FaBarsStaggered />
      </button>
   
      <div
        className="hidden md:flex  absolute left-[45%] -top-0 z-10 "
        id="mobile-menu-dropdown"
        style={{ display : show ?  "none"  : "block"}}
      >
        <ul className="flex flex-col items-center gap-y-3 pt-4 text-gray-700">
          {[
            'Home',
            'About',
            'Service',
            'Portfolio',
            'Price',
            'Blog',
          ].map((item) => (
            <li
              key={item}
              className="font-bold text-[14px] hover:text-[orange] cursor-pointer transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div> 
  </div>
</section>
  )
}

export default Header
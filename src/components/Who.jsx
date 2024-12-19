import React from 'react'
import ban from '../assets/banner.png'
import serLogo from '../assets/serviceLogo.png'
import whoBox from '../assets/whoBox.png'
import whoSmallBox from '../assets/whoSmallBox.png'
import dots from '../assets/dots.png'
const Who = () => {
  return (
  <>
  <section className='hidden lg:block'>
    <div className="max-w-container mx-auto">
        <div className="flex">
            <div className="w-1/2 relative ">
            <div className=" absolute top-0 right-0">
              <img src={whoBox} alt="" />
            </div>
            <div className=" absolute bottom-[-45%]">
              <img src={whoSmallBox} alt="" />
            </div>
            <div className=" absolute top-[30%] left-[5px] z-[-1]">
              <img src={dots} alt="" />
            </div>
            </div>
            <div className="w-1/2">
             <div className=" ms-[5%] ">  <img src={ban} alt="" /></div>
             <h2 className=' ms-[5%] font-extrabold text-[48px] pb-[15px] '>Who We Are</h2>
             <p className=' ms-[5%] w-[442px] font-pap text-[18px] text-[#6C7D93]'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
             <p className=' ms-[5%] font-pap text-[12px] text-[#6C7D93]'>Join the 10.000+ Companys Trusting </p>
             <div className="">
              <img src={serLogo} alt="" />
             </div>
            </div>
        </div>
    </div>
  </section>
  <section className=" block lg:hidden py-16 sm:py-20 lg:py-24">
  <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap lg:flex-nowrap items-center">
      <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
        <div className="absolute top-[-62px] right-0 transform translate-x-4 -translate-y-4">
          <img src={whoBox} alt="Decorative Box" className="w-32 sm:w-40 lg:w-48" />
        </div>
        <div className="absolute bottom-[-12%] left-[11rem] sm:left-[28rem]">
          <img src={whoSmallBox} alt="Small Box" className="w-20 sm:w-28 lg:w-32" />
        </div>
        <div className="absolute top-[-34%] left-2 sm:left-6 z-[-1]">
          <img src={dots} alt="Decorative Dots" className="w-16 sm:w-24 lg:w-32" />
        </div>
        <img src={ban} alt="Main Visual" className=" rounded-lg shadow-lg" />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-12">
        <div className="text-center lg:text-left">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 max-w-lg mx-auto lg:mx-0">
            We are a Dhaka-based Digital Communication Agency committed to creating actionable 
            strategies, online marketing, and technology solutions for our partners. As a 
            multidisciplinary company, we operate as a unified team.
          </p>
          <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-md mx-auto lg:mx-0">
            Join the 10,000+ companies trusting us.
          </p>
          <div className="flex justify-center lg:justify-start">
            <img src={serLogo} alt="Service Logos" className="w-36 sm:w-48 lg:w-56" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
  </>
  )
}

export default Who
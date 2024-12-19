import React from 'react'
import ban from '../assets/banner.png'
import logo1 from '../assets/logo1.png'
const Services = () => {
  return (
    <>
  <section className='hidden lg:block mt-[360px] mb-[90px]'>
    <div className=" max-w-container mx-auto">
        <div className="  text-center">
           <div className=" flex justify-center">  <img src={ban} alt="" /></div>
           <h2 className='font-extrabold text-[60px]'>Our Services</h2>
           <div className="flex justify-center">
           <p className='font-pap pt-[15px] text-[18px] text-[#6C7D93] w-[332px] flex justify-center'>We have been providing great flooring solutions service.</p>
           </div>
        </div>
        <div className="w-full flex justify-between">
                <div className=" text-center w-[32%] border-1 px-[47px] py-[52px] rounded-lg border-[#EBF7E9] bg-[#EBF7E9]">
                    <div className="flex justify-center"> <img src={logo1} alt="" /></div>
                    <h2 className='pt-[28px] pb-[20px] text-[26px] font-semibold'>MARKETING STRATEGY</h2>
                    <p className='font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
                    <div className="relative ">
                    <p className='font-bold text-[18px] z-10'>Read more </p>
                    <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[83px]  bg-[#FF7628] opacity-35"></div>
                    </div>
                </div>

                <div className=" text-center w-[32%] border-1 px-[47px] py-[52px] rounded-lg border-[#D8EAFF] bg-[#D8EAFF]">
                    <div className="flex justify-center"> <img src={logo1} alt="" /></div>
                    <h2 className='pt-[28px] pb-[20px] text-[26px] font-semibold'>Social Marketing</h2>
                    <p className='font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
                    <div className="relative ">
                    <p className='font-bold text-[18px] z-10'>Read more </p>
                    <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[83px]  bg-[#FF7628] opacity-35"></div>
                    </div>
                </div>

                <div className=" text-center w-[32%] border-1 px-[47px] py-[52px] rounded-lg border-[#FBF1EC] bg-[#FBF1EC]">
                    <div className="flex justify-center"> <img src={logo1} alt="" /></div>
                    <h2 className='pt-[28px] pb-[20px] text-[26px] font-semibold'>Content Marketing</h2>
                    <p className='font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Social Media has changed the way we interact & do business while creating</p>
                    <div className="relative ">
                    <p className='font-bold text-[18px] z-10'>Read more </p>
                    <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[83px]  bg-[#FF7628] opacity-35"></div>
                    </div>
                </div>
            
        </div> 
    </div>
  </section>
  <section className=" block lg:hidden mt-24 sm:mt-40 mb-16">
  <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="flex justify-center">
        <img src={ban} alt="Banner" className="h-12 sm:h-16" />
      </div>
      <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">
        Our Services
      </h2>
      <p className="font-pap mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto">
        We have been providing great flooring solutions service.
      </p>
    </div>
    
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center border border-[#EBF7E9] bg-[#EBF7E9] rounded-lg px-6 py-8 shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center">
          <img src={logo1} alt="Marketing Strategy" className="h-12" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
          MARKETING STRATEGY
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Social Media has changed the way we interact & do business while creating.
        </p>
        <div className="relative mt-6 inline-block">
          <p className="font-bold text-orange-500 text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[70px] bg-orange-500 opacity-20"></div>
        </div>
      </div>

      <div className="text-center border border-[#D8EAFF] bg-[#D8EAFF] rounded-lg px-6 py-8 shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center">
          <img src={logo1} alt="Social Marketing" className="h-12" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
          SOCIAL MARKETING
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Social Media has changed the way we interact & do business while creating.
        </p>
        <div className="relative mt-6 inline-block">
          <p className="font-bold text-orange-500 text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[70px] bg-orange-500 opacity-20"></div>
        </div>
      </div>

      <div className="text-center border border-[#FBF1EC] bg-[#FBF1EC] rounded-lg px-6 py-8 shadow-md hover:shadow-lg transition duration-300">
        <div className="flex justify-center">
          <img src={logo1} alt="Content Marketing" className="h-12" />
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-4">
          CONTENT MARKETING
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Social Media has changed the way we interact & do business while creating.
        </p>
        <div className="relative mt-6 inline-block">
          <p className="font-bold text-orange-500 text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[70px] bg-orange-500 opacity-20"></div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Services
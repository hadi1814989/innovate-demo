import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
    <section className=' hidden lg:block mt-[140px] mb-[57px]'>
        <div className="max-w-container mx-auto">
            <div className="flex">
                <div className="w-[40%]">
                    <img className='pb-[50px]' src={logo} alt="" />
                    <p className='w-[449px font-pap text-[18px] text-[#6C7D93] pb-[240px]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    <p className='font-pap text-[#6C7D93]'>@2024 Innovate.All rights reserved.</p>
                </div>
                <div className="w-[20%] flex justify-center">
                    <ul>
                        <li className='font-bold pb-[48px] text-[24px]'>Features</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Home</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>About</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Benifit</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Pricing</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Blog</li>
                    </ul>
                </div>
                <div className="w-[20%] ">
                   <div className="flex justify-center">
                   <ul className='pb-[188px]'>
                    <li className='font-bold pb-[48px] text-[24px]'>Products</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Task Management</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Company growth</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Time tracking</li>
                    </ul>
                   </div>
                    <p className='text-right text-[#6c7d93]'>Privacy policy</p>
                </div>
                <div className="w-[20%] ">
                    <div className="flex justify-center">
                    <ul className='pb-[188px]'>
                    <li className='font-bold pb-[48px] text-[24px]'>Support</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Customer service</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Accessibility</li>
                        <li  className='pb-[30px] text-[#6c7d93]'>Contact us</li>
                    </ul>
                    </div>
                    <p className='text-right text-[#6c7d93]'>Terms & condition</p>
                </div>
            </div>
        </div>
    </section>
    <section className=" block lg:hidden mt-36 mb-16">
  <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap lg:flex-nowrap justify-between">
      {/* Column 1: About Section */}
      <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
        <img className="pb-6 w-32 sm:w-40" src={logo} alt="Logo" />
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg pb-12">
          Install any demo or template with a single click. You can mix and match all the demos &
          templates. Every demo can be turned into one or multi-page.
        </p>
        <p className="text-gray-500 text-sm">© 2024 Innovate. All rights reserved.</p>
      </div>

      {/* Column 2: Features */}
      <div className="w-1/2 sm:w-1/3 lg:w-1/5 mb-8 lg:mb-0">
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-6">Features</h3>
        <ul className="space-y-4">
          {['Home', 'About', 'Benefit', 'Pricing', 'Blog'].map((item, index) => (
            <li key={index} className="text-gray-500 text-base sm:text-lg hover:text-gray-800 cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Products */}
      <div className="w-1/2 sm:w-1/3 lg:w-1/5 mb-8 lg:mb-0">
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-6">Products</h3>
        <ul className="space-y-4">
          {['Task Management', 'Company Growth', 'Time Tracking'].map((item, index) => (
            <li key={index} className="text-gray-500 text-base sm:text-lg hover:text-gray-800 cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm mt-8 hover:text-gray-800 cursor-pointer transition">
          Privacy Policy
        </p>
      </div>

      {/* Column 4: Support */}
      <div className="w-1/2 sm:w-1/3 lg:w-1/5">
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-6">Support</h3>
        <ul className="space-y-4">
          {['Customer Service', 'Accessibility', 'Contact Us'].map((item, index) => (
            <li key={index} className="text-gray-500 text-base sm:text-lg hover:text-gray-800 cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm mt-8 hover:text-gray-800 cursor-pointer transition">
          Terms & Conditions
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer
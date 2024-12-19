import React from 'react'
import ban from '../assets/banner.png'
import process from '../assets/processbox.png'

const Process = () => {
  return (
  <>
    <section className='hidden lg:block mt-[200px] overflow-hidden'>
        <div className="max-w-container mx-auto">
            <div className="  text-center pb-[52px]">
                       <div className=" flex justify-center"> 
                         <img src={ban} alt="" />
                         </div>
                       <h2 className='font-extrabold text-[60px]'>Our creative process.
                       </h2>
                       <div className="flex justify-center">
                       <p className='font-pap pt-[15px] text-[18px] text-[#6C7D93] w-[332px] flex justify-center'>We provide digital experience services to startups and small businesses.
                       </p>
                       </div>
                    </div>
                    <div className="">
                    <div className="flex justify-between">
                        <div className="w-[40%]">
                           <div className=" w-[465px] mt-[59px] border-1 pt-[24px] ps-[24px] pe-[79px] rounded-lg border-[#EBF7E9] bg-[#EBF7E9]">
                                               <div className="relative ">
                                               <p className=' ps-3 font-bold text-[18px] z-10 text-left'>Step-1 </p>
                                               <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[-6px]  bg-[#FF7628] opacity-35"></div>
                                               </div>
                                               <h2 className='pt-[18px] pb-[20px] text-[30px] font-semibold'>Global SEO Research</h2>
                                               <p className=' text-[#6C7D93]  font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Practical tools and features make it easier to build and manage your site.
                                               </p>
                                           </div>
                        </div>
                        <div className="w-[50%]">
                            <img className='h-[324px] w-[570px]' src={process} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between my-7">
                        <div className="w-[50%]">
                            <img className='h-[324px] w-[570px]' src={process} alt="" />
                        </div>
                        <div className="w-[40%]">
                           <div className=" w-[465px] mt-[59px] border-1 pt-[24px] ps-[24px] pe-[79px] rounded-lg border-[#D8EAFF] bg-[#D8EAFF]">
                                               <div className="relative ">
                                               <p className=' ps-3 font-bold text-[18px] z-10 text-left'>Step-2 </p>
                                               <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[-6px]  bg-[#FF7628] opacity-35"></div>
                                               </div>
                                               <h2 className='pt-[18px] pb-[20px] text-[30px] font-semibold'>Global SEO Research</h2>
                                               <p className=' text-[#6C7D93]  font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Practical tools and features make it easier to build and manage your site.
                                               </p>
                                           </div>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="w-[40%] ">
                           <div className=" w-[465px] mt-[59px] border-1 pt-[24px] ps-[24px] pe-[79px] rounded-lg border-[#FBF1EC] bg-[#FBF1EC]">
                                               <div className="relative ">
                                               <p className=' ps-3 font-bold text-[18px] z-10 text-left'>Step-3 </p>
                                               <div className=" absolute w-9 h-9 rounded-full top-[-4px] left-[-6px]  bg-[#FF7628] opacity-35"></div>
                                               </div>
                                               <h2 className='pt-[18px] pb-[20px] text-[30px] font-semibold'>Global SEO Research</h2>
                                               <p className=' text-[#6C7D93]  font-pap pb-[20px] text-[20px] ms-[2%] w-[257px]'>Practical tools and features make it easier to build and manage your site.
                                               </p>
                                           </div>
                        </div>
                        <div className="w-[50%] ">
                            <img className='h-[324px] w-[570px]' src={process} alt="" />
                        </div>
                    </div>
                    </div>
        </div>
    </section>
      <section className="block lg:hidden mt-20 sm:mt-32 lg:mt-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading Section */}
        <div className="text-center pb-12">
          <div className="flex justify-center">
            <img src={ban} alt="Banner" className="h-12 sm:h-16" />
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">
            Our Creative Process.
          </h2>
          <p className="font-pap mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto">
            We provide digital experience services to startups and small businesses.
          </p>
        </div>

      
        <div className=" sm:ms-12 space-y-12">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
            <div className="lg:w-[40%]">
              <div className="bg-[#EBF7E9] border border-[#EBF7E9] p-6 sm:p-8 rounded-lg shadow-md">
                <div className="relative">
                  <p className="font-bold text-lg z-10">Step-1</p>
                  <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[-6px] bg-[#FF7628] opacity-35"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Global SEO Research</h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  Practical tools and features make it easier to build and manage your site.
                </p>
              </div>
            </div>
         
            <div className="lg:w-[50%]">
              <img
                src={process} alt="Process Step 1"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

         
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 lg:flex-row-reverse">
         
            <div className="lg:w-[50%]">
              <img
                src={process}
                alt="Process Step 2"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
              />
            </div>
           
            <div className="lg:w-[40%]">
              <div className="bg-[#D8EAFF] border border-[#D8EAFF] p-6 sm:p-8 rounded-lg shadow-md">
                <div className="relative">
                  <p className="font-bold text-lg z-10">Step-2</p>
                  <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[-6px] bg-[#FF7628] opacity-35"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Creative Campaign Strategy</h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  Drive innovative campaigns tailored to your target audience and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
            <div className="lg:w-[40%]">
              <div className="bg-[#FBF1EC] border border-[#FBF1EC] p-6 sm:p-8 rounded-lg shadow-md">
                <div className="relative">
                  <p className="font-bold text-lg z-10">Step-3</p>
                  <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[-6px] bg-[#FF7628] opacity-35"></div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-4">Performance Optimization</h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                  Monitor and enhance campaign performance for maximum ROI.
                </p>
              </div>
            </div>
            <div className="lg:w-[50%]">
              <img
                src={process}
                alt="Process Step 3"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
 

  )
}

export default Process
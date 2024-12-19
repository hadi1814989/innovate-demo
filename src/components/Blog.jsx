import React from 'react'
import ban from '../assets/banner.png'
import blog from '../assets/blog.png'
const Blog = () => {
  return (
    <>
    <section className=' hidden lg:block mb-[118px]'>
        <div className="max-w-container mx-auto">
             <div className="text-center">
                  <div className="flex justify-center">
                    <img src={ban} alt="Banner" className="h-12 sm:h-16" />
                  </div>
                  <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">
                  Our Latest Blog
                  </h2>
                  <p className="font-pap mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto pb-[52px]">
                  We provide digital experience services to startups and small businesses.
                  </p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[30%] h-[464px] rounded-lg">
                        <div className="">
                            <img src={blog} alt="" />
                        </div>
                        <div className=" bg-white h-[227px] shadow-lg rounded-lg">
                            <h2 className='text-[24px] ps-[30px] pt-[30px] pb-[16px] pe-[116px]'>How to Be Ahead of Stock Changes</h2>
                            <p className='ps-[30px]'>By John &nbsp;  - 5 Comments</p>
                            <div className="relative mt-6 inline-block">
          <p className=" ps-[30px] font-bold  text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[13px] bg-orange-500 opacity-20"></div>
        </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-[464px] rounded-lg">
                        <div className="">
                            <img src={blog} alt="" />
                        </div>
                        <div className="bg-white h-[227px] shadow-lg rounded-lg">
                            <h2 className='text-[24px] ps-[30px] pt-[30px] pb-[16px] pe-[116px]'>How to Be Ahead of Stock Changes</h2>
                            <p className='ps-[30px]'>By John &nbsp;  - 5 Comments</p>
                            <div className="relative mt-6 inline-block">
          <p className=" ps-[30px] font-bold  text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[13px] bg-orange-500 opacity-20"></div>
        </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-[464px] rounded-lg">
                        <div className="">
                            <img src={blog} alt="" />
                        </div>
                        <div className="bg-white h-[227px] shadow-lg rounded-lg">
                            <h2 className='text-[24px] ps-[30px] pt-[30px] pb-[16px] pe-[116px]'>How to Be Ahead of Stock Changes</h2>
                            <p className='ps-[30px]'>By John &nbsp;  - 5 Comments</p>
                            <div className="relative mt-6 inline-block">
          <p className=" ps-[30px] font-bold  text-sm sm:text-base cursor-pointer">
            Read more
          </p>
          <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[13px] bg-orange-500 opacity-20"></div>
        </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    <section className=" block lg:hidden py-16 sm:py-20 lg:py-24">
  <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <div className="flex justify-center">
        <img src={ban} alt="Banner" className="h-12 sm:h-16" />
      </div>
      <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-4">
        Our Latest Blog
      </h2>
      <p className="font-pap mt-4 text-gray-600 text-base sm:text-lg lg:text-xl max-w-md mx-auto">
        We provide digital experience services to startups and small businesses.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={blog}
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            How to Be Ahead of Stock Changes
          </h3>
          <p className="text-sm text-gray-500 mb-6">By John - 5 Comments</p>
          <div className="relative inline-block ">
            <p className=" font-bold text-orange-500 text-sm cursor-pointer">
              Read more
            </p>
            <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[0px] bg-orange-500 opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={blog}
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            How to Be Ahead of Stock Changes
          </h3>
          <p className="text-sm text-gray-500 mb-6">By John - 5 Comments</p>
          <div className="relative inline-block">
            <p className="font-bold text-orange-500 text-sm cursor-pointer">
              Read more
            </p>
            <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[0px] bg-orange-500 opacity-20"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <img
          src={blog}
          alt="Blog Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            How to Be Ahead of Stock Changes
          </h3>
          <p className="text-sm text-gray-500 mb-6">By John - 5 Comments</p>
          <div className="relative inline-block">
            <p className="font-bold text-orange-500 text-sm cursor-pointer">
              Read more
            </p>
            <div className="absolute w-9 h-9 rounded-full top-[-4px] left-[0px] bg-orange-500 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blog
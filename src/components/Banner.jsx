
import React from 'react';
import ban from '../assets/banner.png';
import jump from '../assets/jump.png';
import groupline from '../assets/groupline.png';
import box from '../assets/box.png';
import boxdown from '../assets/boxdown.png';
import liner from '../assets/liner.png';
import what from '../assets/what.png';
import fb from '../assets/fb.png';
import ins from '../assets/ins.png';
import twi from '../assets/twi.png';

const Banner = () => {
  return (
    <>
      <section className=" hidden lg:block mt-[83px] overflow-hidden">
        <div className="max-w-container mx-auto relative">
          <div className="flex">
            <div className="w-[60%] relative">
              <img src={ban} alt="" />
              <h2 className="text-[72px] font-extrabold">
                We Are Digital <br /> <span className="text-[orange]">Marketing</span> Agency
              </h2>
              <p className="text-[20px] font-pap w-[571px] pt-[20px]">
                Use customer data to build great and solid product experiences that convert. Digital
                marketing’s development has changed the way brands and businesses use technology for
                marketing.
              </p>
              <button className="mt-[32px] py-[14px] px-[28px] text-[orange] border-2 border-[orange] rounded-[50px] hover:text-white hover:bg-[orange] duration-200">
                get free quoto
              </button>

              {/* Positioning */}
              <div className="absolute left-0 top-0 -translate-x-[300px] translate-y-[100px]">
                <img src={jump} alt="" />
              </div>
              <div className="absolute left-0 top-0 -translate-x-[417px] -translate-y-[343px] z-[-1]">
                <img src={groupline} alt="" />
              </div>
              <div className="absolute left-0 bottom-0 -translate-x-[430px] translate-y-[155px]">
                <img src={twi} alt="" />
              </div>
            </div>
            <div className="w-[40%] relative">
              <div className="absolute right-0 top-0 translate-x-[332px] translate-y-[78px]">
                <img src={box} alt="" />
              </div>
              <div className="absolute right-0 top-[190px]">
                <img src={boxdown} alt="" />
              </div>
              <div className="absolute right-0 top-0 translate-x-[324px] translate-y-[42px] z-[-1]">
                <img src={liner} alt="" />
              </div>
              <div className="absolute right-0 bottom-0 translate-x-[357px] translate-y-[179px]">
                <img src={what} alt="" />
              </div>
              <div className="absolute left-0 top-[42px]">
                <img src={fb} alt="" />
              </div>
              <div className="absolute left-0 translate-x-[-199px] top-[410px]">
                <img src={ins} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" block lg:hidden mt-20 overflow-hidden">
  <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="flex flex-wrap lg:flex-nowrap">
     
      <div className="w-full lg:w-3/5 relative">
        <img
          src={ban}
          alt="Main Banner"
          className="w-full md:w-1/2 md:ms-[25%] sm:w-1/2 sm:ms-[25%] h-auto rounded-lg mb-6 lg:mb-0"
        />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          We Are Digital <br />
          <span className="text-orange-500">Marketing</span> Agency
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-light text-gray-600 mt-4 max-w-lg">
          Use customer data to build great and solid product experiences that
          convert. Digital marketing’s development has changed the way brands
          and businesses use technology for marketing.
        </p>
        <button className="mt-6 py-3 px-6 text-orange-500 border-2 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition duration-200">
          Get Free Quote
        </button>

        <div className="absolute left-0 top-0 -translate-x-24 sm:-translate-x-36 lg:-translate-x-40 translate-y-12">
          <img src={jump} alt="Jump Icon" className="w-16 sm:w-24 lg:w-32" />
        </div>
        <div className="absolute left-0 top-0 -translate-x-40 sm:-translate-x-60 lg:-translate-x-72 -translate-y-36 z-[-1]">
          <img
            src={groupline}
            alt="Group Line Decoration"
            className="w-20 sm:w-32 lg:w-48"
          />
        </div>
        <div className="absolute left-0 bottom-0 -translate-x-40 sm:-translate-x-60 lg:-translate-x-72 translate-y-16">
          <img src={twi} alt="Twitter Icon" className="w-10 sm:w-16 lg:w-20" />
        </div>
      </div>

      <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">

        <div className="absolute right-0 top-0 translate-x-24 sm:translate-x-32 lg:translate-x-40 translate-y-6">
          <img src={box} alt="Box Icon" className="w-16 sm:w-24 lg:w-32" />
        </div>
        <div className="absolute right-0 top-20 sm:top-28 lg:top-36">
          <img src={boxdown} alt="Box Down Icon" className="w-14 sm:w-20 lg:w-28" />
        </div>
        <div className="absolute right-0 top-0 translate-x-20 sm:translate-x-28 lg:translate-x-36 translate-y-10 z-[-1]">
          <img
            src={liner}
            alt="Line Decoration"
            className="w-16 sm:w-24 lg:w-32"
          />
        </div>
        <div className="absolute right-0 bottom-0 translate-x-28 sm:translate-x-36 lg:translate-x-40 translate-y-16">
          <img src={what} alt="What Icon" className="w-12 sm:w-16 lg:w-20" />
        </div>
        <div className="absolute left-0 top-10 sm:top-16 lg:top-24">
          <img src={fb} alt="Facebook Icon" className="w-8 sm:w-12 lg:w-16" />
        </div>
        <div className="absolute left-0 translate-x-[-80px] sm:translate-x-[-100px] lg:translate-x-[-120px] top-64 sm:top-80 lg:top-96">
          <img src={ins} alt="Instagram Icon" className="w-8 sm:w-12 lg:w-16" />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Banner;

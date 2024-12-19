import React from 'react'
import ban from '../assets/banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
function SampleNextArrow({ onClick }) {
 
  
   
    return (
      <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute left-[4rem] bottom-[6%] translateY-[-50%] hover:bg-[orange]'>
        <HiArrowLongRight />
         </div>
    );
  }
  
  function SamplePrevArrow({  onClick }) {
   
    return (
      <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute left-[1rem] top-[81%] z-10 translateY-[-50%] hover:bg-[orange]'>
        <HiArrowLongLeft />
        </div>
    );
  }

const Clint = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3, 
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={() => alert('Next Arrow Clicked')} />,  
        prevArrow: <SamplePrevArrow onClick={() => alert('Prev Arrow Clicked')} />,
        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
   <section className='mt-[150px] mb-[100px]'>
    <div className=" max-w-container mx-auto">
    <Slider {...settings}>
           <div className="w-[30%]">
                <div className=" ms-[5%] ">  <img src={ban} alt="" /></div>
                <h2 className=' ms-[5%] font-extrabold text-[48px] pb-[15px] '>Client Review</h2>
                <p className=' ms-[5%] w-[331px] font-pap text-[18px] text-[#6C7D93]'>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.   </p>
            </div>
            <div className="w-[30%] bg-[#FFFFFF] h-[313px] shadow-md hover:bg-[#D8EAFF] rounded-lg">
                <p className='font-pap pt-[25px] ps-[40px] pe-[60px] pb-[23px] text-[18px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
               <div className=" ms-[45%]">
               <h2 className='font-bold'>Jane Cooper</h2>
               <p className='pt-[8px]'>Fashion Designer</p>
               </div>
            </div>
            <div className="w-[30%] bg-[#FFFFFF] h-[313px] shadow-md hover:bg-[#D8EAFF] rounded-lg">
                <p className='font-pap pt-[25px] ps-[40px] pe-[60px] pb-[23px] text-[18px]'>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
               <div className=" ms-[45%]">
               <h2 className='font-bold'>Eleanor Pena</h2>
               <p className='pt-[8px] pb-[40px]'>Architecture</p>
               </div>
            </div>
     </Slider>
    </div>
   </section>
  )
}

export default Clint
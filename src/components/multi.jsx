import React, { useState } from 'react';
import ban from '../assets/banner.png';
import box from '../assets/box.png';
import boxdown from '../assets/boxdown.png';
import whoBox from '../assets/whoBox.png';
import whoSmallBox from '../assets/whoSmallBox.png';

const Multi = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const images = [
    { id: 1, src: box, category: 'Digital Mkt' },
    { id: 2, src: boxdown, category: 'Branding' },
    { id: 3, src: whoBox, category: 'Content Managements' },
    { id: 4, src: whoSmallBox, category: 'Digital Mkt' },
    { id: 5, src: box, category: 'Content Managements' },
    { id: 6, src: boxdown, category: 'Branding' },
  ];

  
  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter((image) => image.category === activeCategory);

  return (
    <section className='my-[80px]'>
      <div className='max-w-container mx-auto'>
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

        <div className='text-center'>
          <ul className='flex justify-start flex-wrap items-center gap-x-4 gap-y-4 pb-[52px]'>
            {['All', 'Digital Mkt', 'Branding', 'Content Managements'].map((category) => (
              <li
                key={category}
                className={`cursor-pointer  decoration-[#6c7D93] hover:decoration-[#FF7628] mt-10 font-sans font-semibold text-[14px] lg:text-[24px]  text-[#6c7D93] hover:text-[#FF7628] ${
                  activeCategory === category ? 'text-[#FF7628] decoration-[#FF7628]' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-center flex-wrap lg:gap-x-8 gap-x-3 gap-y-6 mt-[30px]'>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className='lg:w-[30%] w-[45%] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <img src={image.src} alt={image.category} className='w-full h-auto object-cover' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Multi;
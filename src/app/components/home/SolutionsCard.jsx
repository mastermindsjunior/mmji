import React from 'react';
import Image from 'next/image';

const SolutionsCard = ({ img = "/heading.jpg", text, title, side }) => {
  return (
    <div className="w-full p-4 flex">
      <div
        className={`w-full max-w-[200px] md:max-w-[300px] 2xl:max-w-[500px] h-full text-center 
          ${side === 'right' ? 'ml-auto' : 'mr-auto'}`}
      >
        {/* Image container */}
        <div className="w-full bg-white/10 aspect-square rounded-lg p-6 md:p-10 hover:scale-[1.02] transition-transform duration-300">
          <Image
            src={img}
            width={500}
            height={500}
            alt="solution"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Title */}
        <h4 className="bg-[#111] border border-white/10 rounded-xl py-3 px-2 w-full mt-4 font-medium text-white">
          {title}
        </h4>

        {/* Description */}
        <p className="text-white/60 text-sm mt-2 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default SolutionsCard;

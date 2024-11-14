import React from "react";
import Image from "next/image";

const HomeSection: React.FC = () => {
  return (
    <div className="h-[30rem] p-5 flex items-center bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            DONDE LAS SONRISAS
          </h2>
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            SE UNEN A LA ATENCIÓN DE EXPERTOS.
          </h2>
        </div>
        
        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/inicioimagen.jpg"
            alt="image"
            width={500}
            height={500}
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;


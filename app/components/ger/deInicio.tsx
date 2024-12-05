import React from "react";
import Image from "next/image";

const DeHomeSection: React.FC = () => {
  return (
    <div className="h-[30rem] p-5 flex items-center bg-bluebg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            WENN LÄCHELN AUF EXPERTISE TRIFFT
          </h2>
        </div>
        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/inicioimagen.jpg"
            alt="image"
            width={600}
            height={600}
            className="sm:w-fit h-auto w-auto md:max-w-md lg:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DeHomeSection;

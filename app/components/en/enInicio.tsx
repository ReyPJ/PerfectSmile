import React from "react";
import Image from "next/image";

const EnHomeSection: React.FC = () => {
  return (
    <div className="h-[30rem] p-5 flex items-center bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-5xl md:text-5xl font-bold text-white leading-tight">
            WHERE SMILE
          </h2>
          <h2 className="text-4xl md:text-4xl font-semibold text-white">
            MEETS EXPERTISE.
          </h2>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/inicioimagen.jpg"
            alt="image"
            width={700}
            height={700}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default EnHomeSection;

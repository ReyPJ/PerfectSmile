import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeSection: React.FC = () => {
  return (
    <div className="h-[30rem] p-5 flex items-center bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-5xl md:text-5xl font-bold text-white leading-tight">
            LOS EXPERTOS
          </h2>
          <h2 className="text-4xl md:text-4xl font-semibold text-white">
            DETRÁS DE CADA SONRISA PERFETCA.
          </h2>
          <Link href="/" className="text-lg uppercase text-white underline mt-8 hover:text-[#cbaf77]">
            Contáctanos
          </Link>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image src="/dental1.jpg" alt="image" width={400} height={400} className="rounded-lg shadow-lg border-4 border-[#013133]" />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;


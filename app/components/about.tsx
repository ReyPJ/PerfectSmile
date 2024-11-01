import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-white text-[#013133]">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#013133]">Nuestro Equipo</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 p-5 rounded-lg shadow-lg">
            <div className="md:mr-6 mb-4 md:mb-0">
              <Image
                src="/dentistmodel1.jpg"
                alt="Dentista"
                width={200}
                height={200}
                className="rounded-full border-4 border-[#cbaf77]"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl font-semibold">LOREM LOREM</h3>
              <h4 className="text-xl">IPSUN IPSUN</h4>
              <Link href="/" className="text-[#cbaf77] underline hover:text-[#013133]">
                Conoce más
              </Link>
            </div>
          </div>

          {/* Segundo miembro del equipo (invertido) */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-[#013133] p-5 rounded-lg shadow-lg text-[#cbaf77]">
            <div className="md:ml-6 mb-4 md:mb-0">
              <Image
                src="/dentistmodel1.jpg"
                alt="Dentista"
                width={200}
                height={200}
                className="rounded-full border-4 border-[#cbaf77]"
              />
            </div>
            <div className="text-center md:text-right space-y-2">
              <h3 className="text-2xl font-semibold">LOREM LOREM</h3>
              <h4 className="text-xl">IPSUN IPSUN</h4>
              <Link href="/" className="text-[#cbaf77] underline hover:text-white">
                Conoce más
              </Link>
            </div>
          </div>
        </div>

        {/* Descripción de equipo */}
        <p className="max-w-2xl text-center text-gray-600 mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;


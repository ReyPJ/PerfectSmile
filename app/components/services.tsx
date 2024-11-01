import React from "react";
import Link from "next/link";
import { GrServices } from "react-icons/gr";

const ServicesSection: React.FC = () => {
  return (
    <div className="h-full p-10 bg-white text-[#013133]">
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Título de la sección */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">Soluciones adaptadas a tus necesidades</p>
          <Link href={"/"} className="text-[#cbaf77] underline hover:text-[#013133] mt-4">
            Contáctanos
          </Link>
        </div>

        {/* Cards de Servicios */}
        <div className="flex flex-wrap gap-6 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 w-60 bg-gray-100 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <GrServices className="text-4xl text-[#013133] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Servicio {index + 1}</h3>
              <p className="text-sm text-gray-500">Descripción breve del servicio.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

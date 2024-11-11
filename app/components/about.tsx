import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-white text-[#013133]">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Nuestro Equipo
        </h2>

        {/* Descripción de equipo */}
        <p className="max-w-2xl text-center text-lg text-gray-600 mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex justify-center gap-8">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 p-12 rounded-lg shadow-lg">
            <div className="md:mr-6 mb-4 md:mb-0">
              <Image
                src="/profile.jpg"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-center text-center text-black md:text-left space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
              <h4 className="text-md max-w-xs text-start">
                Ex Especialista en Protocolo Clínico y Diseñador de Tratamientos
                Dentales en 3D.
              </h4>
            </div>
          </div>

          {/* Segundo miembro del equipo (invertido) */}
          <div className="flex flex-col md:flex-row-reverse items-center bg-orange-500 p-12 rounded-lg shadow-lg text-white">
            <div className="md:ml-6 mb-4 md:mb-0">
              <Image
                src="/profile.jpg"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-center text-center md:text-left space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
              <h4 className="text-md max-w-xs text-start">
                - Cologne Area, NRW, Germany - Dental Technician - Former
                Technical and Clinical Specialist for aligners, therapeutic
                appliances, surgical guides, implant planning (worldwide)
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

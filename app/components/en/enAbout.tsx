import React from "react";
import Image from "next/image";

const EnAboutSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-white text-black mt-20">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Our Team
        </h2>

        <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
          20 Years of Expertise in Aligners
        </h3>

        {/* Descripción de equipo */}
        <p className="max-w-2xl text-justify text-lg text-black mt-6">
          With over 20 years of experience in the aligner industry, we have
          built a solid reputation for providing expert consultation and
          treatment planning for orthodontists worldwide. Our deep knowledge and
          extensive experience enable us to offer cutting-edge solutions
          tailored to each patient’s unique needs. Throughout the years, we have
          worked closely with dental professionals to help them optimize their
          aligner treatments, ensuring the highest standards of care and
          efficiency. Whether you’re dealing with complex cases or standard
          treatments, our experience allows us to guide you with confidence and
          precision, making us a trusted partner in your orthodontic practice.
        </p>

        <div className="flex justify-center py-20 gap-8">
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
              <h3 className="text-xl font-bold">
                Ubicación: Wichita, Kansas, United States.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                - Ex Especialista en Protocolo Clínico en Invisalign: brindando
                asistencia a médicos a nivel mundial.
                <br />- Ex Diseñador de Tratamientos Dentales en 3D (técnico de
                tratamiento).
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
              <h3 className="text-xl font-bold">
                Ubicación: Wichita, Kansas, United States.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                - Técnico dental
                <br /> - Anteriormente Especialista Técnica y Clínica en
                alineadores, aparatos terapéuticos, guías quirúrgicas,
                planificación de implantes (a nivel mundial).
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnAboutSection;

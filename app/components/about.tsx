import React from "react";

const AboutSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-white text-black mt-20">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Nuestro Equipo
        </h2>

        <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
          Casi 10 años de experiencia en alineadores
        </h3>

        {/* Descripción de equipo */}
        <p className="max-w-2xl text-justify text-lg text-black mt-6">
          Con casi 10 años de experiencia en la industria de los alineadores,
          hemos construido una sólida reputación por ofrecer asesoría experta y
          planificación de tratamientos para ortodoncistas de todo el mundo.
          Nuestro profundo conocimiento y amplia experiencia nos permiten
          ofrecer soluciones de vanguardia adaptadas a las necesidades únicas de
          cada paciente. Ya sea que estés tratando casos complejos o
          tratamientos estándar, nuestra experiencia nos permite guiarte con
          confianza y precisión, lo que nos convierte en un socio de confianza
          en tu práctica ortodóntica.
        </p>

        <div className="flex flex-col justify-center py-20 gap-8">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col items-center bg-bluebg p-12 rounded-lg shadow-lg">
            <div className="mb-4">
              {/* 
              <Image
                src="/"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
              */}
            </div>
            <div className="flex flex-col justify-center text-center text-black space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
              <h3 className="text-xl font-bold">
                Ubicación: Wichita, Kansas, Estados Unidos.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                - Ex Especialista en Protocolo Clínico en Invisalign: brindando
                asistencia a médicos a nivel mundial.
                <br />- Ex Diseñador de Tratamientos Dentales en 3D (técnico de
                tratamiento).
              </h4>
            </div>
          </div>

          {/* Segundo miembro del equipo */}
          <div className="flex flex-col items-center bg-orangebg p-12 rounded-lg shadow-lg text-white">
            <div className="mb-4">
              {/* 
              <Image
                src="/"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
              */}
            </div>
            <div className="flex flex-col justify-center text-center text-white space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
              <h3 className="text-xl font-bold">
                Ubicación: Zona de Colonia,
                <br /> Renania del Norte-Westfalia, Alemania.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                - Técnico dental
                <br />
                - Ex-especislista técnico y clínico en alineadores, aparatos
                terapéuticos, guías quirúrgicas, planificación de implantes (a
                nivel mundial)
                <br />- Formadora en dispositivos médicos y aplicaciones de
                software
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

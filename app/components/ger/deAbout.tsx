import React from "react";

const DeAboutSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-white text-black mt-20">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
          Unser Team
        </h2>

        <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
          Fast 10 Jahre Erfahrung mit Alignern
        </h3>

        {/* Descripción de equipo */}
        <p className="max-w-2xl text-justify text-lg text-black mt-6">
          Mit fast 10 Jahren Erfahrung in der Aligner-Industrie haben wir uns
          einen soliden Ruf in der Beratung und Behandlungsplanung für
          Kieferorthopäden weltweit aufgebaut. Unser fundiertes Wissen und
          unsere umfangreiche Erfahrung ermöglichen es uns, innovative Lösungen
          anzubieten, die auf die Bedürfnisse jedes einzelnen Patienten
          zugeschnitten sind. Im Laufe der Jahre haben wir eng mit
          Kieferorthopäden zusammengearbeitet, um ihre Aligner-Behandlungen zu
          optimieren und die höchsten Standards in Bezug auf Sorgfalt und
          Effizienz zu gewährleisten. Ob komplexe Fälle oder
          Standardbehandlungen, unsere Erfahrung ermöglicht es uns, Sie mit
          Vertrauen und Präzision zu beraten, was uns zu einem zuverlässigen
          Partner in Ihrer kieferorthopädischen Praxis.
        </p>
        <div className="flex flex-Fast 10 Jahre Erfahrung mit Alignerncol items-center py-20 gap-8">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col items-center bg-bluebg p-12 rounded-lg shadow-lg w-full md:w-1/2">
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
            <div className="flex flex-col justify-center text-center text-black space-y-2">
              <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
              <h3 className="text-xl font-bold">
                Location: Wichita, Kansas, United States.
              </h3>
              <h4 className="text-md text-start">
                - Former Clinical Protocol Specialist at Invisalign: providing
                assistance to doctors worldwide.
                <br />- Former 3D Dental Treatment Designer (treatment
                technician).
              </h4>
            </div>
          </div>

          {/* Segundo miembro del equipo */}
          <div className="flex flex-col items-center bg-orangebg p-12 rounded-lg shadow-lg text-white w-full md:w-1/2">
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
            <div className="flex flex-col justify-center text-center text-white space-y-2">
              <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
              <h3 className="text-xl font-bold">
                Raum Köln, NRW, Deutschland.
              </h3>
              <h4 className="text-md text-start">
                - Zahntechniker.
                <br /> - - Ehemaliger technischer und klinischer Spezialist für
                Aligner, therapeutische Geräte, Bohrschablonen, Implantatplanung
                (weltweit).
                <br />- Trainer für Medizinprodukte und Softwareanwendungen.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeAboutSection;

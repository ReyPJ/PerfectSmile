import React from "react";
import Image from "next/image";

const DeAboutSection: React.FC = () => {
  return (
    <div className="w-full bg-white text-black py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
            Unser Team
          </h2>
          <h3 className="text-2xl uppercase md:text-3xl font-bold text-black mt-4">
            Fast 10 Jahre Erfahrung mit Alignern
          </h3>
        </div>

        <div className="text-justify max-w-4xl mx-auto text-lg text-black mb-16">
          <p>
            Mit fast 10 Jahren Erfahrung in der Aligner-Industrie haben wir uns
            einen soliden Ruf in der Beratung und Behandlungsplanung für
            Kieferorthopäden weltweit aufgebaut. Unser fundiertes Wissen und
            unsere umfangreiche Erfahrung ermöglichen es uns, innovative
            Lösungen anzubieten, die auf die Bedürfnisse jedes einzelnen
            Patienten zugeschnitten sind. Im Laufe der Jahre haben wir eng mit
            Kieferorthopäden zusammengearbeitet, um ihre Aligner-Behandlungen zu
            optimieren und die höchsten Standards in Bezug auf Sorgfalt und
            Effizienz zu gewährleisten. Ob komplexe Fälle oder
            Standardbehandlungen, unsere Erfahrung ermöglicht es uns, Sie mit
            Vertrauen und Präzision zu beraten, was uns zu einem zuverlässigen
            Partner in Ihrer kieferorthopädischen Praxis.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center py-20 gap-8 lg:gap-32">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col items-center pb-5 bg-bluebg rounded-lg shadow-lg">
            <div className="mb-4 lg:w-[500px] w-auto">
              <Image
                src="/DiegoAraya.jpg"
                alt="Dentista"
                width={800}
                height={800}
                className="rounded w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-center text-black pt-4 pb-10 space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
              <h3 className="text-xl font-bold">
                  Location: Wichita, Kansas, United States.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                - Former Clinical Protocol Specialist at Invisalign: providing
                assistance to doctors worldwide.
                <br />- Former 3D Dental Treatment Designer (treatment
                technician).
              </h4>
            </div>
          </div>

          {/* Segundo miembro del equipo */}
          <div className="flex flex-col items-center pb-5 bg-orangebg rounded-lg shadow-lg">
            <div className="mb-4 lg:w-[500px] w-auto">
              <Image
                src="/steff.jpg"
                alt="Dentista"
                width={800}
                height={800}
                className="rounded w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-center text-white space-y-2 min-h-[150px]">
              <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
              <h3 className="text-xl font-bold">
                  Raum Köln, NRW, Deutschland.
              </h3>
              <h4 className="text-md max-w-xs text-start">
                  - Zahntechniker.
                  <br />- Ehemaliger technischer und klinischer Spezialist für
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

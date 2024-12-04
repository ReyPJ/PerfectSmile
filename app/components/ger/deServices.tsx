import React from "react";
import Image from "next/image";

const DeServicesSection: React.FC = () => {
  return (
    <div className="h-full w-full my-10 bg-white">
      <h2 className="text-4xl uppercase text-center font-bold text-black mb-5">
        Unsere Dienstleistungen
      </h2>
      <div className="flex flex-col sm:flex-row bg-bluebg text-white w-full justify-center gap-10 sm:gap-36 items-center">
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <h2 className="text-2xl text-center">
            Individuelle Planung <strong>kieferorthopädischer</strong>
            Behandlungen.
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            Wir unterstützen Kieferorthopäden und Zahnärzte bei der Erstellung
            individueller Behandlungspläne auf der Grundlage einer gründlichen
            Analyse des individuellen Falls. Unsere Planung umfasst Optionen, um
            Zähne effizient und komfortabel auszurichten.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <Image
            src={"/servicio1.jpg"}
            alt="conference"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse mt-28 mb-5 bg-orangebg text-white w-full justify-center gap-10 sm:gap-36 items-center">
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <h2 className="text-2xl text-center">
            Echtzeit-Beratung durch <strong>Kieferorthopädie-Experten</strong>
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            Unsere Kieferorthopädie-Experten bieten Beratung in Echtzeit an. Ob
            Sie Unterstützung bei einem komplizierten Fall benötigen oder
            einfach eine zweite Meinung zu einem Behandlungsplan wünschen,
            unsere Spezialisten stehen für sofortige Konsultationen über
            WhatsApp, Telegram, Signal oder Zoom zur Verfügung.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <Image
            src={"/servicio2.jpg"}
            alt="conference"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-28 mb-5 bg-bluebg text-white w-full justify-center gap-10 sm:gap-36 items-center">
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <h2 className="text-2xl text-center">
            Überprüfung und <strong>Anpassung</strong> laufender
            Behandlungspläne.
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            Wir bieten die Möglichkeit, bereits laufende kieferorthopädische
            Behandlungspläne zu überprüfen und anzupassen. Unsere Experten
            bewerten den Fortschritt und schlagen Änderungen vor, um die
            Effizienz und die Ergebnisse zu maximieren – alles aus der Ferne,
            ohne den Praxisablauf zu unterbrechen.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <Image
            src={"/service3.jpg"}
            alt="conference"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default DeServicesSection;

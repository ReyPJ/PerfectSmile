import React from "react";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <div className="h-full my-10 p-5 bg-white">
      <h2 className="text-3xl text-center font-bold text-[#013133] mb-5">
        Servicios
      </h2>
      <div className="flex bg-orange-500 text-white w-full justify-center gap-36 items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl text-start">
            Nombre del servicio de forma detallada y{" "}
            <strong>explicativa</strong> sobre el servicio que se esta
            ofreciendo
          </h2>
          <p className="p-4 bg-black text-lg text-white font-bold text-center">
            Detalles resumen del servicio, con todos los datos que necesiten
            estar en este parrafo.
          </p>
        </div>
        <div>
          <Image
            src={"/conference.jpg"}
            alt="conference"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex my-3 flex-row-reverse bg-orange-500 text-white w-full justify-center gap-36 items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl text-start">
            Nombre del servicio de forma detallada y{" "}
            <strong>explicativa</strong> sobre el servicio que se esta
            ofreciendo
          </h2>
          <p className="p-4 bg-black text-lg text-white font-bold text-center">
            Detalles resumen del servicio, con todos los datos que necesiten
            estar en este parrafo.
          </p>
        </div>
        <div>
          <Image
            src={"/conference.jpg"}
            alt="conference"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

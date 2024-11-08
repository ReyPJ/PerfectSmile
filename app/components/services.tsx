import React from "react";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <div className="h-full my-10 p-5 bg-white">
      <h2 className="text-4xl uppercase text-center font-bold text-[#013133] mb-5">
        Nuestros Servicios
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
      <div className="text-lg my-20">
        <h2>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </h2>
      </div>
      <div className="flex mt-28 mb-5 flex-row-reverse bg-blue-500 text-white w-full justify-center gap-36 items-center">
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

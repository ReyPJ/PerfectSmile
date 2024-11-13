import React from "react";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <div className="h-full w-full my-10 bg-white">
      <h2 className="text-4xl uppercase text-center font-bold text-black mb-5">
        Nuestros Servicios
      </h2>
      <div className="flex bg-orange-500 text-white w-full justify-center gap-36 items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl text-start">
            Planificación de Tratamientos de <strong>Ortodoncia</strong>{" "}
            Personalizada.
          </h2>
          <p className="p-4 bg-black text-lg text-white font-bold text-justify">
            Ayudamos a los dentistas a crear planes de tratamiento totalmente
            personalizados, basados en un análisis exhaustivo de cada caso.
            Nuestra planificación incluye opciones para alinear dientes de
            manera eficiente y cómoda.
          </p>
        </div>
        <div>
          <Image
            src={"/servicio1.jpg"}
            alt="conference"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="text-lg flex flex-col gap-10 p-10 my-20">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
      <div className="flex mt-28 mb-5 flex-row-reverse bg-blue-500 text-white w-full justify-center gap-36 items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl text-start">
            Asesoría en Tiempo Real de <strong>expertos</strong> en Ortodoncia
          </h2>
          <p className="p-4 bg-black text-lg text-white font-bold text-justify">
            Ofrecemos asesoría en tiempo real con nuestros expertos en
            ortodoncia. Ya sea que necesites ayuda con un caso complicado o
            simplemente una segunda opinión sobre un plan de tratamiento,
            nuestros especialistas están disponibles para consultas inmediatas a
            través de WhatsApp, Telegram, Signal o Zoom.
          </p>
        </div>
        <div>
          <Image
            src={"/servicio2.jpg"}
            alt="conference"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="text-lg flex flex-col gap-10 p-10 my-20">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
      <div className="flex mt-28 mb-5 bg-orange-500 text-white w-full justify-center gap-36 items-center">
        <div className="flex flex-col gap-2 w-1/3">
          <h2 className="text-2xl text-start">
            Revisión y Ajuste de Planes de en Curso <strong>Tratamiento</strong>{" "}
            en Ortodoncia.
          </h2>
          <p className="p-4 bg-black text-lg text-white font-bold text-justify">
            Ofrecemos la posibilidad de revisar y ajustar planes de tratamiento
            de ortodoncia que ya estén en marcha. Nuestros expertos evalúan el
            progreso y sugieren modificaciones para maximizar la eficiencia y
            los resultados, todo de manera remota, sin interrumpir el flujo del
            consultorio.
          </p>
        </div>
        <div>
          <Image
            src={"/service3.jpg"}
            alt="conference"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="text-lg flex flex-col gap-10 p-10 my-20">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
    </div>
  );
};

export default ServicesSection;

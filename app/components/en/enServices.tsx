import React from "react";
import Image from "next/image";

const EnServicesSection: React.FC = () => {
  return (
    <div className="h-full w-full my-10 bg-white">
      <h2 className="text-4xl uppercase text-center font-bold text-black mb-5">
        Our Services
      </h2>
      <div className="flex flex-col sm:flex-row bg-bluebg text-white w-full justify-center gap-10 sm:gap-36 items-center">
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <h2 className="text-2xl text-center">
            Customized <strong>Orthodontic</strong> Treatment Planning.
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            We help dentists create fully personalized treatment plans based on
            a thorough analysis of each case. Our planning includes options to
            align teeth efficiently and comfortably.
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
            Real-Time Orthodontic <strong>Expert</strong> Consultation
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            We offer real-time consultations with our orthodontic experts.
            Whether you need help with a complicated case or simply a second
            opinion on a treatment plan, our specialists are available for
            immediate consultations via WhatsApp, Telegram, Signal, or Zoom.
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
            Review and Adjustment of <strong>Ongoing</strong> Treatment Plans.
          </h2>
          <p className="p-4 bg-black text-lg text-white text-justify">
            We offer the opportunity to review and adjust orthodontic treatment
            plans that are already in progress. Our experts assess the progress
            and suggest modifications to maximize efficiency and results, all
            remotely, without interrupting the practice’s workflow.
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

export default EnServicesSection;

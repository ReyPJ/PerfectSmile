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
          Almost 10 Years of Expertise in Aligners
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

        <div className="flex flex-col items-center py-20 gap-8">
          {/* Primer miembro del equipo */}
          <div className="flex flex-col items-center bg-gray-100 p-12 rounded-lg shadow-lg w-full md:w-1/2">
            <div className="mb-4">
              <Image
                src="/profile.jpg"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
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
          <div className="flex flex-col items-center bg-orange-500 p-12 rounded-lg shadow-lg text-white w-full md:w-1/2">
            <div className="mb-4">
              <Image
                src="/profile.jpg"
                alt="Dentista"
                width={270}
                height={200}
                className="rounded"
              />
            </div>
            <div className="flex flex-col justify-center text-center text-white space-y-2">
              <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
              <h3 className="text-xl font-bold">
                Location: Cologne Area, NRW, Germany.
              </h3>
              <h4 className="text-md text-start">
                - Dental Technician
                <br /> - Former Technical and Clinical Specialist in aligners,
                therapeutic appliances, surgical guides, implant planning
                (worldwide).
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnAboutSection;

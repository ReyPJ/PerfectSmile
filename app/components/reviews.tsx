import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC = () => {
  return (
    <div className="h-full my-10 p-5 bg-white">
      <h2 className="text-4xl uppercase text-center font-bold text-black mb-5">
        Lo que piensan nuestros clientes
      </h2>
      <div className="flex flex-wrap items-center p-5 gap-10 w-full justify-center">
        <div className="w-full sm:w-1/3 lg:w-1/3 bg-gray-100 shadow-lg p-5 h-auto rounded-xl mb-5 sm:mb-0">
          <div className="flex mb-3">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">&quot;Titulo de la reseña&quot;</h3>
            <p className="text-gray-600">
              Reseña como tal, intentar que sea medianamente larga
            </p>
            <div className="flex gap-3">
              <Image
                src={"/profile.jpg"}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover"
              />
              <div>
                <h3 className="font-bold">Nombre</h3>
                <p>Doctor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/3 bg-gray-100 p-5 shadow-lg h-auto rounded-xl mb-5 sm:mb-0">
          <div className="flex mb-3">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">&quot;Titulo de la reseña&quot;</h3>
            <p className="text-gray-600">
              Reseña como tal, intentar que sea medianamente larga
            </p>
            <div className="flex gap-3">
              <Image
                src={"/profile.jpg"}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover"
              />
              <div>
                <h3 className="font-bold">Robert C. Chamber</h3>
                <p>Doctor</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/3 lg:w-1/3 bg-gray-100 shadow-lg p-5 h-auto rounded-xl mb-5 sm:mb-0">
          <div className="flex mb-3">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">&quot;Titulo de la reseña&quot;</h3>
            <p className="text-gray-600">
              Reseña como tal, intentar que sea medianamente larga
            </p>
            <div className="flex gap-3">
              <Image
                src={"/profile.jpg"}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full aspect-square object-cover"
              />
              <div>
                <h3 className="font-bold">Robert C. Chamber</h3>
                <p>Doctor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;

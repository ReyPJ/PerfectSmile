import React from "react";
import Image from "next/image";

const ReviewSection: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-5 bg-[#f9f9f9]">
      <h2 className="text-3xl font-bold text-[#013133] mb-5">Opiniones</h2>
      <div className="flex gap-10 p-10">
        <Image
          className="w-96 rounded-lg shadow-md"
          src={"/doctorreview.jpg"}
          alt="Imagen de reseña"
          width={400}
          height={400}
        />
        <p className="w-96 text-center text-gray-700">
          Número de unidades: 5
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo dis
          vestibulum platea fringilla aliquet auctor sapien, quis non viverra
          cum inceptos id. Commodo mollis duis rhoncus justo fames sociis, ante
          fusce quis senectus nec sem vehicula, platea erat parturient nascetur
          praesent.
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;

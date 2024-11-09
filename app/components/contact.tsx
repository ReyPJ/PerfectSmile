import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <div className="h-full p-5 bg-gray-100 shadow-lg rounded">
      <div className="flex gap-10 flex-col md:flex-row mx-10 justify-between items-start">
        {/* Formulario de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center text-[#013133]">Contáctanos</h2>
          <form className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Nombre"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <textarea
              placeholder="¿Cómo te podemos ayudar?"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              rows={4}
            />
            <button className="bg-black text-white p-2 rounded hover:bg-[#cbaf77] transition">
              Enviar
            </button>
          </form>
        </div>

        {/* Métodos de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-[#013133]">
            Tambien nos puedes contactar por:
          </h3>
          <div className="flex flex-col gap-4">
            {/* Tarjetas de contacto */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaWhatsapp className="text-[#25D366] text-3xl mr-4" />
              <h3 className="text-lg">7718-7181</h3>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaFacebook className="text-[#3b5998] text-3xl mr-4" />
              <h3 className="text-lg">@SomeFacebook</h3>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaInstagram className="text-[#E1306C] text-3xl mr-4" />
              <h3 className="text-lg">@SomeInstagram</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

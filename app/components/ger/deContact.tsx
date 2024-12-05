"use client";
import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import countriesData from "@/app/data/countries.json";

interface Country {
  alpha2: string;
  [key: string]: string;
}

//@ts-expect-error: I dont know
const countries: Country[] = countriesData;

const DeContactSection: React.FC = () => {
  const idioma = "de";

  const GetCountryOpts = (): { code: string; name: string }[] => {
    return countries.map((country: Country) => ({
      code: country.alpha2,
      name: country[idioma],
    }));
  };

  return (
    <div className="h-full p-5 bg-gray-100 shadow-lg rounded">
      <div className="flex gap-10 flex-col md:flex-row mx-10 justify-between items-start">
        {/* Formulario de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center text-[#013133]">
            Kontaktieren Sie uns
          </h2>
          <form className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            />
            <select
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              defaultValue=""
            >
              <option value="" disabled>
                Wählen Sie Ihr Land
              </option>
              {GetCountryOpts().map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Wie können wir Ihnen helfen?"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              rows={4}
            />
            <button className="bg-black text-white p-2 rounded hover:bg-[#cbaf77] transition">
              Unterste Leiste
            </button>
          </form>
        </div>

        {/* Métodos de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-[#013133]">
            You can also find us on:
          </h3>
          <div className="flex flex-col gap-4">
            {/* Tarjetas de contacto */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaWhatsapp className="text-[#25D366] text-3xl mr-4" />
              <h3 className="text-lg">+1-(316)-550-3196</h3>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaFacebook className="text-[#3b5998] text-3xl mr-4" />
              <h3 className="text-lg">@SomeFacebook</h3>
            </div>
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaInstagram className="text-[#E1306C] text-3xl mr-4" />
              <h3 className="text-lg">@perfectsmileexperts</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeContactSection;

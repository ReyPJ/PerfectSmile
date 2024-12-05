"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import countriesData from "@/app/data/countries.json";

interface Country {
  alpha2: string;
  [key: string]: string;
}

//@ts-expect-error: I dont know
const countries: Country[] = countriesData;

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    telefono: "",
    email: "",
    pais: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const idioma = "es";

  const GetCountryOpts = (): { code: string; name: string }[] => {
    return countries.map((country: Country) => ({
      code: country.alpha2,
      name: country[idioma],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Mensaje enviado exitosamente");
        setForm({ name: "", telefono: "", email: "", pais: "", mensaje: "" });
      } else {
        setMessage(data.error || "Error enviando el mensaje");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setMessage("Error enviando el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-5 bg-gray-100 shadow-lg rounded">
      <div className="flex gap-10 flex-col md:flex-row mx-10 justify-between items-start">
        {/* Formulario de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center text-[#013133]">
            Contáctanos
          </h2>
          <form
            className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              value={form.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Teléfono"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              name="telefono"
              value={form.telefono}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <select
              name="pais"
              value={form.pais}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
            >
              <option value="" disabled>
                Selecciona tu país
              </option>
              {GetCountryOpts().map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleInputChange}
              placeholder="¿Cómo te podemos ayudar?"
              className="border border-gray-300 rounded p-2 focus:outline-none focus:border-[#cbaf77]"
              rows={4}
            />
            <button
              className="bg-black text-white p-2 rounded hover:bg-[#cbaf77] transition"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {message && (
            <p className="text-center text-lg text-green-600">{message}</p>
          )}
        </div>

        {/* Métodos de contacto */}
        <div className="flex flex-col gap-5 w-full md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-[#013133]">
            También nos puedes contactar por:
          </h3>
          <div className="flex flex-col gap-4">
            {/* Tarjetas de contacto */}
            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <FaWhatsapp className="text-[#25D366] text-3xl mr-4" />
              <h3 className="text-lg">+1-(316)-5503195</h3>
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

export default ContactSection;

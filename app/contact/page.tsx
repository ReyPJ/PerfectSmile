"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import EnHeader from "../components/en/enHeader";
import EnFooter from "../components/en/enFooter";
import DeHeader from "../components/ger/deHeader";
import DeFooterSection from "../components/ger/deFooter";
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope, FaSpinner } from "react-icons/fa";
import countriesData from "@/app/data/countries.json";

interface Country {
  alpha2: string;
  [key: string]: string;
}

//@ts-expect-error: I dont know
const countries: Country[] = countriesData;

export default function Contact() {
  const [idioma, setIdioma] = useState<"es" | "en" | "ger">("en");
  const [form, setForm] = useState({
    name: "",
    telefono: "",
    email: "",
    pais: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const GetCountryOpts = (): { code: string; name: string }[] =>
    countries.map((country) => ({
      code: country.alpha2,
      name: country[idioma] || country.en,
    }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = idioma === "es" ? "Nombre es requerido" : "Name is required";
    if (!form.telefono) newErrors.telefono = idioma === "es" ? "Teléfono es requerido" : "Phone is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = idioma === "es" ? "Email no válido" : "Invalid email";
    if (!form.pais) newErrors.pais = idioma === "es" ? "País es requerido" : "Country is required";
    if (!form.mensaje) newErrors.mensaje = idioma === "es" ? "Mensaje es requerido" : "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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
        setMessage(idioma === "es" ? "Mensaje enviado exitosamente" : "Message sent successfully");
        setForm({ name: "", telefono: "", email: "", pais: "", mensaje: "" });
      } else {
        setMessage(data.error || (idioma === "es" ? "Error enviando el mensaje" : "Error sending message"));
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setMessage(idioma === "es" ? "Error enviando el mensaje" : "Error sending message");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedIdioma = localStorage.getItem("idioma");
    if (["es", "en", "ger"].includes(savedIdioma || "")) {
      setIdioma(savedIdioma as "es" | "en" | "ger");
    }
  }, []);

  return (
    <main>
      {idioma === "es" ? (
        <>
          <Header />
          <div>
            <h1 className="text-5xl text-center font-bold uppercase my-10">
              Contacta con nuestro equipo de expertos
            </h1>
            <div className="py-10 max-w-4xl mx-auto">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className={`border p-3 rounded w-full ${
                      errors.name ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    name="telefono"
                    className={`border p-3 rounded w-full ${
                      errors.telefono ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.telefono}
                    onChange={handleInputChange}
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`border p-3 rounded w-full ${
                      errors.email ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <select
                    name="pais"
                    value={form.pais}
                    onChange={handleInputChange}
                    className={`border p-3 rounded w-full ${
                      errors.pais ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
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
                  {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea
                    name="mensaje"
                    placeholder="¿Cómo te podemos ayudar?"
                    className={`border p-3 rounded w-full ${
                      errors.mensaje ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                  ></textarea>
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-[#cbaf77] transition relative"
                    disabled={loading}
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                      "Enviar"
                    )}
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-lg mt-5 text-green-600">{message}</p>}
              <div className="mt-10 bg-gray-100 p-5 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Encuéntranos también en:</h2>
                <div className="flex flex-col gap-6 items-center mt-5">
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaWhatsapp className="text-green-500 text-2xl" />
                    <span>+1 (316) 550-3195</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaInstagram className="text-pink-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaFacebook className="text-blue-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaEnvelope className="text-gray-500 text-2xl" />
                    <span>perfectsmileexperts@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : idioma === "en" ? (
        <>
          <EnHeader />
          <div>
            <h1 className="text-5xl text-center font-bold uppercase my-10">
                Contact our team of experts
            </h1>
            <div className="py-10 max-w-4xl mx-auto">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className={`border p-3 rounded w-full ${
                      errors.name ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="telefono"
                    className={`border p-3 rounded w-full ${
                      errors.telefono ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.telefono}
                    onChange={handleInputChange}
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`border p-3 rounded w-full ${
                      errors.email ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <select
                    name="pais"
                    value={form.pais}
                    onChange={handleInputChange}
                    className={`border p-3 rounded w-full ${
                      errors.pais ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                    {GetCountryOpts().map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea
                    name="mensaje"
                    placeholder="How can we help you?"
                    className={`border p-3 rounded w-full ${
                      errors.mensaje ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                  ></textarea>
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-[#cbaf77] transition relative"
                    disabled={loading}
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-lg mt-5 text-green-600">{message}</p>}
              <div className="mt-10 bg-gray-100 p-5 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Find us also on:</h2>
                <div className="flex flex-col gap-6 items-center mt-5">
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaWhatsapp className="text-green-500 text-2xl" />
                    <span>+1 (316) 550-3195</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaInstagram className="text-pink-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaFacebook className="text-blue-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaEnvelope className="text-gray-500 text-2xl" />
                    <span>perfectsmileexperts@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EnFooter />
        </>
      ) : idioma === "ger" ? (
        <>
          <DeHeader />
          <div>
            <h1 className="text-5xl text-center font-bold uppercase my-10">
              Kontaktieren Sie unser Expertenteam
            </h1>
            <div className="py-10 max-w-4xl mx-auto">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className={`border p-3 rounded w-full ${
                      errors.name ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="telefono"
                    className={`border p-3 rounded w-full ${
                      errors.telefono ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.telefono}
                    onChange={handleInputChange}
                  />
                  {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`border p-3 rounded w-full ${
                      errors.email ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <select
                    name="pais"
                    value={form.pais}
                    onChange={handleInputChange}
                    className={`border p-3 rounded w-full ${
                      errors.pais ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
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
                  {errors.pais && <p className="text-red-500 text-sm mt-1">{errors.pais}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <textarea
                    name="mensaje"
                    placeholder="Wie können wir Ihnen helfen?"
                    className={`border p-3 rounded w-full ${
                      errors.mensaje ? "border-red-500" : "border-gray-300 focus:border-[#cbaf77]"
                    }`}
                    value={form.mensaje}
                    onChange={handleInputChange}
                    rows={4}
                  ></textarea>
                  {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-[#cbaf77] transition relative"
                    disabled={loading}
                  >
                    {loading ? (
                      <FaSpinner className="animate-spin mx-auto" />
                    ) : (
                      "Senden"
                    )}
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-lg mt-5 text-green-600">{message}</p>}
              <div className="mt-10 bg-gray-100 p-5 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-center">Finden Sie uns auch auf</h2>
                <div className="flex flex-col gap-6 items-center mt-5">
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaWhatsapp className="text-green-500 text-2xl" />
                    <span>+1 (316) 550-3195</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaInstagram className="text-pink-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaFacebook className="text-blue-500 text-2xl" />
                    <span>@perfectsmile</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg font-medium text-gray-700">
                    <FaEnvelope className="text-gray-500 text-2xl" />
                    <span>perfectsmileexperts@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DeFooterSection />
        </>
      ) : null}
    </main>
  );
}


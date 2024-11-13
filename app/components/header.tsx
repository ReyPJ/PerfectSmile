"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [idioma, setIdioma] = useState<"es" | "en">("es");

  useEffect(() => {
    const savedIdioma = localStorage.getItem("idioma");
    if (savedIdioma === "es" || savedIdioma === "en") {
      setIdioma(savedIdioma as "es" | "en");
    }
  }, []);

  const handleIdiomaChange = (lang: "es" | "en") => {
    localStorage.setItem("idioma", lang);
    setIdioma(lang);
    window.location.reload();
  };

  return (
    <header className="bg-white p-10">
      <div className="flex justify-evenly items-center mx-auto max-w-screen-xl">
        <Link
          href="/"
          className="text-black uppercase text-md text-2xl font-bold"
        >
          Perfect Smile
        </Link>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/"
                className="text-black font-bold uppercase text-md p-4 rounded-xl hover:text-white hover:bg-black transition-all delay-75"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-black font-bold uppercase text-md p-4 rounded-xl hover:text-white hover:bg-black transition-all delay-75"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-black font-bold uppercase text-md p-4 rounded-xl hover:text-white hover:bg-black transition-all delay-75"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black font-bold uppercase text-md p-4 rounded-xl hover:text-white hover:bg-black transition-all delay-75"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </nav>
        {/* Selector de idioma */}
        <div className="flex gap-4">
          <button
            onClick={() => handleIdiomaChange("es")}
            className={`font-bold ${idioma === "es" ? "underline" : ""}`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => handleIdiomaChange("en")}
            className={`font-bold ${idioma === "en" ? "underline" : ""}`}
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

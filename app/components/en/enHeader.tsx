"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 

const EnHeader: React.FC = () => {
  const [idioma, setIdioma] = useState<"es" | "en" | "ger">("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedIdioma = localStorage.getItem("idioma");
    if (savedIdioma === "es" || savedIdioma === "en") {
      setIdioma(savedIdioma as "es" | "en" | "ger");
    }
  }, []);

  const handleIdiomaChange = (lang: "es" | "en" | "ger") => {
    localStorage.setItem("idioma", lang);
    setIdioma(lang);
    window.location.reload(); // Refrescar para cargar el idioma seleccionado
  };

  return (
    <header className="bg-white p-6 relative z-10">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <Image src={"/cuadrada.png"} alt="Logo" width={200} height={200} />

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none text-4xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex md:flex-row items-center gap-5">
          <ul className="flex gap-5">
            <li>
              <Link
                href="/"
                className={`text-black font-bold uppercase text-md p-4 rounded-xl transition-all delay-75
                  ${pathname === "/" 
                    ? "bg-black text-white" 
                    : "hover:text-white hover:bg-black"
                  }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-black font-bold uppercase text-md p-4 rounded-xl transition-all delay-75
                  ${pathname === "/about"
                    ? "bg-black text-white"
                    : "hover:text-white hover:bg-black"
                  }
                `}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-black font-bold uppercase text-md p-4 rounded-xl transition-all delay-75
                  ${pathname === "/contact"
                    ? "bg-black text-white"
                    : "hover:text-white hover:bg-black"
                  }
                `}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Language Selector */}
        <div className="hidden md:flex gap-4">
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
          <button
            onClick={() => handleIdiomaChange("ger")}
            className={`font-bold ${idioma === "ger" ? "underline" : ""}`}
          >
            🇩🇪 Deutsch
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-20">
          <nav>
            <ul className="flex flex-col gap-8">
              <li>
                <Link
                  href="/"
                  className="text-black font-bold uppercase text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black font-bold uppercase text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black font-bold uppercase text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Language Selector */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => handleIdiomaChange("es")}
              className={`font-bold text-lg ${idioma === "es" ? "underline" : ""}`}
            >
              🇪🇸 Español
            </button>
            <button
              onClick={() => handleIdiomaChange("en")}
              className={`font-bold text-lg ${idioma === "en" ? "underline" : ""}`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => handleIdiomaChange("ger")}
              className={`font-bold ${idioma === "ger" ? "underline" : ""}`}
            >
              🇩🇪 Deutsch
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-black text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
};

export default EnHeader;

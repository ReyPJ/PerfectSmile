import React from "react";
import Link from "next/link";
import { FaPhone, FaClock } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-[#013133] p-5">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        {/* Logo o Título */}
        <Link href="/" className="text-white text-2xl font-bold">
          Dental Care
        </Link>

        {/* Información de Contacto */}
        <div className="flex gap-10">
          <div className="flex items-center text-white">
            <FaPhone className="mr-2" />
            <span>7718-7181</span>
          </div>
          <div className="flex items-center text-white">
            <FaClock className="mr-2" />
            <span>Lun - Vie: 9am - 6pm</span>
          </div>
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="text-white hover:text-[#cbaf77]">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-[#cbaf77]">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-white hover:text-[#cbaf77]"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-[#cbaf77]">
                Contáctanos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

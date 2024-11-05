import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Información de la Empresa */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold">Dental Care</h3>
          <p className="mt-2 max-w-md">
            Su salud bucal es nuestra prioridad. Nos dedicamos a ofrecer
            servicios de calidad y confianza.
          </p>
          <p className="mt-4 text-gray-400">
            © {new Date().getFullYear()} Dental Care. Todos los derechos
            reservados.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-[#cbaf77]">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#cbaf77]">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#cbaf77]">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#cbaf77]">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold">Síguenos</h4>
          <div className="flex space-x-4 mt-3">
            <Link href="https://facebook.com">
              <FaFacebookF className="hover:text-[#cbaf77] text-2xl" />
            </Link>
            <Link href="https://linkedin.com">
              <FaLinkedinIn className="hover:text-[#cbaf77] text-2xl" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="hover:text-[#cbaf77] text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

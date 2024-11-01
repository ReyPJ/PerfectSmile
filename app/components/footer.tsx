import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#013133] text-white py-10">
      <div className="flex flex-col items-center mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-5 mb-5">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Dental Care</h3>
            <p className="mt-2">Su salud bucal es nuestra prioridad.</p>
          </div>
          <div className="mt-5 md:mt-0">
            <h4 className="font-semibold">Enlaces rápidos</h4>
            <ul className="mt-2">
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
        </div>
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Dental Care. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white p-10">
      <div className="flex justify-evenly items-center mx-auto max-w-screen-xl">
        {/* Logo o Título */}
        <Link href="/" className="text-orange-600 text-2xl font-bold">
          Perfect Smile
        </Link>
        {/* Navegación */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/"
                className="text-orange-600 p-4 rounded-xl hover:text-white hover:bg-fuchsia-600 transition-all delay-75"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-orange-600 p-4 rounded-xl hover:text-white hover:bg-fuchsia-600 transition-all delay-75"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-orange-600 p-4 rounded-xl hover:text-white hover:bg-fuchsia-600 transition-all delay-75"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-orange-600 p-4 rounded-xl hover:text-white hover:bg-fuchsia-600 transition-all delay-75"
              >
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

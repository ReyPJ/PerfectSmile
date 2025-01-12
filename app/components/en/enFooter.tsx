import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const EnFooter: React.FC = () => {
  return (
    <footer className="bg-bluebg text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Información de la Empresa */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-bold">Perfect Smile Experts</h3>
          <p className="mt-2 max-w-md">Where Smile Meets Expertise</p>
          <p className="mt-4 text-gray-400">
            © {new Date().getFullYear()} Perfect Smile Experts. All Right
            Reserved.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-[#cbaf77]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#cbaf77]">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#cbaf77]">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-3">
            <Link href="https://facebook.com">
              <FaFacebookF className="hover:text-[#cbaf77] text-2xl" />
            </Link>
            <Link href="https://instagram.com">
              <FaInstagram className="hover:text-[#cbaf77] text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnFooter;

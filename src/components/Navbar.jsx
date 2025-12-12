import React from "react";
import Logo from "../assets/logonavbar.png";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 shadow-sm bg-white fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo Ruang Ekspresi" className="w-8 h-8" />
        <h1 className="font text-indigo-800 text-xl leading-tight">
          <span>ruang</span><br />
          <span>ekspresi</span>
        </h1>
      </div>

      <ul className="hidden md:flex gap-8 font text-gray-800">
        <li>
          <a href="#home" className="hover:text-indigo-600 transition duration-150 cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-600 transition duration-150 cursor-pointer">About</a>
        </li>
        <li>
          <a href="#program" className="hover:text-indigo-600 transition duration-150 cursor-pointer">Program</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-600 transition duration-150 cursor-pointer">Projects</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-indigo-600 transition duration-150 cursor-pointer">Testimonials</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-600 transition duration-150 cursor-pointer">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

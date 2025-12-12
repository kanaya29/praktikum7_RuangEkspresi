import React from "react";
import Logo from "../assets/logonavbar.png";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 shadow-sm bg-white fixed top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={Logo} alt="" className="w-8 h-8" />
        <h1 className="font text-indigo-800 text-xl">
          ruang <br /> ekspresi</h1>
      </div>

      <ul className="flex gap-8 font text-gray-800">
        <li>Home</li>
        <li>About</li>
        <li>Program</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

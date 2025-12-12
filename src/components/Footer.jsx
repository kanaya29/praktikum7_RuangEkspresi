import React from "react";

import logo from "../assets/logoheader.png";
import iconMaps from "../assets/maps.png";
import iconEmail from "../assets/email.png";
import iconPhone from "../assets/call.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A63A6] text-white pt-10 pb-8">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Ruang Ekspresi" className="w-8 h-8" />
              <h1 className="text-lg leading-tight font">
                <span className="block">ruang <br /> ekspresi</span>
              </h1>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation,
              collaboration, dan guidance.
            </p>

            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <img src={iconMaps} alt="maps" className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
                </span>
              </p>

              <p className="flex items-center gap-3">
                <img src={iconEmail} alt="email" className="w-5 h-5 flex-shrink-0" />
                ruang_ekspresi@webmail.uad.ac.id
              </p>

              <p className="flex items-center gap-3">
                <img src={iconPhone} alt="phone" className="w-5 h-5 flex-shrink-0" />
                (0274) 518830
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Program</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Career Talks</a></li>
              <li><a href="#" className="hover:underline">Extra Classes</a></li>
              <li><a href="#" className="hover:underline">Project Work</a></li>
              <li><a href="#" className="hover:underline">Mentoring</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/40 mt-10"></div>

      <p className="text-center text-sm text-white mt-4">
        © 2025 Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}

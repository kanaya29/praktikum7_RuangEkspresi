import React from "react";

import ideationIcon from "../assets/Ideation.png";
import creationIcon from "../assets/Creation.png";
import collaborationIcon from "../assets/Colaboration.png";
import guidanceIcon from "../assets/Guidance.png";

export default function PillarSection() {
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      icon: ideationIcon,
      bg: "bg-yellow-200",
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      icon: creationIcon,
      bg: "bg-green-200",
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      icon: collaborationIcon,
      bg: "bg-blue-200",
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      icon: guidanceIcon,
      bg: "bg-pink-200",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Empat Pilar <span className="text-indigo-800">Ruang Ekspresi</span>
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa
        melalui pendekatan holistik
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {pillars.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-sm ${item.bg} flex flex-col items-center text-center`}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 mb-4 object-contain"
            />

            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

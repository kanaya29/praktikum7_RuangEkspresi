import React from 'react';
import heroImage from '../assets/foto1.jpg';


export default function HeroSection() {
  const tagsData = [
    { label: "Ideation", color: "bg-yellow-100 text-yellow-800" },
    { label: "Creation", color: "bg-green-100 text-green-800" },
    { label: "Collaboration", color: "bg-blue-100 text-blue-800" },
    { label: "Guidance & Support", color: "bg-pink-100 text-pink-800" },
  ];


  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">


        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block text-indigo-800">RUANG EKSPRESI :</span>
            <span className="block text-gray-900 mt-2">Wadah kreatif & Kompetitif Mahasiswa</span>
          </h1>


          <div className="flex flex-wrap gap-3 mt-8">
            {tagsData.map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-2 text-sm font-semibold rounded-full ${tag.color} shadow-sm`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>


        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Sekelompok Mahasiswa Berdiskusi"
            className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}


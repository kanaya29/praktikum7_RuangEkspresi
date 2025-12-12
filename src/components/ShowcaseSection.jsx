import React, { useState } from "react";

import arrowLeft from "../assets/panahkiri.png";
import arrowRight from "../assets/panahkanan.png";
import avatarIcon from "../assets/foto icon.png";
import projectImage from "../assets/Foto2.png";
import iconlive from "../assets/live demo.png";

const projectsData = [
  {
    category: "UI/UX Design",
    cardBgColor: "bg-rose-50/40 border border-pink-100/50", 
    categoryColor: "bg-cyan-600 text-white",
    title: "Creative Portfolio Platform",
    description: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    team: [
      { name: "Budi Santoso", role: "UI/UX Designer" },
      { name: "Siti Rahayu", role: "UX Researcher" },
      { name: "Joko Susilo", role: "Prototyper" },
    ],
    imageUrl: projectImage, 
  },
  {
    category: "Web Development",
    cardBgColor: "bg-blue-50/40 border border-blue-100/50", 
    categoryColor: "bg-cyan-600 text-white", 
    title: "Creative Portfolio Platform",
    description: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    team: [
      { name: "Budi Santoso", role: "Frontend Developer" },
      { name: "Rina Amelia", role: "Backend Developer" },
      { name: "Eko Pratama", role: "Database Admin" },
    ],
    imageUrl: projectImage,
  },
  {
    category: "Mobile Development",
    cardBgColor: "bg-yellow-50/40 border border-yellow-100/50", 
    categoryColor: "bg-cyan-600 text-white", 
    title: "Creative Portfolio Platform",
    description: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
    team: [
      { name: "Budi Santoso", role: "Frontend Developer" },
      { name: "Dian Permata", role: "Mobile Engineer" },
      { name: "Fajar Gemilang", role: "QA Tester" },
    ],
    imageUrl: projectImage,
  },
];

export default function ShowcaseSection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projectsData[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex + 1) % projectsData.length
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Showcase <span className="text-indigo-800">Student Projects</span>
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-12">
        Karya-karya inovatif yang telah dihasilkan oleh mahasiswa
        dalam program Ruang Ekspresi
      </p>

      <div 
        className={`w-full max-w-6xl rounded-2xl p-12 px-16 relative flex items-center backdrop-blur-sm ${currentProject.cardBgColor}`}
      >

        <button 
          onClick={prevProject} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          aria-label="Proyek Sebelumnya" 
        >
            <img src={arrowLeft} alt="Sebelumnya" className="w-8 h-8" />
        </button>

        <div className="flex flex-col md:flex-row w-full gap-10">

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className={`px-4 py-1 rounded-full text-sm font-medium ${currentProject.categoryColor}`}>
                {currentProject.category}
              </div>

              <img
                src={avatarIcon}
                alt="Avatar Pimpinan Proyek"
                className="w-10 h-10 rounded-full shadow-md"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              {currentProject.title}
            </h3>

            <p className="text-gray-700 mb-3">
              {currentProject.description}
            </p>

            <p className="font-semibold mb-2">Tim Pembuat :</p>

            <div className="space-y-3 mb-6">
              {currentProject.team.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img
                    src={avatarIcon}
                    alt={`Avatar ${member.name}`}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="px-6 py-2 bg-indigo-700 text-white rounded-lg shadow hover:bg-indigo-800 transition flex items-center gap-2">
                <img src={iconlive} alt="Ikon Live Demo" className="w-5 h-5" />
                Live Demo
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={currentProject.imageUrl}
              alt={`Tangkapan layar proyek ${currentProject.title} untuk ${currentProject.category}`}
              className="rounded-2xl border-4 border-pink-300 w-full object-cover"
            />
          </div>

        </div>

        <button 
          onClick={nextProject} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          aria-label="Proyek Selanjutnya" 
        >
          <img src={arrowRight} alt="Selanjutnya" className="w-8 h-8" />
        </button>

      </div>
    </section>
  );
}
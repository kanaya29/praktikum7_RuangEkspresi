import React from "react";
import budi1 from "../assets/icontestimoni.png";
import budi2 from "../assets/icontestimoni.png";
import budi3 from "../assets/icontestimoni.png";
import budi4 from "../assets/icontestimoni.png";
import budi5 from "../assets/icontestimoni.png";
import budi6 from "../assets/icontestimoni.png";

export default function Testimoni() {
  const data = [
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi1, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" },
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi2, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" },
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi3, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" },
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi4, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" },
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi5, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" },
    { name: "Budi Santoso", title: "Mahasiswa Sistem Informasi", img: budi6, desc: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain" }
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-5 flex gap-4 items-start"
        >
          <img
            src={item.img}
            alt="profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-xs text-blue-500 mb-2">{item.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

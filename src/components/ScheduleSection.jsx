import React from "react";

import calendarIcon from "../assets/Calender.png";
import clockIcon from "../assets/Clock.png";
import talkIcon from "../assets/CareerTalks.png";
import bookIcon from "../assets/ExtraClasses.png";
import codeIcon from "../assets/ProjectGroup.png";
import mentorIcon from "../assets/Mentoring.png";

export default function ScheduleSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Jadwal & <span className="text-indigo-800">Program Kegiatan</span>
      </h2>

      <p className="text-gray-600 text-center max-w-xl mb-12">
        Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran
        dan pengembangan skill setiap Sabtu
      </p>

      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-10">
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={calendarIcon} alt="Calendar" className="w-6 h-6 object-contain" />
          <p className="text-lg font-medium text-indigo-800">Setiap Sabtu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl shadow-sm bg-gradient-to-r from-yellow-200 to-green-200 border-l-4 border-indigo-600">
            <div className="flex items-center gap-4">
              <img src={clockIcon} alt="Clock" className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Sesi Pagi</h3>
                <p className="text-blue-700 font-semibold">09.00 - 12.00 WIB</p>
                <p className="text-gray-700 text-sm mt-1">
                  Workshop, Career Talks, dan Extra Classes Intensif
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl shadow-sm bg-gradient-to-r from-yellow-200 to-green-200 border-l-4 border-indigo-600">
            <div className="flex items-center gap-4">
              <img src={clockIcon} alt="Clock" className="w-8 h-8" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Sesi Sore</h3>
                <p className="text-blue-700 font-semibold">16.00 - 19.00 WIB</p>
                <p className="text-gray-700 text-sm mt-1">
                  Project Work, Mentoring, dan Collaboration Session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        <div className="p-6 rounded-xl bg-yellow-200 shadow-sm">
          <img src={talkIcon} alt="Career Talks" className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Career Talks</h3>
          <p className="text-gray-700 text-sm">
            Sesi sharing dari praktisi industri dan alumni sukses
          </p>
        </div>

        <div className="p-6 rounded-xl bg-green-200 shadow-sm">
          <img src={bookIcon} alt="Extra Classes" className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Extra Classes</h3>
          <p className="text-gray-700 text-sm">
            Kelas tambahan skill development dan workshop teknis
          </p>
        </div>

        <div className="p-6 rounded-xl bg-blue-200 shadow-sm">
          <img src={codeIcon} alt="Project Work" className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Project Work</h3>
          <p className="text-gray-700 text-sm">
            Mengerjakan project nyata dengan bimbingan mentor
          </p>
        </div>

        <div className="p-6 rounded-xl bg-pink-200 shadow-sm">
          <img src={mentorIcon} alt="Mentoring" className="w-10 h-10 mb-3" />
          <h3 className="font-semibold text-lg mb-1">Mentoring</h3>
          <p className="text-gray-700 text-sm">
            Sesi konsultasi personal dengan mentor berpengalaman
          </p>
        </div>
      </div>
    </section>
  );
}
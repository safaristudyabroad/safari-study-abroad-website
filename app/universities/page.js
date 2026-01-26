"use client";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartBar,
  FaUserShield,
  FaStethoscope,
  FaPalette,
  FaMicroscope,
} from "react-icons/fa";

export default function UniversityGallery() {
  const universities = [
    {
      name: "East Mediterranean University",
      abbr: "EMU - Gazimağusa",
      link: "https://www.emu.edu.tr",
      image: "/emu-campus.webp",
      tuition: "$3,500 - $12,000",
      scholarship: "50% - 100%",
    },
    {
      name: "Final International University",
      abbr: "FIU - Kyrenia",
      link: "https://www.final.edu.tr",
      image: "/fiu-campus.jpg",
      tuition: "$2,800 - $8,000",
      scholarship: "Up to 100%",
    },
    {
      name: "Near East University",
      abbr: "NEU - Lefkoşa",
      link: "https://neu.edu.tr",
      image: "/neu-campus.png",
      tuition: "$3,000 - $14,000",
      scholarship: "Up to 75%",
    },
    {
      name: "Cyprus International University",
      abbr: "CIU - Lefkoşa",
      link: "https://www.ciu.edu.tr",
      image: "/ciu-campus.png",
      tuition: "$2,500 - $9,500",
      scholarship: "50% - 100%",
    },
    {
      name: "Girne American University",
      abbr: "GAU - Kyrenia",
      link: "https://www.gau.edu.tr",
      image: "/gau-campus.png",
      tuition: "$3,200 - $7,500",
      scholarship: "Up to 70%",
    },
    {
      name: "University of Kyrenia",
      abbr: "KU - Kyrenia",
      link: "https://kyrenia.edu.tr/?lang=en",
      image: "/uok-campus.jpg",
      tuition: "$2,200 - $6,000",
      scholarship: "Up to 100%",
    },
  ];

  const programs = [
    {
      name: "Computer Engineering",
      icon: <FaLaptopCode />,
      desc: "Focus on AI, Software, and Robotics.",
    },
    {
      name: "Business Administration",
      icon: <FaChartBar />,
      desc: "Global management and entrepreneurship.",
    },
    {
      name: "International Law",
      icon: <FaUserShield />,
      desc: "European and International legal frameworks.",
    },
    {
      name: "Medicine & Health",
      icon: <FaStethoscope />,
      desc: "Hands-on clinical training and research.",
    },
    {
      name: "Architecture & Design",
      icon: <FaPalette />,
      desc: "Creative spatial planning and sustainability.",
    },
    {
      name: "Engineering & Science",
      icon: <FaMicroscope />,
      desc: "Advanced research in mechanical and natural sciences.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gray-200 min-h-screen">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            World-Class <span className="text-[#417E64]">Universities</span> in
            Northern Cyprus
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore internationally accredited institutions offering diverse
            English-taught programs with significant financial support.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 justify-items-center">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="h-[30rem] w-full flex items-center justify-center"
            >
              <PinContainer title={uni.abbr} href={uni.link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[24rem] bg-white rounded-xl border border-gray-100 shadow-sm relative">
                  {/* Scholarship Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md z-20 shadow-md">
                    {uni.scholarship} SCHOLARSHIP
                  </div>

                  {/* University Name - Constrained to 50% width to prevent badge overlap */}
                  <h3 className="w-[55%] !m-0 font-bold text-base text-black leading-tight min-h-[40px]">
                    {uni.name}
                  </h3>

                  <div className="text-[11px] !m-0 !p-0 font-medium text-gray-500 mb-2 mt-1">
                    {uni.abbr.split(" - ")[1]} •{" "}
                    <span className="text-[#417E64] font-bold">
                      Tuition: {uni.tuition}/yr
                    </span>
                  </div>

                  <div className="flex flex-1 w-full rounded-lg overflow-hidden relative border border-gray-100">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />

                    <div className="absolute bottom-2 left-2 z-20 text-white text-[10px] font-semibold opacity-90">
                      Recognized by YÖK & UNESCO
                    </div>
                  </div>

                  <div className="w-full h-1 bg-red-600 mt-3 rounded-full opacity-80" />
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Programs Section remains same */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-black mb-4 uppercase tracking-tight">
              Popular <span className="text-[#417E64]">Programs</span>
            </h2>
            <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative flex items-center p-6 bg-gray-50 rounded-2xl border-l-8 border-[#417E64] hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-inner flex items-center justify-center text-[#417E64] group-hover:text-red-600 transition-colors duration-300 text-3xl">
                  {program.icon}
                </div>
                <div className="ml-6 text-left">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#417E64] transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{program.desc}</p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-6xl rotate-12">{program.icon}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

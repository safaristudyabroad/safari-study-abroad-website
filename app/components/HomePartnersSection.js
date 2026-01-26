"use client";
import Link from "next/link";
import React from "react";
import {
  FaClipboardList,
  FaFileContract,
  FaPassport,
  FaPlaneArrival,
  FaWhatsapp,
  FaArrowRight,
  FaUniversity,
  FaGraduationCap,
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaBalanceScale,
  FaStethoscope,
  FaDraftingCompass,
  FaHotel,
} from "react-icons/fa";

const HomePartnersSection = () => {
  const steps = [
    {
      num: 1,
      title: "Submit Your Application",
      desc: "Fill out our simple form with your academic details and program preferences. No application fees required.",
      icon: <FaClipboardList />,
      color: "border-emerald-700 text-emerald-700",
    },
    {
      num: 2,
      title: "Get Your Acceptance Letter",
      desc: "Receive your university acceptance within 2 weeks. We handle all communication with your chosen institution.",
      icon: <FaFileContract />,
      color: "border-green-500 text-green-500",
    },
    {
      num: 3,
      title: "Visa Processing",
      desc: "We guide you through the student permit process step by step. 98% visa success rate with our support.",
      icon: <FaPassport />,
      color: "border-orange-500 text-orange-500",
    },
    {
      num: 4,
      title: "Arrival & Orientation",
      desc: "Free airport pickup, accommodation assistance, and campus orientation. We're with you every step of the way.",
      icon: <FaPlaneArrival />,
      color: "border-red-500 text-red-500",
    },
  ];

  const universities = [
    {
      name: "Eastern Mediterranean University",
      abbr: "EMU - Gazimağusa",
      color: "bg-emerald-800",
      points: [
        "YÖK & UNESCO Recognized",
        "100+ English Programs",
        "From $3,500/year",
        "Scholarships Available",
      ],
    },
    {
      name: "Near East University",
      abbr: "NEU - Lefkoşa",
      color: "bg-orange-400",
      points: [
        "International Accreditation",
        "Engineering & Medicine Focus",
        "From $4,000/year",
        "Merit-Based Scholarships",
      ],
    },
    {
      name: "Girne American University",
      abbr: "GAU - Girne",
      color: "bg-red-700",
      points: [
        "American-Style Education",
        "Business & Law Programs",
        "From $3,200/year",
        "Up to 75% Scholarships",
      ],
    },
  ];

  const programs = [
    {
      name: "Computer Engineering",
      icon: <FaLaptopCode />,
      bg: "bg-emerald-600",
    },
    {
      name: "Business Administration",
      icon: <FaBriefcase />,
      bg: "bg-blue-600",
    },
    {
      name: "International Law",
      icon: <FaBalanceScale />,
      bg: "bg-purple-600",
    },
    {
      name: "Medicine & Health Sciences",
      icon: <FaStethoscope />,
      bg: "bg-red-600",
    },
    {
      name: "Architecture & Design",
      icon: <FaDraftingCompass />,
      bg: "bg-orange-600",
    },
    { name: "Tourism & Hospitality", icon: <FaHotel />, bg: "bg-teal-600" },
  ];

  return (
    <div className="w-full">
      {/* --- PART 1: THE JOURNEY --- */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Your Journey to Northern Cyprus in 4 Simple Steps
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            From application to arrival, we handle everything - making your
            transition seamless and stress-free
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white p-8 rounded-2xl border-t-4 transition-all duration-300 hover:shadow-2xl group flex flex-col items-center shadow-sm"
                style={{
                  borderColor: step.color.split(" ")[0].replace("border-", ""),
                }}
              >
                {/* Number Bubble */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-4"
                  style={{
                    backgroundColor: step.color.includes("emerald")
                      ? "#047857"
                      : step.color.includes("green")
                        ? "#22c55e"
                        : step.color.includes("orange")
                          ? "#f97316"
                          : "#ef4444",
                  }}
                >
                  {step.num}
                </div>

                {/* Icon Bubble */}
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <div className={`text-3xl ${step.color.split(" ")[1]}`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-bold text-black mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient CTA */}
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="mb-8 opacity-90 max-w-xl mx-auto text-sm md:text-base">
              Join thousands of successful students who trusted Safari Study
              Abroad with their education dreams
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-white text-emerald-900 px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors cursor-pointer">
                  Start Now <FaArrowRight />
                </button>
              </Link>
              <a
                href={`https://wa.me/254706487275?text=${encodeURIComponent("Hello! I'm interested in studying in Northern Cyprus.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors cursor-pointer"
              >
                <FaWhatsapp size={20} />
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- PART 2: PARTNERS & PROGRAMS --- */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Partner Universities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Study at internationally accredited institutions offering
              world-class programs in English
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {universities.map((uni, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg group hover:scale-105 duration-300"
              >
                {/* Top Section */}
                <div
                  className={`${uni.color} p-8 text-center text-white relative`}
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <FaUniversity className="text-gray-800 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {uni.name}
                  </h3>
                  <p className="text-sm opacity-80 mt-1 uppercase tracking-widest">
                    {uni.abbr}
                  </p>
                </div>
                {/* Bottom Section */}
                <div className="bg-white p-8 space-y-4">
                  {uni.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Popular Programs Sub-section */}
          <div className="bg-emerald-100/50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-8">
              Popular Programs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {programs.map((prog, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl flex items-center gap-4 shadow-sm border border-emerald-100 hover:border-emerald-400 transition-colors cursor-default"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${prog.bg}`}
                  >
                    <span className="text-white text-2xl">{prog.icon}</span>
                  </div>
                  <span className="font-bold text-gray-800 text-sm">
                    {prog.name}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/universities">
              <button className="inline-flex items-center gap-2 bg-emerald-800 text-white px-10 py-4 rounded-lg font-bold hover:bg-emerald-900 transition-all shadow-lg hover:translate-x-1 cursor-pointer">
                Explore All Universities and Programs <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePartnersSection;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUniversity,
  FaFileSignature,
  FaIdCard,
  FaGraduationCap,
  FaChevronDown,
  FaCheckCircle,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const Admissions = () => {
  const universities = [
    {
      name: "Final International University",
      abbr: "FIU",
      specifics:
        "Requires a scanned copy of the high school diploma translated to English or Turkish. FIU offers an internal English Proficiency Exam if you lack IELTS/TOEFL.",
      portal: "https://www.final.edu.tr/apply",
    },
    {
      name: "East Mediterranean University",
      abbr: "EMU",
      specifics:
        "Requires a minimum of 60% average in High School certificates. Some engineering programs may require specific math grades.",
      portal: "https://www.emu.edu.tr/apply",
    },
    {
      name: "Near East University",
      abbr: "NEU",
      specifics:
        "Accepts a wide range of international certificates. Known for rapid processing (usually 48-72 hours for an initial offer).",
      portal: "https://neu.edu.tr/apply",
    },
    {
      name: "Cyprus International University",
      abbr: "CIU",
      specifics:
        "Requires the 'CIU Application Form' and a clear passport-sized photo. Scholarship assessment is done automatically during application.",
      portal: "https://www.ciu.edu.tr/apply",
    },
    {
      name: "Girne American University",
      abbr: "GAU",
      specifics:
        "Requires a statement of purpose for Graduate programs. Undergraduate entry is based primarily on secondary school success.",
      portal: "https://www.gau.edu.tr/apply",
    },
    {
      name: "University of Kyrenia",
      abbr: "UOK",
      specifics:
        "Very flexible document submission. Original documents must be presented upon physical registration at the Registrar's office.",
      portal: "https://kyrenia.edu.tr/?lang=en",
    },
  ];

  const [selectedUni, setSelectedUni] = useState(universities[0]);
  const [isOpen, setIsOpen] = useState(false);

  const generalRequirements = [
    {
      title: "Passport",
      detail: "Bio-data page with at least 6 months validity.",
      icon: <FaIdCard />,
    },
    {
      title: "High School Results",
      detail: "WAEC, IGCSE, SAT, or National Diploma.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Transcripts",
      detail: "Semester-by-semester breakdown of grades.",
      icon: <FaFileSignature />,
    },
    {
      title: "English Proof",
      detail: "IELTS (6.0), TOEFL, or University Placement Test.",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#417E64] py-20 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
        >
          Begin Your <span className="text-red-500">Journey</span>
        </motion.h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto px-4">
          Simple, transparent, and guided admissions. Follow the steps below to
          secure your spot in one of the Mediterranean's top institutions. The
          best part? We handle everything from applications to admission
        </p>
      </section>

      {/* General Requirements - The "Save Space" Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <FaInfoCircle className="text-red-600 text-2xl" />
            <h2 className="text-2xl font-bold uppercase text-black">
              Common Requirements (All Partners)
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalRequirements.map((req, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="text-[#417E64] text-3xl mb-4">{req.icon}</div>
                <h3 className="font-bold text-lg text-black">{req.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{req.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University Selector Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-10">
            University Specific <span className="text-[#417E64]">Criteria</span>
          </h2>

          {/* Custom Dropdown */}
          <div className="relative mb-12">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full md:w-80 bg-black text-white px-6 py-4 rounded-xl font-bold flex items-center justify-between mx-auto shadow-xl hover:bg-gray-900 transition-all"
            >
              <span className="flex items-center gap-2 uppercase tracking-widest text-sm">
                <FaUniversity className="text-[#417E64]" /> {selectedUni.name}
              </span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-full md:w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden"
                >
                  {universities.map((uni, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors font-bold text-gray-700 border-b border-gray-50 last:border-0"
                      onClick={() => {
                        setSelectedUni(uni);
                        setIsOpen(false);
                      }}
                    >
                      {uni.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedUni.abbr}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-[#417E64] text-white p-10 rounded-[2rem] shadow-2xl text-left relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white text-[#417E64] p-3 rounded-xl font-black text-xl">
                    {selectedUni.abbr}
                  </div>
                  <h3 className="text-2xl font-bold">{selectedUni.name}</h3>
                </div>
                <p className="text-xl leading-relaxed font-medium mb-8">
                  "{selectedUni.specifics}"
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-black text-white px-8 py-4 rounded-xl font-black transition-all group"
                >
                  Apply to {selectedUni.abbr}{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              {/* Abstract Background Icon */}
              <FaUniversity className="absolute -bottom-10 -right-10 text-black opacity-10 text-[15rem] rotate-12" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 text-center">
        <div className="bg-black text-white max-w-5xl mx-auto p-12 rounded-[3rem] mx-4 shadow-2xl">
          <h2 className="text-3xl font-black uppercase mb-4">
            Need Help with documents?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Our team offers free document verification to ensure you meet the
            criteria before submitting your official application.
          </p>
          <Link href="/contact">
            <button className="bg-[#417E64] cursor-pointer px-10 py-4 rounded-xl font-black hover:bg-red-600 transition-all uppercase tracking-widest">
              Consult an Advisor
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

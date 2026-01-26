"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPassport,
  FaFileAlt,
  FaCheckCircle,
  FaPlaneDeparture,
  FaHeadset,
  FaInfoCircle,
  FaGlobeAfrica,
  FaGlobeAsia,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

const VisaProcess = () => {
  const [selectedRegion, setSelectedRegion] = useState("Africa");

  const steps = [
    {
      title: "Admission",
      desc: "Receive your official Acceptance Letter from the university.",
      icon: <FaFileAlt />,
    },
    {
      title: "Payment",
      desc: "Pay your initial tuition fee deposit to secure your seat.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Visa Letter",
      desc: "The university issues a 'Visa Support Letter' for your application.",
      icon: <FaPassport />,
    },
    {
      title: "Departure",
      desc: "Apply at the embassy or prepare for visa-on-arrival.",
      icon: <FaPlaneDeparture />,
    },
  ];

  const nationalityDetails = {
    Africa: {
      icon: <FaGlobeAfrica />,
      requirements: [
        "Valid International Passport",
        "Original High School Certificates",
        "University Acceptance & Support Letter",
        "Proof of Tuition Payment Receipt",
      ],
      note: "Important: Students from Nigeria and Zimbabwe require an embassy interview prior to departure. All other African nationalities are eligible for Visa-on-Arrival at Ercan Airport with valid university support documents.",
    },
    MiddleEast: {
      icon: <FaGlobe />,
      requirements: [
        "Passport copy (at least 6 months validity)",
        "Official University Acceptance Letter",
        "Tuition Fee Deposit Receipt",
        "Proof of sufficient funds for living expenses",
      ],
      note: "Most Middle Eastern nationalities, including Jordan, Lebanon, and GCC residents, are eligible for a Visa-on-Arrival. However, students from Syria and Iraq are advised to contact our experts for the latest transit visa protocols.",
    },
    Asia: {
      icon: <FaGlobeAsia />,
      requirements: [
        "Electronic Visa Pre-approval",
        "Apostilled Academic Transcripts",
        "Financial Guarantee Documents",
        "Health Insurance Certificate",
      ],
      note: "Central Asian students should ensure their university support letter is uploaded to the immigration portal 72 hours before flight.",
    },
    Other: {
      icon: <FaMapMarkerAlt />,
      requirements: [
        "Passport copy with clear pages",
        "Standard University Acceptance",
        "Accommodation Booking Confirmation",
        "Travel Insurance",
      ],
      note: "Visa requirements depend on bilateral agreements. Most international students follow the standard entry permit protocol upon arrival.",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#417E64] py-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-tight">
          Visa & Permits
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 px-4">
          Navigating the visa process is simple with Safari Study Abroad. We
          guide you through every document and embassy requirement.
        </p>
      </section>

      {/* The Global Flow (Timeline) */}
      <section className="py-20 max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wide">
          Standard <span className="text-[#417E64]">Process</span>
        </h2>

        <div className="relative">
          {/* Visible Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center transition-shadow hover:shadow-2xl"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#417E64] text-3xl shadow-inner border border-gray-100">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Step Number Badge */}
                <div className="mt-4 bg-[#417E64]/10 text-[#417E64] px-3 py-1 rounded-full text-xs font-bold">
                  STEP 0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationality Selector Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4 uppercase">
              Regional Requirements
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {Object.keys(nationalityDetails).map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                    selectedRegion === region
                      ? "bg-[#417E64] text-white shadow-xl scale-105"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#417E64]"
                  }`}
                >
                  {nationalityDetails[region].icon} {region}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border-l-[12px] border-red-600"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-black">
                    <FaFileAlt className="text-[#417E64]" /> Required Checklist
                  </h3>
                  <ul className="space-y-5">
                    {nationalityDetails[selectedRegion].requirements.map(
                      (req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-gray-700 font-medium"
                        >
                          <FaCheckCircle className="text-[#417E64] mt-1 shrink-0 text-xl" />
                          {req}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div className="bg-emerald-50 p-8 rounded-2xl flex flex-col justify-center border border-emerald-100">
                  <div className="flex items-center gap-2 text-red-600 font-black mb-4 uppercase tracking-widest text-sm">
                    <FaInfoCircle /> Crucial Information
                  </div>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    {nationalityDetails[selectedRegion].note}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
          Confused about the process?
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
          Our advisors provide 1-on-1 visa counseling for all our students to
          ensure a 100% success rate.
        </p>
        <Link href="/contact">
          <button className="bg-red-600 text-white px-12 py-5 rounded-xl font-black hover:bg-black transition-all shadow-2xl flex items-center gap-3 mx-auto uppercase tracking-wider group cursor-pointer">
            <FaHeadset size={24} className="group-hover:animate-bounce" /> Talk
            to a Visa Expert
          </button>
        </Link>
      </section>
    </div>
  );
};

export default VisaProcess;

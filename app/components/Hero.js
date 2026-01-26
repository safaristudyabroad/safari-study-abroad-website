"use client";
import Link from "next/link";
import React from "react";
import {
  FaStar,
  FaCheck,
  FaArrowRight,
  FaWhatsapp,
  FaRegClock,
} from "react-icons/fa";

const Hero = () => {
  const benefits = [
    { title: "No Language Barrier", desc: "English-taught programs" },
    { title: "Fast Processing", desc: "2-week admission turnaround" },
    { title: "Affordable Tuition", desc: "From $3,000/year" },
    { title: "Globally Recognized", desc: "International accreditation" },
  ];

  return (
    <section className="relative bg-[#417E64] min-h-screen pt-20 pb-32 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Gold Badge (Center) */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#D4AF37] text-[#417E64] px-4 py-2 rounded-full flex items-center space-x-2 font-bold text-sm uppercase tracking-wide shadow-lg">
            <FaStar className="text-[#417E64]" />
            <span className="text-white">
              Your Gateway to European Education
            </span>
          </div>
        </div>

        {/* Updated to a 12-column grid for precise width control */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content - Occupies 7/12 columns on large screens */}
          <div className="text-white space-y-8 lg:col-span-7">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Study in Northern Cyprus
                <span className="text-white/90"> Today</span>
              </h1>
              <p className="text-lg text-gray-100 max-w-xl leading-relaxed">
                Get a quality European education at Mediterranean beaches,
                recognized degrees, and living costs 60% lower than Western
                Europe and North America. Start your journey in as little as 2
                weeks.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <FaCheck className="text-white text-xs" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-none">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold flex items-center space-x-2 transition-all shadow-xl cursor-pointer hover:scale-105 duration-300">
                    <span>Get Started</span>
                    <FaArrowRight />
                  </button>
                </Link>
                <a
                  href={`https://wa.me/254706487275?text=${encodeURIComponent("Hello! I'm interested in studying in Northern Cyprus.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold flex items-center space-x-2 transition-all shadow-xl cursor-pointer hover:scale-105 duration-300 w-fit"
                >
                  <FaWhatsapp size={20} />
                  <span>Chat on Whatsapp</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <FaRegClock />
                <span>We respond to all inquiries within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Side: Image - Hidden on mobile/tablet, occupies 5/12 columns on LG */}
          <div className="relative hidden lg:flex justify-end lg:col-span-5">
            {/* Increased width from 450px to 500px */}
            <div className="relative w-full max-w-[500px]">
              {/* Main Image */}
              <img
                src="/hero.jpg"
                alt="Student in Cyprus"
                className="rounded-2xl shadow-2xl w-full h-[550px] object-cover hover:scale-105 duration-500"
              />

              {/* Top Right Card */}
              <div className="absolute -top-6 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center animate-bounce-slow">
                <h3 className="text-3xl font-bold text-green-600">98%</h3>
                <p className="text-gray-600 text-sm font-medium">
                  Visa Acceptance <br /> Rate
                </p>
              </div>

              {/* Bottom Left Card */}
              <div className="absolute -bottom-6 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
                <h3 className="text-3xl font-bold text-red-600">200+</h3>
                <p className="text-gray-600 text-sm font-medium">
                  Universities to <br /> choose from
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160C480,320,960,0,1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

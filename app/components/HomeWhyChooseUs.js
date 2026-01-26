"use client";
import React, { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaWallet,
  FaSun,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animated Counter Component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.replace(/\D/g, ""));
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  const suffix = target.replace(/[0-9]/g, "");

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold">
      {count}
      {suffix}
    </span>
  );
};

const HomeWhyChooseUs = () => {
  const features = [
    {
      title: "European Standard Education",
      desc: "Internationally accredited universities with programs recognized by YÖK, UNESCO, and across Europe, USA, and beyond.",
      icon: <FaGraduationCap size={24} />,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-800",
      iconColor: "text-emerald-800",
    },
    {
      title: "Unbeatable Cost of Living",
      desc: "Live comfortably for $400-600/month. Tuition starting from $3,000/year with scholarship opportunities available.",
      icon: <FaWallet size={24} />,
      bgColor: "bg-green-50",
      borderColor: "border-green-500",
      iconColor: "text-green-600",
    },
    {
      title: "Mediterranean Lifestyle",
      desc: "Study steps away from pristine beaches, explore ancient history, and enjoy 300+ days of sunshine annually.",
      icon: <FaSun size={24} />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-500",
      iconColor: "text-orange-600",
    },
    {
      title: "International Community",
      desc: "Join students from over 100 countries. All programs taught in English - no Turkish language requirement.",
      icon: <FaGlobeAmericas size={24} />,
      bgColor: "bg-red-50",
      borderColor: "border-red-500",
      iconColor: "text-red-600",
    },
  ];

  const stats = [
    {
      label: "Days of Sunshine",
      val: "300+",
      color: "bg-orange-100 text-orange-800",
    },
    { label: "Nationalities", val: "100+", color: "bg-blue-100 text-blue-800" },
    {
      label: "Lower Living Costs",
      val: "60%",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      label: "Extracurriculars to choose",
      val: "200+",
      color: "bg-red-100 text-red-800",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            Why Study In Northern Cyprus ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience world-class education in a Mediterranean paradise where
            quality meets affordability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {/* First Row - Dark & Light Green */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className={`${item.bgColor} border-l-[6px] ${item.borderColor} p-8 shadow-sm rounded-2xl`}
              >
                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop Only Image */}
          <div className="hidden lg:flex w-full h-[400px] justify-center items-center">
            <img
              src="/why-us-img.jpg"
              alt="Beautiful Northern Cyprus"
              className="w-9/12 h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Second Row - Orange & Red */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className={`${item.bgColor} border-l-[6px] ${item.borderColor} p-8 rounded-r-xl shadow-sm rounded-2xl`}
              >
                <div className={`${item.iconColor} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Counters Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} p-8 rounded-2xl text-center flex flex-col items-center justify-center shadow-md`}
            >
              <Counter target={stat.val} />
              <p className="font-semibold text-sm md:text-base mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;

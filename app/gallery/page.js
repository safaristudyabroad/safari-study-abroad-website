"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSearchPlus } from "react-icons/fa";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState(null);

  const filters = [
    "All",
    "Northern Cyprus",
    "FIU",
    "EMU",
    "NEU",
    "CIU",
    "GAU",
    "UOK",
    "Kyrenia",
    "Lefkoşa",
    "Gazimağusa",
  ];

  // Mock Data - Generating at least 3 images per filter category
  const images = [
    {
      id: 1,
      title: "Kyrenia Harbour",
      category: ["All", "Northern Cyprus", "Kyrenia"],
      src: "/ky-img-5.jpeg",
    },
    {
      id: 2,
      title: "Final International University (FIU)",
      category: ["All", "FIU"],
      src: "/fiu-img-1.jpeg",
    },
    {
      id: 3,
      title: "East Mediterranean University (EMU)",
      category: ["All", "EMU"],
      src: "/emu-img-1.jpeg",
    },
    {
      id: 4,
      title: "Near East University (NEU)",
      category: ["All", "NEU", "Lefkoşa"],
      src: "/neu-img-2.jpeg",
    },
    {
      id: 5,
      title: "Cyprus International University (CIU)",
      category: ["All", "CIU"],
      src: "/ciu-img-1.jpeg",
    },
    {
      id: 6,
      title: "Girne American University - Ariel View",
      category: ["All", "GAU", "Kyrenia"],
      src: "/gau-img-2.jpeg",
    },
    {
      id: 7,
      title: "University of Kyrenia (UOK)",
      category: ["All", "UOK"],
      src: "/uok-img-2.jpeg",
    },
    {
      id: 8,
      title: "Gazimağusa Walls",
      category: ["All", "Northern Cyprus", "Gazimağusa"],
      src: "bg-amber-900",
    },
    {
      id: 9,
      title: "Kyrenia Castle",
      category: ["All", "Kyrenia"],
      src: "/ky-img-7.jpeg",
    },
    {
      id: 10,
      title: "Lefkoşa Old City",
      category: ["All", "Northern Cyprus", "Lefkoşa"],
      src: "bg-stone-800",
    },
    {
      id: 11,
      title: "Final International University (FIU)",
      category: ["All", "FIU"],
      src: "/fiu-img-2.jpeg",
    },
    {
      id: 12,
      title: "East Mediterranean University (EMU)",
      category: ["All", "EMU"],
      src: "/emu-img-2.jpeg",
    },
    {
      id: 13,
      title: "Near East University (NEU)",
      category: ["All", "NEU"],
      src: "/neu-img-1.jpeg",
    },
    {
      id: 14,
      title: "Cyprus International University (CIU)",
      category: ["All", "CIU"],
      src: "/ciu-img-2.jpeg",
    },
    {
      id: 15,
      title: "Girne American University (GAU)",
      category: ["All", "GAU"],
      src: "/gau-img-5.jpeg",
    },
    {
      id: 16,
      title: "University of Kyrenia (UOK)",
      category: ["All", "UOK"],
      src: "/uok-img-1.jpeg",
    },
    {
      id: 17,
      title: "Kyrenia City",
      category: ["All", "Kyrenia"],
      src: "/ky-img-4.jpeg",
    },
    {
      id: 18,
      title: "Final International University (FIU)",
      category: ["All", "FIU"],
      src: "/fiu-img-3.jpeg",
    },
    {
      id: 19,
      title: "Lefkoşa Dereboyu",
      category: ["All", "Lefkoşa"],
      src: "bg-stone-700",
    },
    {
      id: 20,
      title: "Gazimağusa Beach",
      category: ["All", "Gazimağusa"],
      src: "bg-amber-800",
    },
    {
      id: 21,
      title: "University of Kyrenia (UOK)",
      category: ["All", "UOK"],
      src: "/uok-img-3.jpeg",
    },
    {
      id: 22,
      title: "University of Kyrenia (UOK)",
      category: ["All", "UOK"],
      src: "/uok-img-4.jpeg",
    },
    {
      id: 23,
      title: "University of Kyrenia (UOK)",
      category: ["All", "UOK"],
      src: "/uok-img-5.jpeg",
    },
    {
      id: 24,
      title: "Girne American University (GAU)",
      category: ["All", "GAU"],
      src: "/gau-img-1.jpeg",
    },
    {
      id: 25,
      title: "Girne American University (GAU)",
      category: ["All", "GAU"],
      src: "/gau-img-3.jpeg",
    },
    {
      id: 26,
      title: "Girne American University (GAU)",
      category: ["All", "GAU"],
      src: "/gau-img-4.jpeg",
    },
    {
      id: 27,
      title: "Near East University (NEU)",
      category: ["All", "NEU"],
      src: "/neu-img-3.jpeg",
    },
    {
      id: 28,
      title: "Near East University (NEU)",
      category: ["All", "NEU"],
      src: "/neu-img-4.jpeg",
    },
    {
      id: 29,
      title: "Near East University (NEU)",
      category: ["All", "NEU"],
      src: "/neu-img-5.jpeg",
    },
    {
      id: 30,
      title: "East Mediterranean University (EMU)",
      category: ["All", "EMU"],
      src: "/emu-img-3.jpeg",
    },
    {
      id: 31,
      title: "East Mediterranean University (EMU)",
      category: ["All", "EMU"],
      src: "/emu-img-4.jpeg",
    },
    {
      id: 37,
      title: "Kyrenia City",
      category: ["All", "Kyrenia", "Northern Cyprus"],
      src: "/ky-img-1.jpeg",
    },
    {
      id: 32,
      title: "Cyprus International University (CIU)",
      category: ["All", "CIU"],
      src: "/ciu-img-3.jpeg",
    },
    {
      id: 33,
      title: "Final International University (FIU)",
      category: ["All", "FIU"],
      src: "/fiu-img-4.jpeg",
    },
    {
      id: 35,
      title: "Kyrenia City",
      category: ["All", "Kyrenia", "Northern Cyprus"],
      src: "/ky-img-2.jpeg",
    },
    {
      id: 34,
      title: "Final International University (FIU)",
      category: ["All", "FIU"],
      src: "/fiu-img-5.jpeg",
    },
    {
      id: 36,
      title: "Kyrenia City",
      category: ["All", "Kyrenia", "Northern Cyprus"],
      src: "/ky-img-3.jpeg",
    },
  ];

  // Filtering Logic
  const filteredImages = images.filter((img) => img.category.includes(filter));

  // Pagination Logic
  const imagesPerPage = 9;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage,
  );
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const handleFilterChange = (f) => {
    setFilter(f);
    setCurrentPage(1); // Reset to page 1 on new filter
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase tracking-tight">
            Campus & <span className="text-[#417E64]">Life Gallery</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our world-class partner universities and
            the stunning landscapes of Northern Cyprus.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md py-6 border-b border-gray-100 mb-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all border-2 ${
                filter === f
                  ? "bg-black border-[#417E64] text-[#417E64]"
                  : "bg-white border-[#417E64] text-[#417E64] hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {currentImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImg(img)}
                className="relative h-64 rounded-2xl cursor-pointer group overflow-hidden shadow-lg border border-gray-100"
              >
                {/* Image */}
                {img.src && img.src.startsWith("/") ? (
                  <img
                    src={img.src}
                    alt={img.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#417E64] flex items-center justify-center p-6">
                    <h3 className="text-white text-xl font-black uppercase text-center">
                      {img.title}
                    </h3>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Hover Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaSearchPlus className="text-white text-4xl" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 mt-16 flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg font-bold border-2 border-[#417E64] text-[#417E64] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50 transition-colors"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg font-bold transition-all ${
                currentPage === index + 1
                  ? "bg-[#417E64] text-white shadow-md scale-110"
                  : "bg-white border-2 border-gray-100 text-gray-400 hover:border-[#417E64] hover:text-[#417E64]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg font-bold border-2 border-[#417E64] text-[#417E64] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-emerald-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-black text-3xl hover:rotate-90 transition-transform">
              <FaTimes />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl p-4 md:p-6 max-w-[90vw] max-h-[80vh]"
            >
              {selectedImg.src && selectedImg.src.startsWith("/") ? (
                <img
                  src={selectedImg.src}
                  alt={selectedImg.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              ) : (
                <div className="w-[70vw] h-[50vh] max-w-3xl bg-[#417E64] rounded-2xl flex items-center justify-center p-8">
                  <h2 className="text-white text-3xl md:text-4xl font-black uppercase text-center">
                    {selectedImg.title}
                  </h2>
                </div>
              )}

              <div className="mt-4 text-center font-black uppercase text-gray-800">
                {selectedImg.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

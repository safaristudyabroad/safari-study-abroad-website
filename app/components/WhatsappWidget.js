"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  const phoneNumber = "+254 706 487275";
  const message = "Hello! I'm interested in studying in Northern Cyprus.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppWidget;

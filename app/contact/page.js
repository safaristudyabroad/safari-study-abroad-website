"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPaperPlane,
  FaUserGraduate,
  FaTiktok,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const getEATTimestamp = () => {
  const date = new Date();

  return (
    date.toLocaleString("en-GB", {
      timeZone: "Africa/Nairobi",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) + " (EAT)"
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "University Application",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 2. Create the promise for the fetch call
    const sendData = fetch(
      "https://hook.eu1.make.com/43nob3prvl6b3w7kj34j70ad974ycayr",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Website Contact Form",
          timestamp: getEATTimestamp(),
        }),
      },
    );

    // 3. Wrap it in a toast.promise
    toast.promise(sendData, {
      loading: "Sending your message...",
      success: "Message sent successfully! We will contact you soon.",
      error: "Failed to send message. Please try again.",
    });

    try {
      await sendData;
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "University Application",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Hero Section */}
      <section className="bg-[#417E64] py-20 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight"
        >
          Connect With <span className="text-red-500">Us</span>
        </motion.h1>
        <p className="mt-4 text-lg opacity-90 max-w-xl mx-auto px-4">
          Your future in Northern Cyprus starts with a simple conversation.
          Reach out today and let's map out your academic journey.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-black text-black uppercase mb-4">
              Send a Message
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're ready to start your{" "}
              <span className="text-[#417E64] font-bold">
                university application
              </span>
              , need a{" "}
              <span className="text-[#417E64] font-bold">
                personalized consultation
              </span>
              , or simply have a few questions, our expert team is here to guide
              you every step of the way. Fill in the form below and we’ll get
              back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#417E64] focus:ring-1 focus:ring-[#417E64] outline-none transition-all"
                  placeholder="John Doe"
                  onChange={handleChange}
                  value={formData.fullName}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#417E64] focus:ring-1 focus:ring-[#417E64] outline-none transition-all"
                  placeholder="name@email.com"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="phone number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#417E64] focus:ring-1 focus:ring-[#417E64] outline-none transition-all"
                  placeholder="+254 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-black uppercase mb-2">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#417E64] outline-none bg-white transition-all appearance-none cursor-pointer"
              >
                <option>University Application</option>
                <option>Request a Consultation</option>
                <option>General Information</option>
                <option>Scholarship Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-black uppercase mb-2">
                How can we help?
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#417E64] outline-none transition-all"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white w-full py-5 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl group cursor-pointer disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Request"}
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Right Side: Contact Info & Socials */}
        <div className="flex flex-col justify-center space-y-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-black uppercase">
              Direct <span className="text-[#417E64]">Contact</span>
            </h2>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#417E64] text-xl border border-gray-100 shadow-sm">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">
                  Email Us
                </h4>
                <p className="text-xl font-black text-black">
                  info@safaristudyabroad.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#417E64] text-xl border border-gray-100 shadow-sm">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest">
                  Call or WhatsApp
                </h4>
                <p className="text-xl font-black text-black">+254 706 487275</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="font-bold text-black uppercase mb-6 tracking-widest text-sm">
              Follow our community
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/safaristudyabroad/",
                },
                {
                  icon: <FaTiktok />,
                  link: "https://www.tiktok.com/@safaristudyabroad",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-[#417E64] hover:scale-110 transition-all shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Extra: Trust Badge */}
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
            <div className="flex items-center gap-3 text-[#417E64] font-black uppercase text-sm mb-2">
              <FaUserGraduate /> Expert Guidance
            </div>
            <p className="text-gray-600 text-sm italic">
              "Our team consists of international education specialists who have
              helped thousands of students secure placements in top Northern
              Cyprus universities."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

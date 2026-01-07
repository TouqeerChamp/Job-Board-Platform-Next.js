"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- Header Section --- */}
      <section className="py-20 bg-slate-900 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-black italic">Contact <span className="text-indigo-400 text-6xl">US</span></h1>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto italic">
          Have a question or need help? Our team is always here to help.
        </p>
      </section>

      <section className="max-w-7xl mx-auto -mt-10 px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- Contact Info Cards --- */}
          {/* --- Contact Info Cards with Dark Hover --- */}
<div className="lg:col-span-1 space-y-6">
            
            {/* Card 1: Office */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-2xl cursor-default">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12">
                📍
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-white transition-colors">Hamara Office</h3>
              <p className="text-slate-500 mt-2 font-medium group-hover:text-slate-400 transition-colors">
                Gulshan-e-Iqbal, Block 13-C, Karachi, Pakistan
              </p>
            </div>
            
            {/* Card 2: Phone */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-2xl cursor-default">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-12">
                📞
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-white transition-colors">Phone Number</h3>
              <p className="text-slate-500 mt-2 font-medium group-hover:text-slate-400 transition-colors">
                +92 300 1234567
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-2xl cursor-default">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12">
                ✉️
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 group-hover:text-white transition-colors">Email Support</h3>
              <p className="text-slate-500 mt-2 font-medium group-hover:text-slate-400 transition-colors">
                support@jobportal.pk
              </p>
            </div>

          </div>

          {/* --- Contact Form --- */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-5xl">✓</div>
                <h2 className="text-3xl font-black text-slate-900">Message Received!</h2>
                <p className="text-slate-500 mt-4 text-lg">Thank you! Our team will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                    <input required type="text" placeholder="Mohammad Touqeer" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                    <input required type="email" placeholder="mohammadtouqeerpro@gmail.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                  <input required type="text" placeholder="How can I help?" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea required rows={5} placeholder="Write your question here..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all active:scale-95">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
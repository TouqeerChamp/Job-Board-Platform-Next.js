"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- Mission Section --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
             <h1 className="text-5xl font-black text-slate-900 leading-tight">
                Our aim:<br />
               <span className="text-indigo-600">Pakistan&apos;s  talent,</span> <br />
               The future of the world.
             </h1>
             <p className="text-slate-600 mt-8 text-lg leading-relaxed">

             The job portal is not just a website, but a bridge that connects Pakistan&apos;s talented youth to their dream jobs. Our focus is on AI and tech roles to help our country move forward in the digital world.             </p>
             <div className="mt-10 flex gap-10">
                <div>
                    <p className="text-3xl font-black text-slate-900">5k+</p>
                    <p className="text-slate-500 text-sm">Active Users</p>
                </div>
                <div>
                    <p className="text-3xl font-black text-slate-900">200+</p>
                    <p className="text-slate-500 text-sm">Hired Daily</p>
                </div>
             </div>
          </div>

          {/* --- Image Section Fixed --- */}
          <div className="bg-indigo-600 rounded-[3rem] h-[450px] relative overflow-hidden shadow-2xl shadow-indigo-200 group">
             <Image 
                src="/about-us.jpg" 
                alt="About Our Team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
             />

          </div>
        </div>
      </section>

{/* --- Values Section with Dark Hover --- */}
  <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900">Humari Values</h2>
            <p className="text-slate-500 mt-2 mb-16">Wo usool jo humein Pakistan ka behtreen portal banate hain.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Value Card 1 */}
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-indigo-600 group-hover:rotate-12 transition-all duration-300">
                        🎯
                    </div>
                    <h3 className="font-extrabold text-2xl mb-4 group-hover:text-white transition-colors">Transparency</h3>
                    <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                        Hum salary aur company reviews mein 100% transparency rakhte hain taake aapko sahi faisla lene mein madad mile.
                    </p>
                </div>

                {/* Value Card 2 */}
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-indigo-600 group-hover:-rotate-12 transition-all duration-300">
                        🚀
                    </div>
                    <h3 className="font-extrabold text-2xl mb-4 group-hover:text-white transition-colors">Innovation</h3>
                    <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                        Latest AI tools aur algorithms ke zariye hum job hunting ke mushkil process ko nihayat asaan banate hain.
                    </p>
                </div>

                {/* Value Card 3 */}
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-indigo-600 group-hover:rotate-12 transition-all duration-300">
                        🤝
                    </div>
                    <h3 className="font-extrabold text-2xl mb-4 group-hover:text-white transition-colors">Trust</h3>
                    <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors">
                        Pakistan ki top tech companies aur hazaroon talent ka hum par mukammal itibar hamari asli kamyabi hai.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-6 text-center">
         <div className="max-w-3xl mx-auto bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white">
            <h2 className="text-3xl md:text-4xl font-black">Your journey starts here!</h2>
            <p className="text-slate-400 mt-6 mb-10 text-lg">Thousands of people are improving their careers every day. When are you starting?</p>
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-indigo-500 transition-all">
                Join Our Community
            </button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
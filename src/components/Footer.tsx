import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Icons import karein

const Footer = () => {
  return (
    <footer className="bg-[#0A0C10] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* --- Upper Section: Newsletter / CTA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-white/5">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Let&apos;s build your <span className="text-indigo-400 text-italic underline decoration-indigo-500/30">future</span> together.</h2>
            <p className="text-slate-400 text-lg">Be part of the largest AI community in Pakistan.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all flex-1"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
              Subscribe
            </button>
          </div>
        </div>

        {/* --- Middle Section: Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              JOB<span className="text-indigo-500">BOARD</span>
            </Link>
            <p className="text-slate-500 mt-6 leading-relaxed max-w-xs">
              Connecting Pakistan&apos;s brightest minds with the world&apos;s most innovative AI companies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-8">Platform</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Find Jobs</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Companies</Link></li>
              <li><Link href="/salaries" className="hover:text-white transition-colors">Salary Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-8">Company</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

            <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-8">Social</h4>
            <div className="flex gap-4">
              {/* Github */}
              <a 
                href="https://github.com/TouqeerChamp" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/mohammed-touqeer-30a679203/" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://twitter.com/TouqeerChamp" 
                target="_blank" 
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 JobPortal. Built by <span className="text-white font-bold underline decoration-indigo-500 underline-offset-4">Mohammad Touqeer</span>.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
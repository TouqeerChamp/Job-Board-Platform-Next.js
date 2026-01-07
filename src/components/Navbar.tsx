"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover Effect Classes
  const navLinkStyles = "relative font-semibold text-slate-600 transition-all duration-300 hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-indigo-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={`sticky top-0 z-[100] w-full transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-white py-6'
    }`}>
      <div className='max-w-7xl mx-auto px-6 flex justify-between items-center'>
        
        {/* Logo with Glow Effect */}
        <Link href="/" className='group text-2xl font-black text-slate-900 tracking-tighter'>
          <span className='text-indigo-600 group-hover:drop-shadow-[0_0_8px_rgba(79,70,229,0.5)] transition-all'>JobBoard</span> Platform
        </Link>

        {/* Desktop Links with Animated Underline */}
        <div className='hidden md:flex items-center gap-8'>
          <Link href="/" className={navLinkStyles}>Find Jobs</Link>
          <Link href="/companies" className={navLinkStyles}>Companies</Link>
          <Link href="/salaries" className={navLinkStyles}>Salaries</Link>
          <Link href="/about" className={navLinkStyles}>About</Link>
          <Link href="/contact" className={navLinkStyles}>Contact</Link>
        </div>

        {/* Action Buttons with Scale & Glow */}
        <div className='hidden md:flex items-center gap-5'>
        <button className='group relative px-6 py-2.5 font-bold text-slate-700 transition-all duration-300 hover:text-indigo-600'>
    {/* Hover par aane wala soft background */}
    <span className='absolute inset-0 w-full h-full rounded-xl bg-indigo-50 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-10'></span>
            {/* Button Text aur Icon */}
            <span className='flex items-center gap-2'>
              Login
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
            </span>
          </button>
          <button className='bg-indigo-600 text-white px-7 py-3 rounded-2xl font-bold hover:bg-indigo-700 hover:shadow-[0_10px_20px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1 active:scale-95 transition-all duration-300'>
            Post a Job
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='relative group p-2'>
            <div className='flex flex-col gap-1.5'>
              <span className={`h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-100 p-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300'>
          {['Find Jobs', 'Companies', 'Salaries', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={item === 'Find Jobs' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              onClick={() => setIsOpen(false)}
              className='block text-xl font-bold text-slate-800 hover:text-indigo-600 transition-all'
            >
              {item}
            </Link>
          ))}
          <div className='pt-6 border-t border-slate-100 flex flex-col gap-4'>
            <button className='w-full py-4 text-slate-700 font-bold text-lg'>Login</button>
            <button className='w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-100'>Post a Job</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
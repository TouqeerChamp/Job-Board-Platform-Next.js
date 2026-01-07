"use client";
import React, { useState } from 'react'; // useState add kiya
import { useParams } from 'next/navigation';
import { jobs } from "@/data/jobs"; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JobDetails = () => {
  const params = useParams();
  const id = params.id; 

  // Modal ki states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const job = jobs.find((j) => j.slug === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Job Not Found!</h1>
      </div>
    );
  }

  // Form submit handle karne ka function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // 3 second baad modal khud band ho jaye
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          
          <div className="border-b border-slate-100 pb-8">
            <h1 className="text-4xl font-extrabold text-slate-900">{job.title}</h1>
            <div className="flex gap-4 mt-4 items-center">
              <p className='text-xl text-indigo-600 font-semibold'>{job.company}</p>
              <span className="text-slate-300">|</span>
              <p className='text-slate-500 font-medium'>{job.location}</p>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                {job.type}
              </span>
            </div>
          </div>

          <div className='mt-10'>
            <h2 className='text-2xl font-bold text-slate-900'>About the Role</h2>
            <p className='text-slate-600 mt-4 leading-relaxed text-lg'>{job.desc}</p>
          </div>

          <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Requirements & Skills:</h3>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button - Clicking this opens the modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-12 bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-700 w-full transition-all shadow-lg shadow-indigo-100"
          >
            Apply Now
          </button>

        </div>
      </div>

      {/* --- FORM MODAL SECTION --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay background */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Box */}
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl relative z-10 animate-in fade-in zoom-in duration-300">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-slate-900">Apply for this Position</h2>
                <p className="text-slate-500 mt-1 mb-6">Enter your details to send your application to {job.company}.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input required type="text" placeholder="Mohammad Tauqeer" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input required type="email" placeholder="mohammadtauqeerpro@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Cover Letter / Message</label>
                    <textarea rows={4} placeholder="Tell us why you are a good fit..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-all resize-none"></textarea>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all">Cancel</button>
                    <button type="submit" className="flex-[2] bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">Submit Application</button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl animate-bounce">
                  ✓
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Application Sent!</h2>
                <p className="text-slate-600 mt-3">Thanks for applying, Your application has been successfully sent to the team.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default JobDetails;
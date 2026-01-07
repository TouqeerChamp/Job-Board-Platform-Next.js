"use client";

import { useState } from "react";
import { jobs } from "@/data/jobs"; // Pakka karein ke data/jobs.ts mein saari jobs hain
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logic: Direct filter (Simple aur Fast)
  const filteredJobs = jobs.filter((job) => {
    const s = searchTerm.toLowerCase().trim();
    return (
      job.title.toLowerCase().includes(s) ||
      job.company.toLowerCase().includes(s) ||
      job.location.toLowerCase().includes(s)
    );
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Search connect karne ke liye props */}
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            {searchTerm ? `Search Results for "${searchTerm}"` : "Latest Job Openings"}
          </h2>
          <span className="text-slate-500 font-medium">
            {filteredJobs.length} Jobs Found
          </span>
        </div>
        
        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard key={`${job.slug}-${index}-${searchTerm}`} {...job} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
               <p className="text-slate-500 text-xl font-medium">Bhai, is naam ki koi job nahi mili! 😅</p>
               <button 
                 onClick={() => setSearchTerm("")}
                 className="mt-4 text-indigo-600 font-bold underline"
               >
                 Clear Search
               </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
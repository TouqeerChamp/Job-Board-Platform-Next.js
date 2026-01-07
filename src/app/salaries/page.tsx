"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const salaryData = [
    { role: "AI Prompt Engineer", avg: "200k - 400k", level: "Specialist", trend: "+25%", color: "bg-purple-600" },
    { role: "Frontend Developer", avg: "150k - 280k", level: "Mid-Level", trend: "+12%", color: "bg-blue-500" },
    { role: "MERN Stack Developer", avg: "180k - 350k", level: "Senior", trend: "+18%", color: "bg-indigo-500" },
    { role: "UI/UX Designer", avg: "120k - 220k", level: "Intermediate", trend: "+8%", color: "bg-pink-500" },
    { role: "Backend Engineer", avg: "160k - 320k", level: "Senior", trend: "+15%", color: "bg-slate-800" },
    { role: "Mobile App Developer", avg: "170k - 300k", level: "Mid-Level", trend: "+10%", color: "bg-green-500" },
    { role: "Data Scientist", avg: "200k - 450k", level: "Senior", trend: "+20%", color: "bg-yellow-600" },
    { role: "DevOps Engineer", avg: "180k - 320k", level: "Mid-Level", trend: "+14%", color: "bg-red-500" },
    { role: "Cyber Security", avg: "190k - 380k", level: "Specialist", trend: "+22%", color: "bg-cyan-600" },
    { role: "QA Engineer", avg: "90k - 180k", level: "Junior", trend: "+5%", color: "bg-orange-500" },
    { role: "Machine Learning Eng", avg: "250k - 500k", level: "Senior", trend: "+30%", color: "bg-rose-600" },
    { role: "Product Manager", avg: "150k - 300k", level: "Mid-Level", trend: "+10%", color: "bg-teal-500" },
    { role: "Content AI Writer", avg: "60k - 120k", level: "Junior", trend: "+15%", color: "bg-emerald-500" },
    { role: "SEO Specialist", avg: "80k - 150k", level: "Mid-Level", trend: "+7%", color: "bg-violet-500" },
    { role: "Cloud Architect", avg: "300k - 600k", level: "Expert", trend: "+28%", color: "bg-blue-800" },
    { role: "Game Developer", avg: "140k - 260k", level: "Mid-Level", trend: "+11%", color: "bg-amber-600" },
    { role: "NLP Engineer", avg: "220k - 450k", level: "Senior", trend: "+24%", color: "bg-lime-600" },
    { role: "Business Analyst", avg: "110k - 210k", level: "Mid-Level", trend: "+9%", color: "bg-sky-500" },
    { role: "IT Support", avg: "50k - 100k", level: "Entry", trend: "+4%", color: "bg-gray-500" },
    { role: "Full Stack Dev", avg: "170k - 350k", level: "Mid-Level", trend: "+16%", color: "bg-indigo-700" }
];

export default function Salaries() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- Header Section --- */}
      <section className="py-20 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
            Market Insights 2024
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6">
            Tech <span className="text-indigo-600">Salary Guide</span> Pakistan
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            We have analyzed the data of Pakistan&apos;s top 500+ companies so that you can know the true market rate.
          </p>
        </div>
      </section>

      {/* --- Salary Cards Grid with Dark Hover --- */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {salaryData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm transition-all duration-300 group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg transition-all group-hover:rotate-12`}>
                  {item.role[0]}
                </div>
                <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-all">
                  {item.trend} ↑
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-white transition-colors duration-300">
                {item.role}
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6 group-hover:text-slate-400">
                {item.level} • Monthly Base
              </p>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-50 group-hover:bg-white/5 transition-colors duration-300">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 group-hover:text-indigo-400">Average Salary Range</p>
                <p className="text-2xl font-black text-slate-900 group-hover:text-white">{item.avg}</p>
                <p className="text-xs text-indigo-600 font-bold mt-2 group-hover:text-indigo-400">PKR / Per Month</p>
              </div>

              <button className="w-full mt-6 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 group-hover:border-transparent group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                Full Report
              </button>
            </div>
          ))}
        </div>

        {/* --- Info Banner --- */}
        <div className="mt-16 bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="max-w-xl text-center md:text-left relative z-10">
                <h2 className="text-2xl md:text-3xl font-black">Compare your scores!</h2>
                <p className="text-slate-400 mt-2">Are you getting paid according to the market? Check it with our AI scale.</p>
            </div>
            <button className="relative z-10 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-500 transition-all whitespace-nowrap shadow-xl shadow-indigo-600/20 active:scale-95">
                Check My Salary
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies } from "@/data/companies";

export default function Companies() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* --- HERO SECTION FOR COMPANIES --- */}
      <section className="bg-slate-900 py-20 px-6 text-center relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                Work with the Best
            </span>
                <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">
                Discover Pakistan&apos;s <span className="text-indigo-400">Top Workplaces</span>
            </h1>
            <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                We&apos;ve partnered with 500+ companies to bring you the most transparent and rewarding career opportunities.
            </p>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="max-w-7xl mx-auto -mt-10 px-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Partner Companies", val: "500+" },
                { label: "Daily Applications", val: "12k+" },
                { label: "Hired Monthly", val: "1,500" },
                { label: "Avg. Satisfaction", val: "4.8/5" }
            ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 text-center">
                    <p className="text-2xl md:text-3xl font-black text-indigo-600">{stat.val}</p>
                    <p className="text-slate-500 text-xs md:text-sm font-medium mt-1 uppercase tracking-tighter">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- COMPANIES LIST --- */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h2 className="text-3xl font-black text-slate-900">Featured Companies</h2>
                <p className="text-slate-500 mt-2">Hand-picked companies with excellent work culture.</p>
            </div>
            <div className="flex gap-2">
                <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 hover:border-indigo-600 transition-all">Filter</button>
                <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">View All</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
                <div key={company.id} className="bg-white rounded-[2.5rem] p-2 shadow-sm border border-slate-100 transition-all duration-300 group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-2xl">
                <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 bg-slate-50 text-indigo-600 flex items-center justify-center text-2xl font-black rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                            {company.logo}
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-400">Industry</span>
                            <span className="text-sm font-bold text-slate-700 group-hover:text-slate-300">{company.industry}</span>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-white transition-colors">{company.name}</h3>
                    <p className="text-slate-500 mt-2 flex items-center gap-2 group-hover:text-slate-400">
                        <span className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[10px]">📍</span>
                        {company.location}, Pakistan
                    </p>
                </div>

                {/* Niche wala chota box hover par dark indigo ho jayega */}
                <div className="bg-slate-50 m-2 rounded-2xl p-4 flex justify-between items-center group-hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter group-hover:text-indigo-400">Current Openings</p>
                        <p className="text-lg font-black text-slate-800 group-hover:text-white">{company.openRoles} Jobs</p>
                    </div>
                    <button className="p-3 bg-white text-indigo-600 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 font-bold">
                        Details →
                    </button>
                </div>
            </div>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
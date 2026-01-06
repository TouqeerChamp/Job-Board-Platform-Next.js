import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";
import Footer from "@/components/Footer";


export default function Home() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Aykays",
      location: "Karachi, PK",
      type: "Full Time"
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Remote",
      type: "Contract"
    },
    {
      title: "MERN Stack Developer",
      company: "Tech Solutions",
      location: "Lahore, PK",
      type: "Full Time"
    },
    {
      title: "Next.js Specialist",
      company: "Digital Edge",
      location: "Islamabad, PK",
      type: "Remote"
    },
    {
    title: "Frontend Developer" ,
    company: "Aykays" ,
    location: "Karachi" ,
    type: "Full Time",
    },
    {
    title: "UI/UX Designer",
    company: "Creative Mind",
    location: "Lahore",
    type: "Contract",
    },
    {
    title: "Backend Engineer",
    company: "Tech Solutions",
    location: "Islamabad",
    type: "Full Time",
    },
    {
    title: "Full Stack Developer",
    company: "Tech Agency",
    location: "Lahore",
    type: "Full Time",
    },
    {
    title: "Backend Engineer",
    company: "Tech Hub",
    location: "Karachi",
    type: "Full Time",
    },
    {
    title: "AI Prompt & Context Engineer",
    company: "Tech Solutions",
    location: "Karachi",
    type: "Remote",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      {/* 2. Job Listing Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Job Openings</h2>
        
        {/* 3. Grid Container (1 Row mein 2 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <JobCard 
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
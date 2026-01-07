import React from 'react'
import Link from 'next/link';

interface JobProps {
    title: string;
    company: string;
    location: string;
    type: string;
    slug: string;
  }
  
  const JobCard = ({ title, company, location, type, slug }: JobProps) => {
    return (
      <Link href={`/jobs/${slug}`}> 
        {/* Hover Effects: Background change, Scale up, and Deep Shadow */}
        <div className='p-8 bg-white border border-slate-200 rounded-[2rem] transition-all duration-300 cursor-pointer group hover:bg-slate-900 hover:border-slate-900 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.3)]'>
            
            <div className='flex items-start justify-between'>
                <div className='flex gap-5'>
                    {/* Logo Box - Changes color on hover */}
                    <div className='w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center font-black text-indigo-600 uppercase text-xl transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6'>
                    {company ? company[0] : "A"}
                    </div>
                    <div>
                        <h3 className='font-extrabold text-xl text-slate-900 group-hover:text-white transition-colors duration-300'>{title}</h3>
                        <p className='text-slate-500 font-medium group-hover:text-slate-400 transition-colors duration-300'>{company}</p>
                    </div>
                </div>
                {/* Badge - Changes to Indigo on hover */}
                <span className='bg-green-100 text-green-700 text-xs font-black px-4 py-1.5 rounded-full transition-all duration-300 group-hover:bg-indigo-500 group-hover:text-white'>
                    {type}
                </span>
            </div>

            <div className='mt-8 flex items-center justify-between'>
                <div className='flex items-center gap-2 text-slate-600 group-hover:text-slate-300 transition-colors'>
                    <span className='text-lg'>📍</span>
                    <p className='text-sm font-bold'>{location}</p>
                </div>
                
                {/* Action Text - Glow effect on hover */}
                <span className='text-sm font-black text-indigo-600 group-hover:text-indigo-400 flex items-center gap-1 transition-all'>
                    Details 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
        </div>
      </Link>
    )
  }

export default JobCard
import React from 'react'

// Interface batata hai ke card ko kya kya chahiye
interface JobProps {
    title: string;
    company: string;
    location: string;
    type: string;
  }
  
  const JobCard = ({ title, company, location, type }: JobProps) => {
    return (
      <div className='p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all cursor-pointer group'>
          <div className='flex items-start justify-between'>
              <div className='flex gap-4'>
                  <div className='w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center font-bold text-indigo-600'>
                  {company ? company[0] : "Ayskays"}{/* Company ka pehla letter */}
                  </div>
                  <div>
                      <h3 className='font-bold text-slate-900 group-hover:text-indigo-600'>{title}</h3>
                      <p className='text-sm text-slate-500'>{company}</p>
                  </div>
              </div>
              <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                  {type}
              </span>
          </div>
          <div className='mt-6 flex items-center justify-between'>
              <p className='text-sm text-slate-600 font-medium'>{location}</p>
              <button className='text-sm font-bold text-indigo-600'>Apply Now</button>
          </div>
      </div>
    )
  }

export default JobCard
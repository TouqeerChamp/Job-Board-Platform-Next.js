import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 p-12'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
            
            {/* Column 1: Brand */}
            <div className='col-span-1 md:col-span-1'>
                <div className='text-2xl font-bold text-white mb-4'>
                    Job<span className='text-indigo-400'>Board</span>
                </div>
                <p className='text-sm leading-relaxed'>
                    Connecting talent with opportunities across Pakistan. Find your dream job today.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className='text-white font-bold mb-4'>For Candidates</h4>
                <ul className='space-y-2 text-sm'>
                    <li className='hover:text-indigo-400 cursor-pointer'>Browse Jobs</li>
                    <li className='hover:text-indigo-400 cursor-pointer'>Job Alerts</li>
                    <li className='hover:text-indigo-400 cursor-pointer'>Applied Jobs</li>
                </ul>
            </div>

            {/* Column 3: For Employers */}
            <div>
                <h4 className='text-white font-bold mb-4'>For Employers</h4>
                <ul className='space-y-2 text-sm'>
                    <li className='hover:text-indigo-400 cursor-pointer'>Post a Job</li>
                    <li className='hover:text-indigo-400 cursor-pointer'>Candidate Search</li>
                    <li className='hover:text-indigo-400 cursor-pointer'>Pricing</li>
                </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h4 className='text-white font-bold mb-4'>Stay Updated</h4>
                <div className='flex gap-2'>
                    <input type="text" placeholder='Email' className='bg-slate-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 w-full' />
                    <button className='bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold'>Join</button>
                </div>
            </div>
        </div>

        <div className='max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs'>
            © 2026 Job Board Platform. Developed by Mohammad Tauqeer.
        </div>
    </footer>
  )
}

export default Footer
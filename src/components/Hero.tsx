import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <> 
      {/* 1. Hero Content Section (Is par max-width lagayi hai taake ye beech mein rahe) */}
      <div className='max-w-7xl mx-auto py-16 px-6 lg:py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          
          {/* Left Side: Content */}
          <div className='text-left'>
            <h1 className='text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight'>
              Get Your <span className='text-indigo-900'>Dream Job</span> Today
            </h1>
            <p className='text-slate-600 mt-6 text-lg'>
              Explore thousands of job opportunities from top-rated companies. Your professional journey starts here.
            </p>

            {/* Simple Search Input inside Hero */}
            <div className='mt-10 flex flex-col sm:flex-row gap-3'>
              <input 
                type="text" 
                placeholder="Search Job Title..." 
                className='flex-1 p-4 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm'
              />
              <button className='bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all'>
                Search
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className='relative w-full h-[300px] md:h-[450px]'>
            <Image 
              src="/hero.jpg" 
              alt="Job Board Hero"
              fill
              className='object-fill rounded-3xl shadow-lg'
              priority 
            />
          </div>
        </div>
      </div>

      {/* 2. Features Section (Ye ab container se bahar hai, isliye FULL WIDTH color lega) */}
      <section className='w-full py-16 my-12 bg-indigo-200'>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Find the job that fits your life Today
          </h2>
          <p className="text-indigo-600 mt-6 text-lg font-semibold italic">
            We work to bring opportunity to the seeker, to improve lives, commerce and societies in and around Pakistan.
          </p>
        </div>
      </section>

















    </>
  )
}

export default Hero
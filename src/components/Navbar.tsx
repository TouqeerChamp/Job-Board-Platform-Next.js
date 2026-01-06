const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md px-10 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            Job<span className="text-slate-900"> Board</span> Platform
          </div>
  
          {/* Menu Links */}
          <ul className="flex gap-8 text-sm font-medium text-slate-600">
            <li className="hover:text-indigo-600 cursor-pointer">Find Jobs</li>
            <li className="hover:text-indigo-600 cursor-pointer">Companies</li>
            <li className="hover:text-indigo-600 cursor-pointer">Salaries</li>
          </ul>
  
          {/* Action Button */}
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700">
            Post a Job
          </button>
        </div>
      </nav>
    )
  }
  export default Navbar
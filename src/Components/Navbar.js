import React from 'react';

function Navbar() {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="logo h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          </svg>
          <h1 className="font-mono text-2xl">OlIvEr</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-4 md:mt-0">
          <a href='#projects'>
            <button className='bg-red-600 hover:bg-blue-500 shadow-2xl mx-1 p-2 rounded-sm text-white'>
              Explore My Projects
            </button>
          </a>
          <a href='#contact'>
            <button className='bg-red-600 hover:bg-blue-500 shadow-2xl mx-1 p-2 rounded-sm text-white'>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
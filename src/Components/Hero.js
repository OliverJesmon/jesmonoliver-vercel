import React from 'react';
import Video from '../Assets/Video.mp4';
import Resume from '../Assets/myresume.pdf'
function Hero() {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center h-screen text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={Video}
        autoPlay
        loop
        muted
      />
      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="text-orange-500 text-4xl md:text-5xl lg:text-6xl opacity-90 overflow-hidden">
          Howdy, I'm Oliver Jesmon D Souza
        </div>
        <p className="font-mono text-white my-2 text-lg md:text-xl lg:text-2xl">
          Welcome to my Portfolio website
        </p>
        <a href={Resume} download>
        <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-white p-2 my-2 text-sm md:text-base lg:text-lg">
          Glimpse on my resume
        </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;

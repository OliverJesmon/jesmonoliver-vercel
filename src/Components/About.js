import React from 'react'
import Profile from '../Assets/Oliver.png';

function About() {
  const Skills=[{index:1,name:"Python"},
    {index:2,name:"Git/GitLab"},
    {index:3,name:"Tailwind"},
    {index:4,name:"Java"},
    {index:5,name:"React.js"},
    {index:6,name:"Node.js"}];
  return (
    <>
    <div className='flex flex-col w-full bg-black p-4 text-white'>
    <h1 id='about' className='text-xl font-bold hover:underline mx-4'>About Me</h1>
    <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
        <div className='text-lg text-left md:w-2/3 mx-4'>
          <p>
            Hi, I am a Computer Science undergrad from St. Joseph Engineering College.
            I'm a web developer with a passion for crafting interactive and responsive websites. 
            I enjoy solving complex problems and delivering quality projects for my clients.
          </p>
        </div>
        <div className='mt-5 md:mt-0 md:ml-5'>
          <img className='rounded h-48 w-48 md:h-64 md:w-64' src={Profile} alt="Profile" />
        </div>
      </div>
      <div className='mt-5'>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {Skills.map(item=>(
        <div key={item.index}>
          <li className="bg-sky-800 p-2 hover:bg-black hover:border hover:border-sky-800 rounded text-center">{item.name}</li>
          </div>
        
        ))}
        </ul>
        </div>
        
    </div>
    </>
  )
}

export default About
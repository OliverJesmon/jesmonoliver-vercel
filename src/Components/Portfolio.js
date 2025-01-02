import React from 'react'
import Portfolimg from '../Assets/portfol.jpg'

const Desc=[{id:1,name:"Starlight-Tracker(MajorProject)",link:"https://github.com/OliverJesmon/Starlight-tracker"},
                   {id:2,name:"Energy-consumption Monitoring",link:"/"},
                   {id:3,name:"Python Simple Online-Chat app",link:"https://github.com/OliverJesmon/python-miniproject"},
                   {id:4,name:"Portfolio Website",link:"/"}]

function Portfolio() {
  return (
    <>
    <div className='flex flex-col w-full space-5 relative h-90 p-4 bg-white text-green-700 font-mono' >
        <h1 className='text-center text-2xl'>Projects</h1>

        <div className='grid md:grid-cols-3 sm:grid-col sm:justify-center m-3 end-2 align-items-center'>
          {Desc.map(item=>(
          <div id='projects'  className='grid item relative space-y-1 mt-1 mb-2 justify-between h-80 w-60 rounded shadow-xl' key={item.id}>
            <img className='absolute rounded h-40 w-full top-0 inset-0' src={Portfolimg} alt={item.name} />
            <br></br>
            
            <div className='absolute bottom-4 inset-x-0 mt-4'>
              <a href={item.link}>
            <h2 className='text-center text-xl hover:underline'>Project {item.id}</h2>
            </a>
            <p className='text-center text-lg'>{item.name}</p>
            </div>
          </div>
          ))}
        </div>
        </div>
    </>
  )
}

export default Portfolio
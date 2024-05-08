import React, { useState } from 'react'
import myself from '../../assets/myself.webp'
const Project = () => {
  const [project, setProject] = useState([
    {
      img: 'https://via.placeholder.com/300',
      name: 'food',
      desc: 'Lorem ipsum dolor sit amet.'
    },
    {
      img: 'https://via.placeholder.com/300',
      name: 'GYM',
      desc: 'Lorem ipsum dolor sit amet.'
    },
    {
      img: 'https://via.placeholder.com/300',
      name: 'food',
      desc: 'Lorem ipsum dolor sit amet.'
    },
   
  ])
  return (
    <>
        <div id='Project' className='container mx-auto my-5'>
            <h1 className='text-center font-semibold text-4xl text-black'>Portfolio</h1>
            <div className='flex flex-wrap gap-10 my-5'>
            {
              project.map((item)=>{
                return(
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto lg:hover:scale-105 ">
              <img className="w-[20rem] h-[15rem]" src={`${item.img}`} alt="Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 capitalize text-purple-400">{item.name}</div>
                <p className="text-gray-700 text-base capitalize">{item.desc}</p>
              </div>
            </div>
                )
              })
            }
            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={myself} alt="Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Title</div>
                <p className="text-gray-700 text-base">Description goes here.</p>
              </div>
            </div> */}

            {/* <div className='w-[20rem] h-[15rem] flex flex-col border border-red-500 mx-auto' >
                <div className='w-full h-[80%]'><img src={myself} alt="" srcset="" className='w-full h-full' /></div>
                <div className='text-center font-semibold'><h1>Rajv kumar</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div> */}
            

            </div>
        </div>
    </>
  )
}

export default Project
import React from 'react'
import myself from '../../assets/myself.webp'
import { NavLink } from 'react-router-dom'
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <>
        <div id='Home' className='container  lg:h-screen h-auto mt-[5rem] lg:mt-0 mb-5  mx-auto grid place-content-center'>
            <div className='flex flex-col lg:flex-row justify-between  w-[90%] mx-auto'>
                <div className=''>
                <div className='w-[18rem] mx-auto  border-[0.3rem] border-black'>
                <img src={myself} alt="" srcset="" className='w-[18rem] h-[25rem] border-[1rem] border-transparent' />
                </div>
                </div>
                <div className='lg:w-[50%] w-[100%]  lg:my-auto my-5 py-auto text-center'>
                    <h1 className='lg:text-[2.9rem] text-[2.1rem] font-bold '>Hi, I'm <span className='text-red-500 font-semibold'>Rajiv kumar</span></h1>
                    <h2 className='text-2xl font-semibold bg-yellow-300 text-center mx-auto py-3'>Frontend & Web Developer</h2>
                    <p className='text-sm text-gray-800 my-3'>Rajiv, a frontend developer, eager to learn full-stack development, blending creativity and skill to craft dynamic digital solutions.</p>
                    <button className='mx-auto'><a href='#About' className='text-black px-3 py-2 border border-black hover:bg-black hover:text-white font-semibold capitalize'>now more</a></button>
                </div>
            </div>
        </div>

        <About/>
        <Project/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home
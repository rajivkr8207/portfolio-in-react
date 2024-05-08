import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Menu = (props) => {

    
  return (
    <>
        <div className='border text-center w-full h-screen bg-purple-400  fixed top-0 left-0 align-middle text-white'>
            <div className='flex flex-col justify-around w-full h-full'>
            <div className='absolute lg:top-[8%] top-[3%] lg:right-[10%] right-[1%] text-5xl cursor-pointer ' onClick={props.handlechange} ><IoMdClose/></div>
                <div><NavLink className="text-3xl font-semibold font-['Lobster'] tracking-wider ">Portfolio</NavLink></div>
                <div><ul className='flex flex-col gap-5 text-center text-2xl font-semibold'>
                    <li onClick={props.handlechange}><a href="#Home">Home</a></li>
                    <li onClick={props.handlechange}><a href="#About">About</a></li>
                    <li onClick={props.handlechange}><a href="#Project">Project</a></li>
                    <li onClick={props.handlechange}><a href="#Contact">Contact</a></li>
                </ul></div>
                <div className='mx-auto flex gap-5 text-3xl'>
                    <span><Link to='https://github.com/rajivkr8207'><FaGithub/></Link></span>
                    <span><Link to='https://www.facebook.com/profile.php?id=100030467592949'><FaFacebook/></Link></span>
                    <span><Link to='https://www.linkedin.com/in/rajiv-kumar-1940aa265/'><FaLinkedin/></Link></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu
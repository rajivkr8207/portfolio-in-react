import React, { useState } from 'react'


import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    
  return (
    <>
        <div className='container mx-auto my-5'>
            <div className='flex gap-5 flex-wrap'>
                            <div  className='text-center w-[20rem] mx-auto border border-black py-3'>
                                <h1 className='text-5xl mx-auto text-center'><FaPhoneAlt className='text-center mx-auto my-5' /></h1>
                                <h1 className='text-xl font-semibold'>Phone</h1>
                                <p className='mx-2 text-gray-700'>+918207838227</p>
                            </div>
                            <div  className='text-center w-[20rem] mx-auto border border-black py-3'>
                                <h1 className='text-5xl mx-auto text-center'><MdEmail className='text-center mx-auto my-5' /></h1>
                                <h1 className='text-xl font-semibold'>Email</h1>
                                <p className='mx-2 text-gray-700'>rajiv.kr0829@gmail.com</p>
                            </div>
                            <div  className='text-center w-[20rem] mx-auto border border-black py-3'>
                                <h1 className='text-5xl mx-auto text-center'><FaMapMarkerAlt className='text-center mx-auto my-5' /></h1>
                                <h1 className='text-xl font-semibold'>Location</h1>
                                <p className='mx-2 text-gray-700'>Muzaffarpur, Bihar</p>
                            </div>
               

            </div>
        </div>
        <div className='w-full backdrop-blur-lg bg-[#66339983] text-white'>
            <div className="text-center">
              <span className='text-lg my-5'>© {new Date().getFullYear()} <NavLink className=''>Portfolio</NavLink></span>
            </div>
        </div>
    </>
  )
}

export default Footer
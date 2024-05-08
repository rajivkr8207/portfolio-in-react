import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';
import Menu from './Menu';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(true)
    }
    function handlechange() {
        setToggle(false)
        
    }
  return (
    <>
        <div className='container lg:rounded-b-lg fixed top-0 lg:left-[3%] left-0 mx-auto flex lg:justify-around justify-between px-2 backdrop-blur-lg bg-[#66339983] text-white'>
            <div className=' py-auto flex justify-center align-middle' >
                <h1 className='my-auto'><NavLink to="/" className='text-3xl font-semibold pt-16 font-["Lobster"] tracking-wider'>Portfolio</NavLink></h1>
            </div>
            <div className='py-auto'>
                <button className='my-1' onClick={handleToggle}>
                    <CiMenuFries  className='text-3xl font-bold m-2'/>
                </button>
            </div>
        </div>

        {toggle ? <Menu handlechange= {handlechange}/>: null }
    </>
  )
}

export default Navbar
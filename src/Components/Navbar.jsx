



import cv from "../assets/AshishKUMAR.pdf"
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill , BsFillArrowDownCircleFill } from 'react-icons/bs';

import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const open=()=>{
    return window.open("https://drive.google.com/file/d/1ImbE5PM2eLA0NoE-fbgXnztEDrM7x_oK/view?usp=share_link,blank")
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '180px',height:"80px" }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' id="name" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' id="name" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' id="name" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' id="name" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' id="name" smooth={true} duration={500}>
            Contact
          </Link>
        </li>


<li onClick={open}   >

  <a   href={cv} download>  Resume</a>
      
             
            

</li>








      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-4xl' onClick={open}>
          {' '}
          <a href={cv} download> Resume</a>
           
          
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ashish-kumar-4097b6246/' target="_blank" 
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Ashish9431' target="_blank" 
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.ashishkumarbhushan0@gmail.com' target="_blank" 
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1WIUk-7lkbkStXdxFkNx0tMvmQAGKXOCb/view?usp=share_link' target="_blank"  download={'https://drive.google.com/file/d/1WIUk-7lkbkStXdxFkNx0tMvmQAGKXOCb/view?usp=share_link'}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={cv} download
            >
              Download Resume <BsFillArrowDownCircleFill size={30} />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
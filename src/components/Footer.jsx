import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaBuilding,FaMobile,FaFax,FaArrowUp,FaMoon,FaSun, FaFacebook,} from 'react-icons/fa'
import {Link} from 'react-scroll'
import {IoMdMail} from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

function Footer() {

  const{darkMode,toggleDarkMode} = useDarkMode();

  return (
  <>
    <footer className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-200'} flex flex-row w-full m-auto rounded-xl justify-center items-start lg:px-20 px-10 py-20 lg:gap-20 gap-10 `}>
      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='dark:text-white text-3xl font-semibold mb-3 text-left'>About Us</h1>
        <p className='dark:text-slate-200 text-justify'>Founded in 1987 to provide independent brokerages with a powerful <br></br> marketing and referral program for luxury listings</p>

        <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
          <div className='cursor-pointer hover:text-white hover:bg-red-600 bg-white rounded-xl p-3 transform hover:scale-110 transition-transform duration-300'>
            <FaFacebookF className='size-5'/>
          </div>
          <div className='cursor-pointer hover:text-white hover:bg-red-600 bg-white rounded-xl p-3 transform hover:scale-110 transition-transform duration-300'>
            <FaInstagram className='size-5'/>
          </div>
          <div className='cursor-pointer hover:text-white hover:bg-red-600 bg-white rounded-xl p-3 transform hover:scale-110 transition-transform duration-300'>
            <FaTwitter className='size-5'/>
          </div>
          <div className='cursor-pointer hover:text-white hover:bg-red-600 bg-white rounded-xl p-3 transform hover:scale-110 transition-transform duration-300'>
            <FaYoutube className='size-5'/>
          </div>
        </div>
        <h1 className='dark:text-white mt-8'>Copyright © 2006-2024 Real Estate's International Realty Affiliates LLC. All Rights Reserved.</h1>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='dark:text-white text-3xl font-semibold mb-3'>Contact Us</h1>
        <div className='flex justify-center items-center gap-3'>
          <FaBuilding className='dark:text-white size-5'/>
          <p className='dark:text-slate-200'>Will Enterprises, Business Lane 456, Metropolis, NY 10001, United States</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <FaMobile className='dark:text-white size-5'/>
          <p className='dark:text-slate-200'>+913 2457 6413</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <FaFax className='dark:text-white size-5'/>
          <p className='dark:text-slate-200'>2457 6413</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <IoMdMail className='dark:text-white size-5'/>
          <p className='dark:text-slate-200'>estate@gmail.com</p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1  className='dark:text-white text-3xl font-semibold mb-3'>Latest Properties</h1>

        <div className='flex justify-center items-center gap-4'>
          <img src={prop7} alt="" className='w-[220px] rounded-3xl p-3 transform hover:scale-110 transition-transform duration-300 ' />
          <div>
            <h1 className='text-lg dark:text-white'>Villa with amazing view</h1>
            <p className=' dark:text-orange-600 text-red-600'>$ 287.56</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <img src={prop8} alt="" className='w-[220px] rounded-3xl p-3 transform hover:scale-110 transition-transform duration-300 ' />
          <div>
            <h1 className='text-lg dark:text-white'>Amazing view from beach</h1>
            <p className=' dark:text-orange-600 text-red-600'>$ 852.43</p>
          </div>
        </div>

      </div>
    </footer>

    {/* dark mode toggle button  */}

    <div>
      <button onClick={toggleDarkMode} className='flex items-center p-4 hover:bg-black  rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
        {darkMode ? <FaMoon size={25} className='text-black hover:text-white '/> : <FaSun size={25} className='text-black hover:text-white'/>}
      </button>
    </div>

    {/* slide to top button  */}

    <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6 text-white  '/> 
      </Link>
    </div>

  </>
  )
}

export default Footer
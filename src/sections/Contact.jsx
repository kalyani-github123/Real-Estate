import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDarkMode } from '../components/DarkModeContext'

function Contact() {

  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:800,
        easing:'ease-in-sine',
        delay:100,
    })
},[])

const{darkMode,toggleDarkMode} = useDarkMode();


  return (
  <>
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <section id="contact" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto rounded-xl justify-center items-center lg:px-36 px-6 py-20 gap-10 flex flex-col` }>
        <div data-aos="zoom-in" className='bg-white dark:bg-black rounded-xl p-10 flex flex-col justify-center items-start gap-4'>
          <h1 className='text-black text-2xl font-semibold dark:text-white'>Message Us Today!</h1>
          <input type="text" placeholder='Enter your full name here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl '/>
          <input type="email" placeholder='Enter your valid email' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl '/>
          <input type="number" placeholder='Enter your valid mobile number here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl '/>
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message here....' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl '></textarea>
          <button className='bg-red-600  text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-110 transition-transform duration-300'>SEND EMAIL</button>
        </div>

        <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6 bg-white dark:bg-gray-900 rounded-xl'>
          <h1 data-aos="zoom-in" data-aos-delay="200" className='text-red-500 dark:text-white font-semibold text-[30px] '>REACH US</h1>
          <h1 data-aos="zoom-in" data-aos-delay="400" className=' dark:text-white font-semibold text-black text-[40px] leading-10'>We look forward to assisting you!   </h1>

          <p data-aos="zoom-in" data-aos-delay="600" className=' dark:text-white font-semibold text-gray-600 text-justify text-xl'>We're here to help you find your dream property or assist with any of your real estate needs. Whether you're buying, selling, renting, or just exploring your options, our team of experts is ready to provide personalized support and advice.

Feel free to get in touch with us through any of the following methods:</p>

          <button className='bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer transform hover:scale-110 transition-transform duration-300 '>SEND EMAIL</button>
        </div>
      </section>
    </div>
  </>
  )
}

export default Contact
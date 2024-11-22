import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import area1 from '../assets/images/area1.jpg'
import area2 from '../assets/images/area2.jpg'
import area3 from '../assets/images/area3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function PopularAreas() {

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
  <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
    <section className={`${darkMode ? 'dark:bg-gray-800' : 'light bg-red-100'} lg:w-[90%] w-full h-fit  m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20   `}>

      {/* top  */}
      <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center gap-8 items-center '>
        <div>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>POPULAR AREAS</h1>
          <h1 className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>Explore most <br></br>popular areas</h1>
        </div>
         
        <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area1})`}} className='h-[400px] bg-cover bg-center rounded-xl cursor-pointer transform hover:scale-150 transition-transform duration-300 '></div>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area2})`}} className='h-[400px] bg-cover bg-center rounded-xl cursor-pointer'></div>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area3})`}} className='h-[400px] bg-cover bg-center rounded-xl cursor-pointer'></div>
        </div>
        
      </div>

      {/* bottom  */}
      <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6'>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full '>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>1K+</h1>
            <h1 className='text-white'>OFFICES <br></br> WORLDWIDE</h1>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full '>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>60K</h1>
            <h1 className='text-white'>COUNTRIES &  <br></br> TERRITORIES</h1>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full '>
            <h1 className='text-black text-7xl font-semibold dark:text-white'>25,400</h1>
            <h1 className='text-white' >SALES &  <br></br> ASSOCIATES</h1>
          </div>
      </div>
    </section>
  </div>
  </>
  )
}

export default PopularAreas
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import leafImg from '../assets/image/leaf-2.png'
import { Link } from 'react-scroll'

function Navbar() {

  const [toogle, setToogle] = useState(false);

  const handleMenu = () => {
    setToogle(!toogle);
    const navDivLog = document.getElementById('nav-log');
    navDivLog.classList.toggle('hidden')
  }

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
  const scrollHandle = () => {
    if(window.scrollY > 50){
      setIsSticky(true)
    }else{
      setIsSticky(false)
    }
  }

    window.addEventListener('scroll', scrollHandle)

    return () => window.removeEventListener('scroll', scrollHandle)

  },[])

  return (
    <>
    <header>
      <nav className={`md:px-20 lg:px-35 mx-auto p-5 bg-[#032A17] flex justify-between transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 w-full z-50 border-b border-gray-500 transition-all duration-300" : ""
      }`}>
       <a href="#">
        <span className='text-white font-lobster text-xl'>IndorePlants</span>
       </a>
      <div className='gap-10 hidden md:flex'>
      <Link
        to="Home-Section"
        smooth={true}
        duration={500}
      >
      <a href="#" className='text-[#E3AF34] font-jost font-semibold'>Home</a>
      </Link>
      <Link
        to='About-Section'
        smooth={true}
        duration={500}
        >
      <a href="#" className='text-white font-jost font-semibold hover:text-[#E3AF34] transition-colors duration-300 ease-in-out'>About</a>
      </Link>
      <Link
      to='Popular-Section'
      smooth={true}
      duration={500}
      >
      <a href="#" className='text-white font-jost font-semibold hover:text-[#E3AF34] transition-colors duration-300 ease-in-out'>Popular</a>
      </Link>
      <Link
      to='Review-Section'
      smooth={true}
      duration={500}
      > 
      <a href="#" className='text-white font-jost font-semibold hover:text-[#E3AF34] transition-colors duration-300 ease-in-out'>Review</a>
      </Link>
      </div>
       <button className='md:hidden'>
        <FontAwesomeIcon className='text-xl text-white cursor-pointer' onClick={handleMenu} icon={faBarsStaggered}/>
       </button>

      <div id='nav-log' className='hidden md:hidden fixed bg-[#032A17]/90 backdrop-blur-sm inset-0 z-40'>
      <div className=' flex justify-between items-center'>
      {/* <a href="#">
        <span className='text-white font-lobster text-xl'>IndorePlants</span>
       </a> */}
       <img className='transform -translate-x-3 rotate-100 max-w-28 max-h-28' src={leafImg} alt="" />
      <button className='md:hidden'>
        <FontAwesomeIcon className='pr-5 pb-10 text-xl text-white cursor-pointer' onClick={handleMenu} icon={faXmark}/>
       </button>
      </div>
      <div className='mt-12 text-center'>
      <Link
        to="Home-Section"
        smooth={true}
        duration={500}
      >
      <a href="#" onClick={handleMenu} className='text-[#E3AF34] font-jost font-semibold m-3 mx-20 p-3 hover:bg-yellow-500 hover:text-white rounded-lg block'>Home</a>
      </Link>
      <Link
        to='About-Section'
        smooth={true}
        duration={500}
        >
      <a href="#" onClick={handleMenu} className='text-white font-jost font-semibold m-3 mx-20 p-3 hover:bg-yellow-500 rounded-lg block'>About</a>
      </Link>
      <Link
      to='Popular-Section'
      smooth={true}
      duration={500}
      >
        <a href="#" onClick={handleMenu} className='text-white font-jost font-semibold m-3 mx-20 p-3 hover:bg-yellow-500 rounded-lg block'>Popular</a>
      </Link>
      <Link
      to='Review-Section'
      smooth={true}
      duration={500}
      > 
        <a href="#" onClick={handleMenu} className='text-white font-jost font-semibold m-3 mx-20 p-3 hover:bg-yellow-500 rounded-lg block'>Review</a>
      </Link>
      </div>
      </div>
     </nav>
    </header>
    </>
    
  )
}

export default Navbar
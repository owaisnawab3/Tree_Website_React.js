import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { animateScroll as scroll } from 'react-scroll'
import { useState, useEffect } from 'react'

function ScrollUp() {

    const [showButton, setShowButton] = useState(false)
 
    useEffect(() => {
      const handleScroll = () => {
          const scrollY = window.scrollY

          setShowButton(scrollY > 100);
      }
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    },[]);

    const ScrollToUp = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: 'easeInOutQuart',
        })
    } 

  return (
    <div onClick={ScrollToUp} className={`fixed bottom-8 right-8 px-3 py-2 bg-[#E3AF34] hover:bg-[#D09B2C] text-white cursor-pointer rounded shadow-lg animate-bounce transition duration-300 hidden md:block z-50 ${
      showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <FontAwesomeIcon icon={faArrowUp}/>
    </div>
  )
}

export default ScrollUp

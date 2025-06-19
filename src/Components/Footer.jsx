import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <section id='Footer-Section' className='pt-25 bg-[#FFF6C3]'>
      <footer data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400" className='min-h-sceen'>
        <div id='Social-Icons-Container' className='flex items-center justify-center gap-4 py-2 px-10 pt-10 md:px-20 lg:px-35 mx-auto'>
        <div className='flex-grow border-t border-[#032A17]'></div> 
        <div id='Social-Icons' className='flex items-center text-[#032A17] gap-3'>    
           <FontAwesomeIcon icon={faFacebookF}/>
           <FontAwesomeIcon icon={faXTwitter}/>
           <FontAwesomeIcon icon={faInstagram}/>
           <FontAwesomeIcon icon={faLinkedinIn}/>
        </div>
        <div className='flex-grow border-t border-[#032A17]'></div> 
        </div>
      {/* <div className='flex flex-col justify-center items-center gap-8 pt-10 md:pt-15 md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-4 lg:justify-items-center lg:gap-16 md:px-20 lg:px-35 mx-auto'> */}
      <div className=' grid grid-cols-1 gap-8 md:px-20 lg:px-35 mx-auto
      sm:grid-cols-1
      md:grid-cols-2 md:justify-items-center items-center
      lg:grid-cols-4 lg:justify-items-center
      lg:flex lg:justify-between lg:justify-items-center
      pt-10 pb-10 md:pb-20'>
       <div className='flex flex-col-reverse text-[#032A17] text-center'>
       <span className='font-lobster text-3xl'>IndorePlants</span>
       <FontAwesomeIcon className='text-4xl' icon={faLeaf}/>
       </div>
       <div className='text-center md:text-start flex flex-col gap-2 pt-10 text-[#032A17]'>
        <h2 className='font-jost text-xl font-semibold'>Quick Link</h2>  
        <div className='flex flex-col gap-2 pt-2 font-jost font-light cursor-pointer'>
        <p>Plants</p>
        <p>Flowers</p>
        <p>Gerdening</p>
        <p>Seeds</p>
        <p>Shipping</p>
        </div>
        </div>
        <div className='text-center md:text-start flex flex-col gap-2 text-[#032A17]'>
        <h2 className='font-jost text-xl font-semibold'>Popular Services</h2>  
        <div className='flex flex-col gap-2 pt-2 font-jost font-light cursor-pointer'>
        <p>Tree Planting</p>
        <p>Grass Cutting</p>
        <p>Weeds Control</p>
        <p>Project</p>
        </div>
        </div>
        <div className='text-center flex flex-col gap-2 text-[#032A17]'>
        <h2 className='font-jost text-xl font-semibold'>Contact Us</h2>  
        <div className='md:text-center flex flex-col gap-2 pt-2 font-jost font-light cursor-pointer'>
        <p>{"(+92) 3352163085"}</p>
        <p>khan6awais@gmail.com</p>
        <p>Karachi, Pakistan</p>
        </div>
        </div> 
      </div>
    <div data-aos="fade-up" data-aos-delay="600" className='text-[14px] lg:hidden pb-10 text-center mx-10 font-jost font-light md:pb-10'>
        <p>Copyright &copy; 2025 Owais Nawab, All rights reserved</p>
    </div>
    <div className='hidden  lg:block text-[14px] text-center mx-10 font-jost font-light pb-10'>
        <p>Copyright &copy; 2025 Owais Nawab, All rights reserved</p>
    </div>
    </footer>
    </section>
  )
}

export default Footer

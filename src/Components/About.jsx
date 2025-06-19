import React from 'react'
import About_Img from '../assets/image/About_1.png'
import About_Img2 from '../assets/image/About_2.png'
import DecorImg from '../assets/image/Decor_img2.png'
// import DecorImg from '../assets/image/Leaf.png'


function About() {
  return (
    <main>
    <div id='About-Section' className='min-h-screen bg-[#032A17]'>
        <div className='flex justify-end'>
        <img className='w-23 md:w-36  absolute' src={DecorImg} alt="" />
        </div>
        <div id='About-Container' className=' mx-auto pt-24'>
            <div data-aos="fade-down" data-aos-duration="2000" className='text-center flex flex-col relative'>
                <h2 className='text-2xl lg:text-4xl md:text-3xl text-[#E3AF34] font-lobster'>About Us</h2>
                <p className='text-white font-jost'>Follow instruction for more</p>
            </div>
            <div id='About-Left' className='flex flex-col items-center lg:flex-row gap-4 md:px-20 lg:px-35 mx-auto pt-30'>
                <div data-aos="fade-right" id='About-Image' className='w-full lg:w-1/2 max-w-md mx-auto'>
                    <img className='w-60 h-60 md:w-1/2 lg:w-80 lg:h-80 xl:w-2/3 mx-auto w-1/2 h-auto' src={About_Img} alt="about-image" />
                </div>
                <div data-aos="fade-left" id='About-Heading' className='p-5 text-white w-full lg:w-1/2'>
                    <h4 className='text-2xl font-jost md:text-3xl lg:text-4xl'>Make your <span className='text-[#E3AF34]'> organic </span> <br/> garden</h4>
                    <p className='font-lobster pt-4 text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illum recusandae neque eos, quia nihil debitis quisquam eum nobis necessitatibus enim temporibus delectus sequi accusantium voluptatem quas perferendis! Earum, sapiente?</p>
                </div>
            </div>
            <div id='About-Right' className='flex flex-col items-center lg:flex-row-reverse gap-4 md:px-20 lg:px-35 mx-auto pt-16 pb-30'>
                <div data-aos="fade-left" id='About-Image' className='w-full lg:w-1/2 max-w-md mx-auto'>
                    <img className='w-60 h-60 md:w-1/2 lg:w-80 lg:h-80 xl:w-2/3 mx-auto w-1/2 h-auto' src={About_Img2} alt="about-image" />
                </div>
                <div data-aos="fade-right" id='About-Heading' className='p-5 text-white w-full lg:w-1/2'>
                    <h4 className='text-2xl font-jost md:text-3xl lg:text-4xl'>Come with us <br/><span className='text-[#E3AF34]'> grow up </span>your plant</h4>
                    <p className='font-lobster pt-4 text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores illum recusandae neque eos, quia nihil debitis quisquam eum nobis necessitatibus enim temporibus delectus sequi accusantium voluptatem quas perferendis! Earum, sapiente?</p>
                </div>
            </div>
        </div>
    </div>
    </main>
  )
}

export default About
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar, faStarHalfStroke,} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Popular_Img1 from '../assets/image/Popular_Img1.png'
import Popular_Img2 from '../assets/image/Popular_Img2.png'
import Popular_Img3 from '../assets/image/Popular_Img3.png'
import Popular_Img4 from '../assets/image/Popular_Img4.png'


function Popular() {
  return (
    <main>
        <div id='Popular-Section' className='min-h-screen bg-[#0F4A2C]'>
         <div id='Popular-Container' className='mx-auto pt-16 md:px-20 lg:px-30 pb-12'>
         <div data-aos="fade-down" data-aos-duration="2000" className='text-center flex flex-col'>
                <h2 className='text-2xl lg:text-4xl md:text-3xl text-[#E3AF34] font-lobster'>Your Choice Plant</h2>
                <p className='text-white font-jost'>Follow instruction for more</p>
         </div>
           <div id='Popular-Plant-Container' className=' text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-36 container w-full'>
                <div data-aos="fade-down" data-aos-delay="0" data-aos-duration="2000" id='Popular-Cart' className='bg-[#032A17] p-10 mt-24 rounded-md relative popular__card'>
                <div className='font-jost mt-24'>
                <img className='w-50 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' src={Popular_Img1} alt="Popular_img" />
                    <h5 className='italic'>Nephrolepis exaltata</h5>
                    <h1 className='text-xl'>Boston Fern</h1>
                    <div id='Popular-Star' className='text-sm text-yellow-500 mt-3'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalfStroke}/>
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    </div>
                    <div className='flex justify-between text-lg mt-4'>
                        <h4 className=''>$5</h4>
                        <FontAwesomeIcon className='cursor-pointer bg-yellow-500 p-2 rounded' icon={faCartShopping}/>
                    </div>
                </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="2000" id='Popular-Cart' className='bg-[#032A17] p-10 mt-24 rounded-md relative popular__card'>
                <div className='font-jost mt-24'>
                <img className='w-50 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' src={Popular_Img2} alt="Popular_img" />
                    <h5 className='italic'>Spathiphyllum wallisii</h5>
                    <h1 className='text-xl'>Peace Lily</h1>
                    <div id='Popular-Star' className='text-sm text-yellow-500 mt-3'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalfStroke}/>
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    </div>
                    <div className='flex justify-between text-lg mt-4'>
                        <h4 className=''>$5</h4>
                        <FontAwesomeIcon className='cursor-pointer bg-yellow-500 p-2 rounded' icon={faCartShopping}/>
                    </div>
                </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="2000" id='Popular-Cart' className='bg-[#032A17] p-10 mt-24 rounded-md relative popular__card'>
                <div className='font-jost mt-24'>
                <img className='w-50 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' src={Popular_Img3} alt="Popular_img" />
                    <h5 className='italic'>Ficus elastica</h5>
                    <h1 className='text-xl'>Rubber Plant</h1>
                    <div id='Popular-Star' className='text-sm text-yellow-500 mt-3'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalfStroke}/>
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    </div>
                    <div className='flex justify-between text-lg mt-4'>
                        <h4 className=''>$5</h4>
                        <FontAwesomeIcon className='cursor-pointer bg-yellow-500 p-2 rounded' icon={faCartShopping}/>
                    </div>
                </div>
                </div>
                <div data-aos="fade-down" data-aos-delay="600" data-aos-duration="2000" id='Popular-Cart' className='bg-[#032A17] p-10 mt-24 rounded-md relative popular__card'>
                <div className='font-jost mt-24'>
                <img className='w-50 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500' src={Popular_Img4} alt="Popular_img" />
                    <h5 className='italic'>Adenium obesum</h5>
                    <h1 className='text-xl'>Desert Rose</h1>
                    <div id='Popular-Star' className='text-sm text-yellow-500 mt-3'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStarHalfStroke}/>
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    <FontAwesomeIcon className='text-white' icon={faStarRegular} />
                    </div>
                    <div className='flex justify-between text-lg mt-4'>
                        <h4 className=''>$5</h4>
                        <FontAwesomeIcon className='cursor-pointer bg-yellow-500 p-2 rounded' icon={faCartShopping}/>
                    </div>
                </div>
                </div>
           </div> 
         </div>
        </div>
    </main>
  )
}

export default Popular
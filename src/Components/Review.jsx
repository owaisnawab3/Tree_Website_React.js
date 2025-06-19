import React from 'react'
import DecorImg from '../assets/image/Decor_img2.png'
// import DecorImg from '../assets/image/Leaf.png'
import ReviweImg1 from '../assets/image/Review_img1.png'
import ReviewImg2 from '../assets/image/Review_img2.png'
import ReviewImg3 from '../assets/image/Review_img3.png'
import ReviewImg4 from '../assets/image/Review_img4.png'
import ReviewImg5 from '../assets/image/Review_img5.png'
import ReviewImg6 from '../assets/image/Review_img6.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import {Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './custom.css';

function Review() {


  return (
    <main>
        <div id='Review-Section' className='min-h-screen bg-[#032A17] relative'>
        <img className='w-23 md:w-36  absolute' src={DecorImg} alt="" />
        <div id='Review-Container' className='md:px-20 lg:px-35 mx-auto mx-auto pt-24 px-6'>
        <div data-aos="fade-down" data-aos-duration="2000" className='text-center flex flex-col'>
                <h2 className='text-2xl lg:text-4xl md:text-3xl text-[#E3AF34] font-lobster'>Customer Review</h2>
                <p className='text-white font-jost'>Follow instruction for more</p>
         </div>
         <div id='Slider-Box' className='pt-12'>
        <Swiper navigation={true} pagination={true} autoplay={true} modules={[Pagination, Autoplay]}
        spaceBetween={20}
        grabCursor={true}
        pagination = {{clickable: true}}
        autoplay = {{
          delay: 3000,
          disableOnInteraction: false,

        }}
        breakpoints = {{
           640: {
            slidesPerView: 1,
           },
           768:{
            slidesPerView: 2,
           },
           1024:{
            slidesPerView: 3,
           }
        }}
        className="cursor-grab" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        >
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviweImg1} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviewImg2} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviewImg3} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviewImg4} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviewImg5} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mt-16 bg-[#0F4A2C] p-4 rounded text-white mb-14'>
          <ul>
            <li>
              <div className=''>
                <p className='font-lobster'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, inventore nostrum, porro suscipit beatae similique consectetur!</p>
              </div>
              <div className='flex mt-4'>
                <img className='w-12 h-12 rounded-full' src={ReviewImg6} alt="Review_Image" />
                <div className='ml-2 font-jost'>
                  <h4 className='text-yellow-500 uppercase'>John Doe</h4>
                  <h4>Designer</h4>
                </div>
                <FontAwesomeIcon className='ml-auto text-2xl' icon={faQuoteRight}/>
              </div>
            </li>
          </ul>
        </div>
        </SwiperSlide> 
        
        
        </Swiper>
        </div>
        </div>
        </div>
    </main>
  )
}

export default Review

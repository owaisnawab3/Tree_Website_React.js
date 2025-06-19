import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeaf, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faXTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import HomeImg from '../assets/image/Home.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
      });
  }, []);


  return (
    <main>
      <div id="Home-Section" className="min-h-screen bg-gradient-to-t from-[#032A17] via-[#21803A] to-[#032A17]">
        <div id="Home-Container" className="text-white flex items-center flex-col lg:flex-row md:px-20 lg:px-35 mx-auto p-5 pt-6">
            <div data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1200"
            id="Home-Left" className="flex flex-col gap-5 md:mt-6">
            <h1 className="text-4xl font-bold font-jost md:text-5xl"><span className="text-[#E3AF34]">Plants </span> make a <br/> positive <span className="text-[#E3AF34]"> impact </span> on <br/> your environment</h1>
            <p className="font-lobster text-gray-100 lg:mb-10">forem ipsum, deler all amet consectetur adipisicing elit. Distinctle fugiat
               eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur патриот!</p>
            <div className="flex flex-col gap-1.5 md:flex-row md:gap-3">
            <button className="font-jost font-medium flex justify-center items-center gap-3 bg-[#E3AF34] rounded w-full py-2 md:w-fit md:px-7 cursor-pointer hover:bg-[#B68E2A] transition-colors duration-300 ease-in-out">
                <a href="#">
                Shop Now
                </a>
            <FontAwesomeIcon icon={faLeaf}/>
            </button>
            <button className="font-jost font-medium flex justify-center items-center gap-3 border border-yellow-400 rounded w-full py-2 md:w-fit md:px-6 cursor-pointer hover:bg-[#E3AF34] transition-colors duration-300 ease-in-out">
                <a href="#">
                Know More
                </a>
            <FontAwesomeIcon icon={faRightFromBracket}/>
            </button>
            </div>
            <p className="font-lobster lg:mb-6">You will get 30 days free trial.</p>
            <div id="Social-Icons" className="text-2xl flex gap-4 lg:text-xl">
            <FontAwesomeIcon className="cursor-pointer hover:text-[#E3AF34] transition-colors duration-300 ease-in-out" icon={faSquareFacebook}/>
            <FontAwesomeIcon className="cursor-pointer hover:text-[#E3AF34] transition-colors duration-300 ease-in-out" icon={faXTwitter}/>
            <FontAwesomeIcon className="cursor-pointer hover:text-[#E3AF34] transition-colors duration-300 ease-in-out" icon={faInstagram}/>
            <FontAwesomeIcon className="cursor-pointer hover:text-[#E3AF34] transition-colors duration-300 ease-in-out" icon={faLinkedinIn}/>
            </div>
            </div>
            <div data-aos='zoom-in'
             id="Home-Right" className="mt-4 md:mt-0">
            <img className="max-w-80" src={HomeImg} alt="" />
            </div>
        </div>
      </div>
    </main>
  );
}

export default Home;

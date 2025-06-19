import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCalendarDays} from "@fortawesome/free-solid-svg-icons";

function NewsLetter() {
  return (
    <main>
      <section className='px-6 md:px-20 lg:px-35 mx-auto'>
      <div className="w-full px-6 py-4 pb-6 shadow-lg rounded-lg
                    relative z-30 -mb-14 bg-[#0F4A2C] font-jost">
      <h2 className="text-2xl font-bold text-white pb-4"><span className='text-[#E3AF34]'>Subscribe</span> to our newsletter</h2>
      <div className='flex gap-2'>
      <div className='flex gap-4 relative w-full mb-2'>
        <input type="text" placeholder='Your Email Address' className='w-full bg-white border-none outline-none p-1 md:p-3 rounded'/>
        <FontAwesomeIcon className='absolute top-3 md:top-4 right-1 md:right-6 text-orange-600' icon={faCalendarDays}/>
      </div>
      <div className='flex items-center gap-2 text-white px-3 h-12.5 rounded bg-[#032A17] cursor-pointer'>
        <a href="">Subscribe</a>
        <FontAwesomeIcon className='text-white' icon={faPaperPlane}/>
      </div>
      </div>
      </div>
      </section>
    </main>
  )
}

export default NewsLetter

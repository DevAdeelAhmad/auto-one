import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const FindUs = () => {

  const commonStyle = 'p-3 bg-orange-200 rounded-xl shadow-md hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out';
  const imageSize = 'w-[1rem] h-[1rem] md:w-full md:h-full';


  return (
    <div className="flex flex-col justify-center items-center gap-y-5 ">
        <div className="flex gap-x-3 sm:gap-x-6 md:gap-x-10">
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <FaFacebook size={25} className={`${imageSize}`} />
          </a>
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <RiInstagramFill size={25} className={`${imageSize}`} />
          </a>
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <FaYoutube size={25} className={`${imageSize}`} />
          </a>
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <FaSnapchatGhost size={25} className={`${imageSize}`} />
          </a>
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <FaTwitter size={25} className={`${imageSize}`} />
          </a>
          <a
            href="#"
            className={`${commonStyle}`}
          >
            <FaTiktok size={25} className={`${imageSize}`} />
          </a>
        </div>
      </div>
  )
}

export default FindUs
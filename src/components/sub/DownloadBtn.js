import React from "react";
import { FaApple } from "react-icons/fa6";

const DownloadBtn = () => {
  return (

    <div className="flex gap-x-2 sm:gap-x-3">
      <button className="flex items-center w-[150px] sm:w-[165px] gap-2 bg-black rounded-lg px-2 py-3 hover:shadow-md hover:shadow-primary">
        <img src="/assets/playstore.png" alt="play store icon" width={27} height={27} />
        <div className="flex flex-col items-start">
          <span className="text-white text-xs">GET IT ON</span>
          <span className="text-white text-sm md:text-base font-semibold">Google Play</span>
        </div>
      </button>
      <button className="flex items-center w-[150px] sm:w-[165px] gap-2 bg-black rounded-lg px-2 py-3 hover:shadow-md hover:shadow-primary">
        <FaApple color="white" size={30} />
        <div className="flex flex-col items-start">
          <span className="text-white text-xs">Download on the</span>
          <span className="text-white text-sm md:text-base font-semibold">Apple Store</span>
        </div>
      </button>
    </div>
  );
};

export default DownloadBtn;

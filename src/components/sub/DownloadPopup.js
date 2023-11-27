import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import DownloadBtn from "./DownloadBtn";
import Title from "./Title";
import FindUs from "./FindUs";
import { MdClose } from "react-icons/md";

const DownloadPopup = () => {
  const [render, setRender] = useState(false);

  function handlePopup() {
    setRender(!render);
  }

  return (
    <div>
      <button
        className={`flex rounded-3xl w-56 justify-evenly items-center px-6 py-3 bg-primary hover:bg-primary/80 text-white hover:text-black`}
        onClick={handlePopup}
      >
        <span>Download App Now</span>
        <MdOutlineFileDownload />
      </button>

      {render && (
        <div className={`flex items-center bg-white rounded-2xl shadow-lg z-[100] fixed top-0 left-0 h-screen`}>
          <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center h-[90%] gap-y-5 ">
            <div className="flex w-[90%] h-[50vh] lg:h-full rounded-xl lg:w-[40%] bg-[#F18F59]">
              <img src="/assets/pop1Image.png" alt="Phones" className="w-full" />
            </div>
            <div className="flex flex-col w-[90%] lg:w-[60%] h-full items-center">
              <div className="flex flex-col w-[100%] h-[70%] justify-center gap-y-5">
                <div className="flex flex-col w-[100%] items-center justify-center gap-y-5">
                  <Title title="Download Our App" />
                  <span className="text-center">
                    Stay connected and enjoy a user-friendly experience.
                  </span>
                </div>
                <div className="flex flex-col w-[100%] justify-center items-center">
                  <DownloadBtn />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-y-6">
                <hr className="border-[1px] w-[100%]" />
                <Title title="Find Us" />
                <FindUs />
              </div>
            </div>
            <button onClick={handlePopup} className="absolute top-4 right-14">
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadPopup;

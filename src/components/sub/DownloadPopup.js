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
        className={`flex rounded-3xl w-56 justify-evenly items-center px-6 py-3 bg-primary text-white font-semibold hover:shadow-md hover:shadow-primary`}
        onClick={handlePopup}
      >
        <span>Download App Now</span>
        <MdOutlineFileDownload />
      </button>

      {render && (
        <div
          className={`flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-lg z-[100] fixed top-0 left-0 !h-screen !w-screen py-5`}
        >
          <div className="flex items-center lg:items-end justify-center lg:justify-start sm:w-[40%] h-full rounded-2xl bg-primary">
            <img
              src="/assets/pop1Image.png"
              alt="Phones"
              className="!h-[80%] hidden lg:flex"
            />
            <img
              src="/assets/pop1Image1.png"
              alt=""
              className="flex lg:hidden !w-full !h-[45vh]"
            />
          </div>
          <div className="flex flex-col w-[60%] h-full justify-around">
            <div className="flex flex-col justify-center gap-y-5">
              <div className="flex flex-col items-center justify-center gap-y-5">
                <Title title="Download Our App" />
                <span className="text-center flex flex-col">
                  Stay connected and enjoy a user-
                  <span>friendly experience.</span>
                </span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <DownloadBtn />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full gap-y-2 sm:gap-y-6">
              <hr className="border-[1px] w-[100%]" />
              <Title title="Find Us" />
              <FindUs />
            </div>
          </div>
          <button onClick={handlePopup} className="absolute top-4 right-4">
            <MdClose size={35} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DownloadPopup;

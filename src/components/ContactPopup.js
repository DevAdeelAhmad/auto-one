import React from "react";
import Title from "./sub/Title";
import FindUs from "./sub/FindUs";
import { IoCloseOutline } from "react-icons/io5";
import ContactPropContent from "./sub/ContactPropContent";
import SubTitle from "./sub/SubTitle";


const ContactPopup = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[99vw] justify-center items-center !min-h-screen !h-full bg-white heroBg rounded-2xl shadow-lg z-[100] fixed top-0 left-0">
      <div className="flex items-center justify-center h-[100%] w-[90%] lg:w-[40%] bg-[#F18F59]/80">
        <img
          src="/assets/contactPopup.png"
          alt="Person"
          className="w-[70%] h-[70%]"
        />
      </div>
      <div className="flex flex-col w-[60%] h-full justify-around">
        <div className="flex flex-col w-[100%] h-[70%] justify-center items-center text-center gap-y-20">
          <Title title="For More Information Call Us Or Reach Us On WhatsApp" />

          <div className="flex w-full justify-center items-center">
            <ContactPropContent />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-7">
        <hr className="border-[1px] w-[80%]" color="orange" />
        <SubTitle title="Find Us Here" />
        <FindUs />
        </div>
      </div>
      <button className="absolute top-4 right-4">
        <IoCloseOutline size={30} />
      </button>
    </div>
  );
};

export default ContactPopup;

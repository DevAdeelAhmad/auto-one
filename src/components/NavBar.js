import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Title from "./sub/Title";
import FindUs from "./sub/FindUs";
import ContactPropContent from "./sub/ContactPropContent";
import SubTitle from "./sub/SubTitle";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [render, setRender] = useState(false);

  function handlePopup() {
    setRender(!render);
  }
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full px-7 sm:px-14 lg:px-32 py-3 rounded-b-[40px] lg:rounded-none z-50 bg-white shadow-md shadow-secondary sticky top-0">
      <div className="flex flex-row justify-between items-center w-full">
        <a href="/">
          <img
            className="w-[60px] h-[45px] lg:!w-[80px] lg:!h-[60px] cursor-pointer"
            src="/assets/logo.png"
            alt="logo"
          />
        </a>
        <span
          className="hidden 2xl:flex font-bold cursor-pointer text-xl hover:text-orange-500"
          onClick={handlePopup}
        >
          Contact Us
        </span>
      </div>
      <div className="2xl:hidden flex">
        <button className="2xl:hidden z-50" onClick={handleMenuToggle}>
          {menuOpen ? (
            <MdClose color="#E8865B" size={35} />
          ) : (
            <IoIosMenu color="#E8865B" size={35} />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="2xl:hidden absolute z-40 inset-0 h-screen flex w-full flex-col bg-secondary">
          <div className="flex items-end justify-center flex-col pt-28 w-[90%]">
            <span
              className="font-bold cursor-pointer text-xl hover:text-orange-500"
              onClick={handlePopup}
            >
              Contact Us
            </span>
          </div>
        </div>
      )}

      {render && (
        <div className="flex flex-col lg:flex-row justify-around !w-screen !h-full fixed top-0 left-0 heroBg bg-secondary lg:bg-white py-3 z-[100] ">
          <div className="flex h-[30vh] lg:h-full justify-center items-center lg:bg-secondary rounded-r-[35px]">
            <img src="/assets/contactPopup.png" alt="person" className="w-[55%] lg:w-[80%] h-[100%] lg:h-[70%] " />
          </div>
          <div className="flex flex-col justify-evenly gap-y-10 px-3 sm:px-10 lg:px-20 text-center">
            <div className="flex flex-[0.7] flex-col items-center justify-center gap-y-10">
              <Title title="For More Information Call Us Or Reach Us On WhatsApp" />
              <ContactPropContent />
            </div>
            <div className="flex flex-[0.3] flex-col items-center gap-7">
              <hr className="border-[1px] border-tertiary w-[80%]" />
              <SubTitle title="Find Us Here" />
              <FindUs />
            </div>
          </div>
          <button onClick={handlePopup} className="absolute top-4 right-4 lg:top-10 lg:right-10">
            <MdClose size={35} color="#E8865B" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

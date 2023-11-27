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
        <img
          className="w-[60px] h-[45px] lg:!w-[80px] lg:!h-[60px]"
          src="/assets/logo.png"
          alt="logo"
        />
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
            <MdClose color="black" size={35} />
          ) : (
            <IoIosMenu color="black" size={35} />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="2xl:hidden absolute z-40 inset-0 h-screen flex flex-col bg-secondary">
          <div className="flex items-end justify-center flex-col pt-28 pr-16">
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
        <div className="flex flex-col lg:flex-row w-[100vw] justify-around items-center !min-h-screen bg-white heroBg rounded-2xl shadow-lg z-[100] fixed top-0 left-0">
          <div className="flex items-center justify-center h-full lg:w-[40%] bg-primary/80">
            <img
              src="/assets/contactPopup.png"
              alt="Person"
              className=""
            />
          </div>
          <div className="flex flex-col h-full justify-around">
            <div className="flex flex-col justify-between items-center text-center px-5">
              <Title title="For More Information Call Us Or Reach Us On WhatsApp" />
              <ContactPropContent />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
              <hr className="border-[1px] w-[80%]" color="orange" />
              <SubTitle title="Find Us Here" />
              <FindUs />
            </div>
          </div>
          <button onClick={handlePopup} className="absolute top-4 right-14">
            <MdClose size={35} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

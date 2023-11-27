import React from "react";
import SubTitle from "./sub/SubTitle";
import FindUs from "./sub/FindUs";

const Footer = () => {
  const commonText = "text-xs md:text-base";

  return (
    <div className="flex flex-col w-full h-full justify-between items-center bg-[#F7EFEA]">
      <div className="flex flex-col lg:flex-row w-[80%] h-full justify-around gap-y-5 mt-5">
        <div className="flex flex-col w-full lg:w-[55%] gap-y-4 ">
          <img src="/assets/logo.png" alt="logo" width="70px" height="60px" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>
        </div>
        <div className="flex flex-wrap justify-between py-5">
          <div className="flex flex-col h-fit gap-y-4">
            <SubTitle title="Our Company" />
            <a href="#" className={`${commonText}`}>
              Home
            </a>
            <a href="#" className={`${commonText}`}>
              About Us
            </a>
            <a href="#" className={`${commonText}`}>
              Contact
            </a>
          </div>
          <div className="flex flex-col h-fit gap-y-4">
            <SubTitle title="Links" />
            <a href="#" className={`${commonText}`}>
              Facebook
            </a>
            <a href="#" className={`${commonText}`}>
              Instagram
            </a>
            <a href="#" className={`${commonText}`}>
              Youtube
            </a>
            <a href="#" className={`${commonText}`}>
              Twitter
            </a>
            <a href="#" className={`${commonText}`}>
              Tik Tok
            </a>
            <a href="#" className={`${commonText}`}>
              SnapChat
            </a>
          </div>
          <div className="flex flex-col h-fit gap-y-4">
            <SubTitle title="Policy" />
            <a href="#" className={`${commonText}`}>Privacy Policy</a>
            <a href="#" className={`${commonText}`}>Terms & Conditions</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full gap-y-5">
        <hr className="border-[1px] w-[100%]" />
        <div className="flex flex-col-reverse lg:flex-row justify-between w-[80%] items-center gap-y-4">
          <span className="text-center">© 2023 All Copyright Reserved</span>
          <FindUs />
        </div>
      </div>
    </div>
  );
};

export default Footer;

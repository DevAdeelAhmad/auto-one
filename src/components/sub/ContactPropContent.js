import React from "react";
import { ContactData } from "../../Data/Data.ts";

const ContactPropContent = () => {
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-x-4 gap-y-7">
      {ContactData.map((data) => (
        <div
          className="flex flex-col bg-orange-400 rounded-xl justify-center items-center px-2 py-3 sm:px-4 sm:py-5 gap-y-3 sm:gap-y-5 relative hover:shadow-xl cursor-default"
          key={data.title}
        >
          <data.Icon
            className="rounded-full border-[2px] border-white bg-white p-1 absolute -top-5 -left-5 z-50 "
            size={45}
            color={data.color}
          />
          <div className="flex flex-col justify-center items-center text-white">
            <span className="text-sm sm:text-xl font-bold">{data.title}</span>
            <span className="text-xs sm:text-base">{data.text}</span>
          </div>
          <div>
            <span className="text-xs sm:text-base font-semibold text-white">{data.contact}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactPropContent;

import React from "react";
import { ValueData } from "../../Data/Data.ts";
import SubTitle from "./SubTitle.js";

const ValueContentForDesktop = () => {
  return (
    <div className="flex flex-wrap w-[90%] py-10 justify-evenly gap-y-10">
      {ValueData.map((data) => (
        <div
          className='flex flex-col justify-center items-center shadow-lg rounded-2xl w-[28%] py-10 px-6 gap-y-5 hover:bg-primary/80 hover:text-white group'
          key={data.key}
        >
          <img src={data.image} alt="logo" />
          <SubTitle title={data.title} />
          <span className="text-center text-tertiary group-hover:text-white">{data.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ValueContentForDesktop;

import React from "react";
import { AimData } from "../../Data/Data.ts";
import SubTitle from "./SubTitle";

const AimContent = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      {AimData.map((data) => (
        <div className="flex items-center justify-evenly md:justify-around bg-white shadow-lg border rounded-xl mx-5 md:mx-0 py-5 md:w-[700px] md:h-[150px]">
          <img className="!w-[15%] min-h-[80px] min-w-[80px]" src={data.image} alt="logo" />
          <div className="w-[75%] flex flex-col items-start justify-center">
            <SubTitle title={data.title} />
            <span className="text-sm md:text-base">{data.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AimContent;

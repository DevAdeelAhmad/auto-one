import React from "react";
import { ValueData } from "../../Data/Data.ts";
import SubTitle from "./SubTitle.js";

import Marquee from "react-fast-marquee";

const ValeContentForMobile = () => {
  return (
    <Marquee pauseOnHover={true} className="py-5">
      {ValueData.map((data) => (
        <div
          key={data.key}
          className="flex flex-col items-center w-64 justify-center rounded-2xl !h-[250px] hover:bg-primary/80 hover:text-white shadow-[0px_2px_16px_0px_#cbd5e0] py-10 px-6 gap-y-5 mx-5"
        >
          <img src={data.image} alt="logo" />
          <SubTitle title={data.title} />
          <span className="text-center text-tertiary">{data.description}</span>
        </div>
      ))}
    </Marquee>
  );
};

export default ValeContentForMobile;

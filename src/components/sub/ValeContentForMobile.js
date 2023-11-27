import React from "react";
import { ValueData } from "../../Data/Data.ts";
import SubTitle from "./SubTitle.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ValeContentForMobile = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1.5} className="w-full !h-[40vh] flex items-center justify-center">
      {ValueData.map((data) => (
        <SwiperSlide
          key={data.key}
        >
          <div className="flex flex-col items-center justify-center rounded-lg !h-[250px] hover:bg-primary/80 hover:text-white shadow-lg py-10 px-6 gap-y-5">
            <img src={data.image} alt="logo" />
            <SubTitle title={data.title} />
            <span className="text-center text-tertiary">{data.description}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ValeContentForMobile;

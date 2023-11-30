import React from "react";
import DownloadPopup from "./sub/DownloadPopup";
import DownloadBtn from "./sub/DownloadBtn";
import "./Hero.css";

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-10 w-full min-h-[90vh] heroBg h-full'>
            <div className='flex-[0.4]'>
                <div className='flex flex-col w-full h-full lg:justify-center mt-8 lg:mt-0 items-center lg:items-start gap-y-10 lg:ml-32'>
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-3xl lg:text-5xl 2xl:text-6xl flex flex-col text-center lg:text-start font-semibold animated-text'>
                            <span>One <span className="font-bold">Platform</span></span>
                            <span> Where<span className='italic text-primary'>&nbsp;Lots&nbsp;</span>Of</span>
                            <span> Options Are There</span>
                        </h1>
                        <span className='flex flex-col text-center lg:text-start 2xl:text-lg text-tertiary'>
                            <span>Search, book, and unlock instantly, all from your </span>
                            <span>phone. Ditch the rental counter.</span>
                        </span>
                    </div>
                    <div className='flex flex-col gap-y-8 items-center lg:items-start'>
                        <DownloadPopup text="Download App Now" />
                        <DownloadBtn />
                    </div>
                </div>
            </div>

            <div className='flex flex-[0.5] justify-end'>
                <img src="/assets/heroCar.png" alt="car" className='lg:-mt-[5vh]' />
            </div>
        </div>
    );
};

export default Hero;

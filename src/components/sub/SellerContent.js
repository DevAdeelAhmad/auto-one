import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./style.min.css";
import { FaCircle } from "react-icons/fa6";
import Title from '../sub/Title'
import { SellerData } from '../../Data/Data.ts'

const SellerContent = () => {
    return (
        <section className="w-full flex flex-col gap-y-10 py-10 items-center justify-center heroBg text-center">
            <Title title='What We Offer You As A Visitor:' />
            <VerticalTimeline lineColor="#F07836" className="">
                {SellerData.map((data, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "transparent",
                            color: "#000",
                            position: "relative",
                            boxShadow: "none",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #F07836",
                        }}
                        icon={<FaCircle />}
                        iconStyle={{
                            width: "10px",
                            height: "10px",
                            marginTop: "2rem",
                            marginLeft: "-0.3rem",
                        }}
                    >
                        <div
                            className="p-2 rounded-lg border-[2px] border-black"
                            style={{
                                position: "relative",
                                zIndex: 2,
                            }}
                        >
                            <p className="rounded-lg py-5 px-3">{data}</p>
                        </div>
                        <div
                            className="half-border"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 100,
                                width: "40%",
                                height: "100%",
                                border: "4px solid #F07836",
                                borderRadius: "8px",
                                borderLeftColor: 'transparent',
                                zIndex: 1,
                                boxSizing: "border-box",
                            }}
                        ></div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default SellerContent;

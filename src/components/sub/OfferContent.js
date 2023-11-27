import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { VisitorData } from "../../Data/Data.ts";
import "./style.min.css";
import { FaCircle } from "react-icons/fa6";

const OfferContent = () => {
  return (
    <VerticalTimeline lineColor="#F07836" className="bg-orange-200">
      {VisitorData.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#000",
            border: "2px solid black",
            borderRadius: "8px",
            padding: "20px",
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
          <p>{data}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default OfferContent;

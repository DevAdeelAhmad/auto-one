import React from "react";
import "./offer.css";
import Title from "./sub/Title";

const VisitorOffer = () => {
  const leftStyle =
    "absolute top-0 left-0 md:left-[50%] md:right-0 w-1/2 h-full border-t-4 border-b-4 border-l-4 md:border-l-0 md:border-r-4 border-primary rounded-l-lg md:rounded-l-none md:rounded-r-lg";
  const rightStyle =
    "absolute top-0 left-0 w-1/2 h-full border-t-4 border-b-4 border-l-4 border-primary rounded-l-lg";

  return (
    <div className="flex flex-col text-center w-full py-10">
      <Title title="What We Offer You As a Seller " />
      <div className="wrapper">
        <div className="timeline">
          <div className="timeline--entry w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                An integrated platform with multiple tools that meet the
                seller's purposes.
              </div>
              <div className={`${rightStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                An integrated notification system.
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Statistics that give different insights.
              </div>
              <div className={`${rightStyle}`}></div>
            </div>
          </div>

          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Easiness of communication with the public.
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                An integrated profile to manage the uploaded materials.
              </div>
              <div className={`${rightStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Adopting the concept of SEO and ASO to create future beneficial
                opportunities and smart access for all interested parties.
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                A special algorithm that facilitates the arrival of uploaded
                materials according to what the visitor is looking for.
              </div>
              <div className={`${rightStyle}`}></div>
            </div>
          </div>

          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                24 hours Customer Support service
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Continuous additions that match user expectations.
              </div>
              <div className={`${rightStyle}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorOffer;

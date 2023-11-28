import React from "react";
import "./offer.css";
import Title from "./sub/Title";

const SellerOffer = () => {
  const leftStyle =
    "absolute top-0 left-0 md:left-[50%] md:right-0 w-1/2 h-full border-t-4 border-b-4 border-l-4 md:border-l-0 md:border-r-4 border-primary rounded-l-lg md:rounded-l-none md:rounded-r-lg";
  const rightStyle =
    "absolute top-0 left-0 w-1/2 h-full border-t-4 border-b-4 border-l-4 border-primary rounded-l-lg";

  return (
    <div className="flex flex-col text-center w-full bg-secondary py-10">
      <Title title="What We Offer You As A Visitor" />
      <div className="wrapper">
        <div className="timeline">
          <div className="timeline--entry w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                A comprehensive list of showrooms and dealers throughout Iraq
              </div>
              <div className={`${rightStyle}`}></div>

            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Dozens of brands and hundreds of different models of cars
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Various search methods through simple and advanced filters.
              </div>
              <div className={`${rightStyle}`}></div>

            </div>
          </div>

          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Communicating with showrooms and dealers.
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Distinctive ways to display cars that suit what the visitor is
                looking for
              </div>
              <div className={`${rightStyle}`}></div>

            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px]">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                High and stable performance
              </div>
              <div className={`${leftStyle}`}></div>
            </div>
          </div>
          <div className="timeline--entry !w-[200px] md:!w-[300px] my-2">
            <div className="relative !w-[200px] md:!w-[300px] p-[10px]">
              <div className="timeline--entry__detail timeline--entry__title">
                Continuous additions that meet the purpose and needs of the
                visitor{" "}
              </div>
              <div className={`${rightStyle}`}></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOffer;

import React from "react";
import Title from "./sub/Title";
import ValueContent from "./sub/ValueContent";

const Value = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-y-5 py-10">
      <div className="flex flex-col justify-center items-center w-[80%] lg:w-[40%] gap-y-3">
        <Title title="Our Values" />
        <span className="text-center text-tertiary">
          In Auto One we believe in values that drive our work and which are the
          foundation and the structure for our business
        </span>
      </div>
      <ValueContent />
    </div>
  );
};

export default Value;

import React from "react";

const Title = ({title}) => {
  return (
    <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
      {title}
    </h1>
  );
};

export default Title;

import React from "react";

const Title = ({title}) => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      {title}
    </h1>
  );
};

export default Title;

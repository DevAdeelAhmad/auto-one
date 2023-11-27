import React, { useEffect, useState } from "react";
import ValueContentForDesktop from "./ValueContentForDesktop.js";
import ValeContentForMobile from "./ValeContentForMobile.js";

const ValueContent = () => {
  const [layout, setLayout] = useState();

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 768) {
        setLayout(false);
      } else {
        setLayout(true);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return <>{layout ? <ValueContentForDesktop /> : <ValeContentForMobile />}</>;
};

export default ValueContent;

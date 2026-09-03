"use client";

import React, { useEffect, useState } from "react";

import SinpleToUseIcon from "../../svg/SinpleToUseIcon";
import SimplicityAtWorkIcon from "../../svg/SimplicityAtWorkIcon";
import SimpleToSetUpIcon from "../../svg/SimpleToSetUpIcon";

const listItems = [
  {
    before: "Simple to",
    icon: <SinpleToUseIcon />,
    after: "use",
  },
  {
    before: "Simplicity at",
    icon: <SimplicityAtWorkIcon />,
    after: "work",
  },
  {
    before: "Simple to",
    icon: <SimpleToSetUpIcon />,
    after: "set up",
  },
];

const CleaningBusinessList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % listItems.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const item = listItems[activeIndex];

  return (
    <div className="cleaningBusinessListWrap">
      <div className="ListWrap wordRotate" key={activeIndex}>
        <span>{item.before}</span>

        <span className="listIcon">
          {item.icon}
        </span>

        <span>{item.after}</span>
      </div>
    </div>
  );
};

export default CleaningBusinessList;
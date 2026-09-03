"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  delay = 2, 
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          key={key}
          start={0}
          end={value}
          duration={duration}
          delay={delay}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator=","
          useEasing={true}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  );
}

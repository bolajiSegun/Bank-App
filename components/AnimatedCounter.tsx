"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <CountUp end={amount} prefix="#" decimal="," />;
};

export default AnimatedCounter;

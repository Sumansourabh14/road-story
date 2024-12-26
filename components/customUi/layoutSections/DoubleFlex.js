import React from "react";

const DoubleFlex = ({ firstItem, secondItem, isReverseDirection = false }) => {
  return (
    <section
      className={`flex flex-col gap-8 md:gap-20 w-full ${
        isReverseDirection ? "sm:flex-row-reverse" : `sm:flex-row`
      } py-8 md:py-16`}
    >
      <div className="flex-1">{firstItem}</div>
      <div className="flex-1">{secondItem}</div>
    </section>
  );
};

export default DoubleFlex;

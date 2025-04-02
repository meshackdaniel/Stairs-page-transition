"use client";
import { animate } from "motion";
import { motion } from "motion/react";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  return 6 - index - 1;
};

const Stair = () => {
  return (
    <div className="w-full grid grid-cols-6">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{duration: 0.4, ease: "easeInOut", delay: reverseIndex(index) * 0.1}}
          className="bg-white w-full h-full relative"
        />
      ))}
    </div>
  );
};

export default Stair;

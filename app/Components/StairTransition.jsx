"use client";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Stair from "./Stair";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="w-screen h-screen fixed top-0 right-0 left-0 z-40 pointer-events-none flex">
          <Stair />
        </div>
        <motion.div
          className="bg-black w-screen h-screen fixed top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut"}}}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;

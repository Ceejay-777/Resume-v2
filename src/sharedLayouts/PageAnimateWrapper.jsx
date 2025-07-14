import React from "react";
import { motion } from "framer-motion";
import { slideUpVariant } from "../data";

const PageAnimateWrapper = ({ children, disableInitial = false }) => {
  return (
    <motion.div
      initial={disableInitial ? false : "initial"}
      animate="animate"
      exit="exit"
      variants={slideUpVariant}
      transition={slideUpVariant.transition}
      className="absolute top-0 left-0 w-screen min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageAnimateWrapper;

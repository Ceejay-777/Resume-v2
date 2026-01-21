import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../../hooks/context";


const GlassDisk = () => {
  const { theme } = useAppContext();

  const glassVars = {
    "--lg-bg-color": theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.01)",
    "--lg-highlight": theme === "dark" ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.8)",
  };

  return (
    <div className="flex items-center justify-center absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute z-30 pointer-events-none"
        style={glassVars}
        initial={{ x: "10vw", y: "20vh" }}
        animate={{
          x: ["10vw", "15vw", "5vw", "12vw"],
          y: ["20vh", "25vh", "15vh", "22vh"],
          rotate: [0, 5, -8, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
      >
        <div className="glass-container !pointer-events-auto !w-48 !h-48 md:!w-72 md:!h-72 shadow-2xl">
          <div className="glass-filter" />
          <div className="glass-overlay opacity-20" />

          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/5 z-10" />

          <div className="glass-specular" />

          <svg style={{ display: "none" }}>
            <filter id="lg-dist" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.012 0.012"
                numOctaves="3"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="3" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="40"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default GlassDisk;
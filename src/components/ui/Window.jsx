import { motion } from "framer-motion";
import { useState } from "react";

const Window = ({ title, children, defaultPos = { x: 0, y: 0 } }) => {
  const [zIndex, setZIndex] = useState(10);

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={() => setZIndex(50)}
      onDragEnd={() => setZIndex(20)}
      initial={{ opacity: 0, scale: 0.9, ...defaultPos }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute min-w-[350px] md:min-w-[600px] rounded-xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-md"
      style={{ zIndex }}
    >
      <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/10 cursor-grab active:cursor-grabbing">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />{" "}
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />{" "}
        </div>
        <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
          {title}
        </span>
        <div className="w-10" /> 
      </div>

      {/* Content Area */}
      <div className="p-6 bg-black/20 text-white max-h-[70vh] overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;

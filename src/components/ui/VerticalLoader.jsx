import { useEffect, useState } from "react";

const VerticalLoader = ({progress, setProgress}) => {
  useEffect(() => {
    let frame;

    const animateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 0.75;
      });

      if (progress < 100) {
        frame = requestAnimationFrame(animateProgress);
      }
    };

    frame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frame);
  }, [progress]);

  return (
    <div className="max-h-screen absolute right-0 top-0 h-screen z-50 flex items-end justify-center gap-2 ">
      <div
        className="top-0 text-7xl font-bold text-accent dark:text-dark-accent font-body italic "
        style={{
          height: `${progress}%`,
          animationTimingFunction: "ease-in-out",
        }}
      >
        {Math.round(progress)}%
      </div>
      <div
        key="loader"
        className="right-0 top-0 w-24 bg-primary dark:bg-dark-primary z-50"
        style={{
          height: `${progress}%`,
          animationTimingFunction: "ease-in-out",
          animationDuration: "5s",
        }}
      />
    </div>
  );
};

export default VerticalLoader;

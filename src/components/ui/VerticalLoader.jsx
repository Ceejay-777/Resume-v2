import { useEffect, useState } from "react";

const VerticalLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;

    const animateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });

      if (progress < 100) {
        frame = requestAnimationFrame(animateProgress);
      }
    };

    frame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(frame);
  }, [progress]);

  return (
    <div className="absolute right-0 bottom-0 h-screen z-50 flex items-end justify-center gap-2">
      <div
        className="text-7xl font-bold text-accent dark:text-dark-accent font-body italic"
        style={{
          height: `${progress}%`,
          animationTimingFunction: "ease-in-out",
        }}
      >
        {progress}%
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

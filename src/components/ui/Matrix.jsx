import React, { useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/context";

const Matrix = () => {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const intervalRef = useRef(null);

  const { theme } = useAppContext();
  const bgOpac =
    theme === "dark" ? "rgba(10, 13, 18, 0.05)" : "rgba(213, 212, 217, 0.05)";
  const bg = theme === "dark" ? "rgb(10, 13, 18)" : "rgb(245, 248, 250)";

  const latin =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  const fontSize = 16;

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.font = `${fontSize}px monospace`;
    const columns = Math.floor(canvas.width / fontSize);

    dropsRef.current = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * (window.innerHeight / fontSize))
    );
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const drops = dropsRef.current;

    context.fillStyle = bgOpac;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#00F";
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = latin.charAt(Math.floor(Math.random() * latin.length));
      context.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  useEffect(() => {
    initializeCanvas();
    intervalRef.current = setInterval(draw, 30);

    const handleResize = () => {
      initializeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen" />
  );
};

export default Matrix;

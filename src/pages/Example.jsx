import React, { useEffect, useState } from "react";

const withMousePosition = (Component) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return <Component {...props} mousePosition={mousePosition} />;
  };
};

const ShowPosition = ({ mousePosition }) => {
  if (!mousePosition) {
    return <h1>No mouse position</h1>;
  }
  return (
    <h1>
      X: {mousePosition.x}, Y: {mousePosition.y}
    </h1>
  );
};

const EnhancedShowPosition = withMousePosition(ShowPosition);

const Example = () => {
  return (
    <div className="main">
      <EnhancedShowPosition />
    </div>
  );
};

export default Example;

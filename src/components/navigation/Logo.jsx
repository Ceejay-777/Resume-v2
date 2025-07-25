import ceewhite from "../../assets/CeeLogos/BlueWhite.png";
import ceedark from "../../assets/CeeLogos/BlueBlack.png";
import { useAppContext } from "../../hooks/context";
import { useState, useEffect } from "react";

const Logo = () => {
  const [bgImage, setBgImage] = useState(ceewhite);
  const { theme } = useAppContext();

  useEffect(() => {
    setBgImage(theme === "dark" ? ceewhite : ceedark);
  }, [theme]);

  return (
    <div>
      <img src={bgImage} alt="CeeJay" className="relative w-16 rounded-2xl" />
    </div>
  );
};

export default Logo;

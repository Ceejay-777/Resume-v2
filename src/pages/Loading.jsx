import React, { useEffect, useState } from "react";
import Theme from "../components/ui/ThemeSwitch";
import VerticalLoader from "../components/ui/VerticalLoader";
import GlassDisk from "../components/ui/GlassDisk";
import space from "../assets/Project_images/space.jpg";
import Matrix from "../components/ui/Matrix";
import ceewhite from "../assets/CeeLogos/BlueWhite.png";
import ceedark from "../assets/CeeLogos/BlueBlack.png";
import { useAppContext } from "../hooks/context";

const Loading = () => {
  const { theme } = useAppContext();
  const [bgImage, setBgImage] = useState(theme === "dark" ? ceewhite : ceedark);

  useEffect(() => {
    setBgImage(theme === "dark" ? ceewhite : ceedark);
  }, [theme]);

  return (
    <section className="w-screen h-screen bg-background dark:bg-dark-background relative p-8">
      <Matrix />
      <div className="flex gap-6 items-center ">
        <img src={bgImage} alt="CeeJay" className="relative w-30 rounded-3xl"/>
        <Theme />
      </div>
      <VerticalLoader />
      {/* <GlassDisk /> */}
    </section>
  );
};

export default Loading;

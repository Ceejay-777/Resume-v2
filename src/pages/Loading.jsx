import React from "react";
import Theme from "../components/ui/ThemeSwitch";
import VerticalLoader from "../components/ui/VerticalLoader";
import GlassDisk from "../components/ui/GlassDisk";
import space from "../assets/Project_images/space.jpg";

const Loading = () => {
  return (
    <section className="w-screen h-screen bg-background dark:bg-dark-background flex items-center justify-center bg-[url('../assets/Project_images/space.jpg')] bg-cover bg-center bg-no-repeat relative">
      <img src={space} className="absolute w-full h-full object-cover" />
      <Theme />
      <VerticalLoader />
      <GlassDisk />
    </section>
  );
};

export default Loading;

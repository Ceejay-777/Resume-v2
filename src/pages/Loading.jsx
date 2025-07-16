import { useEffect, useState } from "react";
import Theme from "../components/ui/ThemeSwitch";
import VerticalLoader from "../components/ui/VerticalLoader";
import GlassDisk from "../components/ui/GlassDisk";
import Matrix from "../components/ui/Matrix";
import ceewhite from "../assets/CeeLogos/BlueWhite.png";
import ceedark from "../assets/CeeLogos/BlueBlack.png";
import { useAppContext } from "../hooks/context";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { slideUpVariant } from "../data";
import PageAnimateWrapper from "../sharedLayouts/PageAnimateWrapper";

const Loading = () => {
  const { theme } = useAppContext();
  const [bgImage, setBgImage] = useState(theme === "dark" ? ceewhite : ceedark);

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  useEffect(() => {
    setBgImage(theme === "dark" ? ceewhite : ceedark);
  }, [theme]);

  return (
    <PageAnimateWrapper disableInitial>
      <section className="w-screen h-screen bg-complementary dark:bg-dark-background relative p-8">
        <Matrix />
        <div className="flex gap-6 items-center ">
          <img
            src={bgImage}
            alt="CeeJay"
            className="relative w-30 rounded-3xl"
          />
          <Theme />
        </div>
        <VerticalLoader />
        {/* <GlassDisk /> */}
      </section>
    </PageAnimateWrapper>
  );
};

export default Loading;

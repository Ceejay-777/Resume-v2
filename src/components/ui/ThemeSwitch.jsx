import { MoonIcon, SunIcon } from "lucide-react";
import { useAppContext } from "../../hooks/context";
import { motion } from "framer-motion";

const Theme = () => {
  const { theme, setTheme } = useAppContext();

  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 30,
  };

  return (
    <div
      className={`w-16 h-8 rounded-full flex items-center p-1 relative justify-between bg-dark-primary dark:bg-dark-complementary mlg:mx-8 `}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
      }}
    >
      <MoonIcon fill="#3162C4" strokeWidth={0} size={16} />
      <motion.div
        className={`w-6 h-6 rounded-full absolute bg-complementary dark:translate-x-8 dark:bg-dark-primary`}
        layout
        transition={spring}
      />

      <SunIcon fill="#B8B5BE" color="#B8B5BE" size={16} />
    </div>
  );
};

export default Theme;

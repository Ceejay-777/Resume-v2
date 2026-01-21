import { useState } from "react";
import Matrix from "../../components/ui/Matrix";
import SectionIntro from "./SectionIntro";
import { SectionSkillset } from "./SectionSkillset";
import SectionProjects from "./SectionProjects";
import { SectionExperience } from "./SectionExperience";
import Window from "../../components/ui/Window";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [openApps, setOpenApps] = useState(["intro"]);
  const [activeWindows, setActiveWindows] = useState([]);

  const toggleApp = (id) => {
    setOpenApps((prev) =>
      prev.includes(id) ? prev.filter((app) => app !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    // The "Pop-Pop-Pop" sequence
    const sequence = async () => {
      const windows = ["intro", "skills", "projects"];
      for (let i = 0; i < windows.length; i++) {
        await new Promise((res) => setTimeout(res, 300 + i * 200));
        setActiveWindows((prev) => [...prev, windows[i]]);
      }
    };
    sequence();
  }, []);

  const closeWindow = (id) =>
    setActiveWindows((prev) => prev.filter((window) => window !== id));

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-complementary dark:bg-dark-background">
      <div className="opacity-20 pointer-events-none">
        <Matrix />
      </div>

      <AnimatePresence>
        {activeWindows.includes("intro") && (
          <Window
            title="User_Profile"
            id="intro"
            onClose={() => closeWindow("intro")}
            // Desktop: Randomish position | Mobile: Centered
            defaultPos={{ x: "5%", y: "10%" }}
          >
            <SectionIntro />
          </Window>
        )}

        {activeWindows.includes("skills") && (
          <Window
            title="Core_Tech"
            id="skills"
            onClose={() => closeWindow("skills")}
            defaultPos={{ x: "15%", y: "15%" }}
          >
            <SectionSkillset />
          </Window>
        )}

        {/* ... etc for Projects */}
      </AnimatePresence>

      {/* The OS Dock (Navigation) */}
      <nav className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 p-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl z-[100]">
        {["intro", "skills", "projects", "experience"].map((app) => (
          <button
            key={app}
            onClick={() => toggleApp(app)}
            className={`px-4 py-2 rounded-lg capitalize transition-all ${
              openApps.includes(app) ? "bg-sec text-white" : "hover:bg-white/10"
            }`}
          >
            {app}
          </button>
        ))}
      </nav>
    </main>
  );
};

export default Home;

import { useState, useRef, useEffect } from "react";
import Skillbar from "./Skillbar.jsx";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const Project = ({ project }) => {
  const childRef = useRef();
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [childHeight, setChildHeight] = useState(0);

  const { name, image, info, skills, link } = project;

  useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.offsetHeight);
    }
  }, []);

  // Optional: update height if content changes
  useEffect(() => {
    if (childRef.current) {
      setChildHeight(childRef.current.offsetHeight);
    }
  }, [showAll, name, info, skills, link]);

  const parentHeight = hovered ? childHeight + 64 : 188; // 320 = default h-80

  return (
    <motion.div
      className="my-10 shadow-md border flex flex-col mx-auto group z-30 relative overflow-hidden w-80"
      layout
      style={{ height: parentHeight }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto transition-all duration-700 bg-black  group-hover:-translate-y-4/5 z-20 flex items-center">
        <img src={image} alt="Project" className="" />
      </div>

      <div
        className="p-4 dark:text-white justify-center flex-col absolute top-0 transition-all duration-700 group-hover:translate-y-12 z-10"
        ref={childRef}
      >
        <h2 className="text-xl font-semibold mb-6">{name}</h2>
        <p className="font-light text-xs ">{info.length > 150 ? info.substring(0, 120) + "..." : info} </p>
        {info.length > 150 && <span>show more</span>}
        <Skillbar skills={skills} />

        <div className="ml-4 w-fit">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Link />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;

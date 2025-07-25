import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import MainSharedLayout from "../sharedLayouts/MainSharedLayout";
import Certifications from "../pages/Certifications.jsx";
import Loading from "../pages/Loading.jsx";
import { AnimatePresence } from "motion/react";

const MyRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<MainSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="certifications" element={<Certifications />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default MyRoutes;

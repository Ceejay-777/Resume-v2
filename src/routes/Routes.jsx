import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import MainSharedLayout from "../sharedLayouts/MainSharedLayout";
import Certifications from "../pages/Certifications.jsx";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />} />
          <Route path="certifications" element={<Certifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRoutes




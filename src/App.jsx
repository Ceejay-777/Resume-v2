import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/Navigation.css";
import "./styles/Experience.css";
import "./styles/MyProjects.css";
import "./styles/Skills.css";
import "./styles/Contact.css";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainSharedLayout from "./sharedLayouts/MainSharedLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainSharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

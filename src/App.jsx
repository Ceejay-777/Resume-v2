import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import "./styles/Navigation.css";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MainSharedLayout from "./sharedLayouts/MainSharedLayout";
import { createContext, useContext, useEffect, useState } from "react";
import Certifications from "./pages/Certifications.jsx";

const themeContext = createContext()

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) {
      bodyClasses.remove("dark");
    } else if (bodyClasses.contains("light")) {
      bodyClasses.remove("light");
    }
    bodyClasses.add(theme);
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
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
    </themeContext.Provider>
  );
}

export default App;
export const usethemeContext = () => useContext(themeContext)
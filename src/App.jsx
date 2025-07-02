import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import MyRoutes from "./routes/routes";

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
      <MyRoutes />
    </themeContext.Provider>
  );
}

export default App;
export const usethemeContext = () => useContext(themeContext)
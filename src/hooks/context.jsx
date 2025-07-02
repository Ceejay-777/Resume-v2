import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const bodyClasses = document.documentElement.classList;

    if (theme === "dark") {
      bodyClasses.add("dark");
    } else {
      bodyClasses.remove("dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => useContext(AppContext);

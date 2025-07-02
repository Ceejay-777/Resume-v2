import React, { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const bodyClasses = document.body.classList;

    if (bodyClasses.contains("dark")) {
      bodyClasses.remove("dark");
    } else if (bodyClasses.contains("light")) {
      bodyClasses.remove("light");
    }
    bodyClasses.add(theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => useContext(AppContext);

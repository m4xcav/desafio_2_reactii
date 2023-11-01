import React, { useState, createContext } from "react";
import { ThemeContext } from "./Themecontext";
const ThemeProvider = ({ children }) => {
  const [api, setApi] = useState('');

  return (
    <ThemeContext.Provider value={{ api, setApi }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
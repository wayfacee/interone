import React, { createContext, useContext, useEffect, useState } from "react";
import { FONT_LOCAL_STORAGE } from "./fontlc";

export const FontsContext = createContext();

export const FontsProvider = ({ children }) => {
  const [font, setFont] = useState('Roboto');

  useEffect(() => {
    const storedFont = localStorage.getItem(FONT_LOCAL_STORAGE);
    if (storedFont) {
      setFont(storedFont);
    }
  }, []);

  const changeFont = (newFont) => {
    setFont(newFont);
    localStorage.setItem(FONT_LOCAL_STORAGE, newFont)
  };

  return (
    <FontsContext.Provider value={{ font, changeFont }}>
      {children}
    </FontsContext.Provider>
  );
};

export const useFonts = () => {
  return useContext(FontsContext);
};

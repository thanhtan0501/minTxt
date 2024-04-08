"use client";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ContextTypes {
  data: string;
}

const AppContext = createContext<ContextTypes | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<string | "">("");

  useEffect(() => {
    const value = window.localStorage.getItem("store");
    if (value) {
      setData(JSON.parse(value).state.data);
    }
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useApp = () => useContext(AppContext);

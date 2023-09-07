"use client";
import { createContext, useState, useMemo, useContext } from "react";

const ProgressContext = createContext({
  progress: 0,
  setProgress: () => null,
  calcProgress: (method) => null,
});

export function ProgressContextProvider({ children, currentItemIndex }) {
  const totalItems = 15;
  const percentage = 100 / totalItems;

  const [progress, setProgress] = useState((currentItemIndex + 1) * percentage);

  const calcProgress = (method) => {
    if (method === "add" && progress < 100) {
      setProgress((prevState) => Math.min(prevState + percentage, 100));
    }

    if (method === "subtract" && progress > 0) {
      setProgress((prevState) => Math.max(prevState - percentage, percentage));
    }
  };

  const value = useMemo(
    () => ({ setProgress, progress, calcProgress }),
    [progress]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgressContext = () => useContext(ProgressContext);

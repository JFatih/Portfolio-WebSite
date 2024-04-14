import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem(key));
    if (storedTheme === null) {
      return defaultValue;
    } else {
      return storedTheme;
    }
  });

  const setLocalStorage = (newMode) => {
    localStorage.setItem(key, JSON.stringify(newMode));
    setTheme(newMode);
  };
  return [theme, setLocalStorage];
}

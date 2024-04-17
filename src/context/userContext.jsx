import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const userContext = createContext();

const defaultMode = window.matchMedia("(prefers-color-scheme: dark").matches;

const defaultLanguage = navigator.language;

export const UserContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", defaultMode);
  const [language, setLanguage] = useLocalStorage("Language", defaultLanguage);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <userContext.Provider
      value={{
        darkMode,
        setDarkMode,
        language,
        setLanguage,
        toggleMode,
        changeLang,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

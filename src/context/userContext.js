import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  const [language, setLanguage] = useState();

  const toogleMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = (lang) => {
    setLanguage(lang);
  };

  return (
    <UserContextProvider
      value={{
        darkMode,
        setDarkMode,
        language,
        setLanguage,
        toogleMode,
        changeLang,
      }}
    >
      {children}
    </UserContextProvider>
  );
};

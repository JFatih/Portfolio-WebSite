import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

export const userContext = createContext();

const defaultMode = window.matchMedia("(prefers-color-scheme: dark").matches;

const defaultLanguage = navigator.language;

export const UserContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", defaultMode);
  const [language, setLanguage] = useLocalStorage("Language", defaultLanguage);
  const [data1, setData1] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("DarkMode")) {
      setDarkMode(defaultMode);
    }
    if (!localStorage.getItem("Language")) {
      setLanguage(defaultLanguage);
    }
  }, []);

  useEffect(() => {
    console.log("Dil değişti");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://661e2ae898427bbbef039ed3.mockapi.io/language/${language}`
        );
        const apiData = response.data[0].data;
        setData1(apiData);
        setLoading(false);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, [language]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = (lang) => {
    console.log("2");
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
        data1,
      }}
    >
      {loading ? <div>Loading...</div> : children}
    </userContext.Provider>
  );
};

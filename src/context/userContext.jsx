import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://661e2ae898427bbbef039ed3.mockapi.io/language/${language}`
        );
        const apiData = response.data[0].data;
        setData1(apiData);
        toast(
          language === "tr"
            ? "Türkçe Diline Başarıyla Çevrildi"
            : "Successfully Translated to English"
        );
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

  const Example = () => (
    <ReactLoading
      type="spokes"
      color={darkMode ? "#F4F4F4" : "#2A262B"}
      className="text-center"
      height={400}
      width={200}
    />
  );

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
      {loading ? (
        <section
          className={`w-screen h-screen ${
            darkMode ? "bg-[#2A262B]" : "bg-[F4F4F4]"
          }`}
        >
          <div className="flex justify-center items-center content-center flex-col h-full pt-40">
            <Example />
          </div>
        </section>
      ) : (
        children
      )}
    </userContext.Provider>
  );
};

import { useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import useLocalStorage from "./hooks/useLocalStorage";
import BgHero from "./components/BgHero";

const defaultMode = window.matchMedia("(prefers-color-scheme: dark").matches;

const defaultLanguage = navigator.language;

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("DarkMode", defaultMode);
  const [navLan, setNavLan] = useLocalStorage("Language", defaultLanguage);

  useEffect(() => {
    if (!localStorage.getItem("DarkMode")) {
      setDarkMode(defaultMode);
    }
    if (!localStorage.getItem("Language")) {
      setNavLan(defaultLanguage);
    }
  }, []);

  const toogleMode = () => {
    setDarkMode(!darkMode);
  };

  const changeLang = (lang) => {
    setNavLan(lang);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <BgHero
          toogleMode={toogleMode}
          darkMode={darkMode}
          navLan={navLan}
          changeLang={changeLang}
        />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

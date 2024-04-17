import { useContext, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import BgHero from "./components/BgHero";
import { userContext } from "./context/userContext";

const defaultMode = window.matchMedia("(prefers-color-scheme: dark").matches;

const defaultLanguage = navigator.language;

function App() {
  const { darkMode, setDarkMode, setLanguage } = useContext(userContext);

  useEffect(() => {
    if (!localStorage.getItem("DarkMode")) {
      setDarkMode(defaultMode);
    }
    if (!localStorage.getItem("Language")) {
      setLanguage(defaultLanguage);
    }
  }, []);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <BgHero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

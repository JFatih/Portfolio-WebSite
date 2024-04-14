import { useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import useLocalStorage from "./hooks/useLocalStorage";
import BgHero from "./components/BgHero";

export const defaultValue = window.matchMedia(
  "(prefers-color-scheme: dark"
).matches;

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("theme", defaultValue);

  useEffect(() => {
    const defaultValue = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;
    localStorage.setItem("theme", JSON.stringify(defaultValue));
    setDarkMode(defaultValue);
  }, []);

  const toogleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <BgHero toogleMode={toogleMode} darkMode={darkMode} />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

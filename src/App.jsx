import { useContext, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import useLocalStorage from "./hooks/useLocalStorage";
import BgHero from "./components/BgHero";
import { UserContextProvider, userContext } from "./context/userContext";

const defaultMode = window.matchMedia("(prefers-color-scheme: dark").matches;

const defaultLanguage = navigator.language;

function App() {
  const { setDarkMode, setLanguage } = useContext(userContext);

  useEffect(() => {
    if (!localStorage.getItem("DarkMode")) {
      setDarkMode(defaultMode);
    }
    if (!localStorage.getItem("Language")) {
      setLanguage(defaultLanguage);
    }
  }, []);

  return (
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;

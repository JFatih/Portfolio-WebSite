import { useContext, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import BgHero from "./components/BgHero";
import { userContext } from "./context/userContext";

function App() {
  const { darkMode } = useContext(userContext);

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

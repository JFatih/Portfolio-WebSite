import { useContext } from "react";
import "./App.css";
import Profile from "./components/profile/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/footer";
import BgHero from "./components/BgHero";
import { userContext } from "./context/userContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="bottom-center"
          autoClose={600}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"}
          limit={2}
        />
      </div>
    </>
  );
}

export default App;

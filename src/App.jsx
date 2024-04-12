import "./App.css";
import Introduce from "./components/Introduce";
import Profile from "./components/Profile";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Introduce />
      <Skills />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;

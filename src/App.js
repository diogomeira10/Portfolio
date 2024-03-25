import { NavBar } from "./sections/NavBar";
import { Intro } from "./sections/Intro";
import { SkillSet } from "./sections/SkillSet";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";


function App() {
  return (
    <div className="text-white">
      <NavBar />
      <Intro />
      <SkillSet /> 
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;

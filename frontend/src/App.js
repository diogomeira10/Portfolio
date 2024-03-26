import { NavBar } from "./sections/NavBar";
import { Intro } from "./sections/Intro";
import { SkillSet } from "./sections/SkillSet";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";


function App() {
  return (
    <div className="text-white xl:px-5">
      <NavBar />
      <Intro />
      <SkillSet /> 
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

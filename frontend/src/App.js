import { NavBar } from "./sections/NavBar";
import { Intro } from "./sections/Intro";
import { SkillSet } from "./sections/SkillSet";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from './sections/Footer'


function App() {
  return (
    <div className="text-white xl:px-5 2xl:px-28">
      <NavBar />
      <Intro />
      <SkillSet /> 
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

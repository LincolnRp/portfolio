import React from "react";
import { DivContainerHome, DivContentHome } from "./style";
import About from "./../../components/About/About";
import Education from "./../../components/Education/Education";
import Certification from "./../../components/Certification/Certification";
import SoftwareSkills from "../../components/Software_Skills/SoftwareSkills";
import ProjectsProgress from "../../components/ProjectsProgress/ProjectsProgress";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Whatsapp from "../../components/Whatsapp/Whatsapp";

function Home() {
  return (
    <DivContainerHome>
      <About />
      Meu nome é Lincoln
      <DivContentHome>
        <Education />
        <Certification />
      </DivContentHome>
      <SoftwareSkills />
      <ProjectsProgress />
      <Projects />
      <Contact />
      <Whatsapp />
    </DivContainerHome>
  );
}

export default Home;

import React from 'react'
import {DivContainerHome, DivContentHome} from './style'
import About from './../../components/About/About'
import Education from './../../components/Education/Education'
import Certification from './../../components/Certification/Certification'
import SoftwareSkills from '../../components/Software_Skills/SoftwareSkills'
import ProjectsProgress from '../../components/ProjectsProgress/ProjectsProgress'
import Projects from '../../components/Projects/Projects'


function Home() {

  return (

    <DivContainerHome>
      <About/>
      Meu nome é Lincoln

      <DivContentHome>
        <Education/>
        <Certification/>
      </DivContentHome>
        <SoftwareSkills/> 
        <ProjectsProgress/>
        <Projects/>
      </DivContainerHome>

  )

}

export default Home
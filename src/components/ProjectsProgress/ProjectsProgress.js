import React from 'react'
import {DivProjectsCircle, DivContainerProjctsProgress} from './style'

function ProjectsProgress() {
  return (
    <DivContainerProjctsProgress>
        <DivProjectsCircle>
            <p>15+</p>
            <h4>Projetos</h4>
        </DivProjectsCircle>

        <DivProjectsCircle>
            <p>1+</p>
            <h4>Anos de experiência</h4>
        </DivProjectsCircle>

        <DivProjectsCircle>
            <p>600+</p>
            <h4>Contribuições</h4>
        </DivProjectsCircle>


    </DivContainerProjctsProgress>
  )
}

export default ProjectsProgress
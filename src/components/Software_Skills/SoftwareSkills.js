import React from 'react'
import {DivContainerSoftware, DivSoftwareSkills} from './style'
import initial from './../../assets/images/initial.png'
import intermedy from './../../assets/images/intermedy.png'
import advanced from './../../assets/images/advanced.png'

function SoftwareSkills (){

    return(
        <DivContainerSoftware>
            <h1>Software Skills</h1>
            <DivSoftwareSkills>
                <div><p>HTML</p>
                <img src={advanced} width="440px" alt="advanced html skill"></img>

                <p>CSS e Styled-Components</p>
                <img src={advanced} width="440px" alt="advanced css skill"></img>

                <p>Javascript</p>
                <img src={advanced} width="440px" alt="advanced js skill"></img>

                <p>Scrum e Kanban</p>
                <img src={advanced} width="440px" alt="advanced scrum/kanban skill"></img>

                <p>UI design Figma</p>
                <img src={advanced} width="440px" alt="advanced ui design skill"></img>

                <p>Typescript</p>
                <img src={intermedy} width="410px" alt="intermedy ts skill"></img>
                </div>

                <div>
                <p>React</p>
                <img src={intermedy} width="410px" alt="intermedy react skill"></img>

                <p>Node</p>
                <img src={intermedy} width="410px" alt="intermedy node skill"></img>

                <p>Rest API</p>
                <img src={intermedy} width="410px" alt="intermedy api skill"></img>

                <p>MySQL</p>
                <img src={intermedy} width="410px" alt="intermedy sql skill"></img>

                <p>Jest</p>
                <img src={initial} width="430px" alt="basic jest skill"></img>
                </div>
            </DivSoftwareSkills>
        </DivContainerSoftware>
    )



}

export default SoftwareSkills
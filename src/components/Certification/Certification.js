import React from 'react'
import {DivContainerCertification, DivContent, DivInfoCertification} from './style'

function Certification() {

  return (

    <DivContainerCertification>

      <h1>Certificação</h1>

      <DivContent>

        <DivInfoCertification>

        <h2>Desenvolvedor Full Stack</h2>
        <ul>
          <li>Concluído curso de desenvolvimento web full stack no bootcamp da Labenu.</li>
        </ul>

        <h2>Inglês Básico </h2>
        <ul>
        <li>Concluído curso de inglês básico na escola de idiomas English Live.</li>
        </ul>


        </DivInfoCertification>

      </DivContent>
    </DivContainerCertification>
  )
}

export default Certification
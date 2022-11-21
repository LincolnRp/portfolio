import React from 'react'
import {DivContainerEducation, DivContent, DivInfoEducation} from './style'
import Line from './../../assets/images/line.png'

function Education() {

  return (

    <DivContainerEducation>
      <h1>Educação</h1>

      <DivContent>

        <img src={Line} alt="Linha"></img>

        <DivInfoEducation>
        <h2>Ciência da Computação — </h2>
        <div><p>Universidade Anhembi Morumbi</p>
        <p>Previsão Conclusão - Julho de 2025</p></div>

        <div><h2>Desenvolvimento Web Full Stack— </h2>
        <p>Labenu</p>
        <p>Concluído  - Novembro 2022</p></div>

        <h2>Consultoria SAP, Abap— </h2>
        <p>KA Solution</p>
        <p>Concluído - Outubro 2022</p>

        </DivInfoEducation>

      </DivContent>
    </DivContainerEducation>
    
  )
}

export default Education
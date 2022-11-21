import React from 'react'
import {DivContainerHome, DivContentHome} from './style'
import About from './../../components/About/About'
import Education from './../../components/Education/Education'
import Certification from './../../components/Certification/Certification'

function Home() {

  return (

    <DivContainerHome>
      <About/>
      Meu nome é Lincoln

      <DivContentHome>
        <Education/>
        <Certification/>

      </DivContentHome>
      </DivContainerHome>

  )

}

export default Home
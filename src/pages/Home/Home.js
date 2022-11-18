import React from 'react'
import {DivContainerHome} from './style'
import About from './../../components/About/About'
import Education from './../../components/Education/Education'
import Certification from './../../components/Certification/Certification'

function Home() {

  return (

    <DivContainerHome>
      <About/>
      Meu nome é Lincoln
      <div>
        <Education/>
        <Certification/>

      </div>
      </DivContainerHome>

  )

}

export default Home
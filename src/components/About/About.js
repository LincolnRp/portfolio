import React from "react";
import { DivContainerAbout, DivContainAbout, Lincoln, Social } from "./style";
import MyFace from "./../../assets/images/Lincoln.png";
import Linkedin from "./../../assets/images/in.png";
import Github from "./../../assets/images/github.png";
import Instagram from "./../../assets/images/insta.png";

function About() {
  return (

      <DivContainerAbout>
        <Lincoln src={MyFace}></Lincoln>

        <DivContainAbout>
          <h1>Meu nome é Lincoln</h1>
          <h2>Eu sou Desenvolvedor Full Stack</h2>
          <p>
            Tenho 22 anos, e atualmente sou estudante de Ciência da Computação.
            Formado pelo bootcamp da Labenu em 2022, pude trabalhar com
            diversas tecnologias, entre elas Javascript, ReactJS, NodeJS,
            Typescript, MySQL. Visando o aprimoramento da manutenção em meu
            código, busco sempre desenvolver mais conceitos como metodologias
            ágeis, programação orientada a objetos, clean code, arquitetura de
            software e testes unitários.
            <Social>
              <a href="https://www.linkedin.com/in/lincoln-dev/" target="_blank"><img src={Linkedin}></img></a>
              <a href="https://github.com/LincolnRp" target="_blank"><img src={Github}></img></a>
              <a href="https://www.instagram.com/lincoln.sz/" target="_blank"><img src={Instagram}></img></a>
            </Social>
          </p>
        </DivContainAbout>
      </DivContainerAbout>

  );
}

export default About;

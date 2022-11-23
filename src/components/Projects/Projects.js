import React from "react";
import Labefood from './../../assets/images/Labefood.png'
import LincolnRepo from './../../assets/images/LincolnRepo.png'
import LinsMarket from './../../assets/images/Linsmarket.png'
import Pokedex from './../../assets/images/Pokedex.png'
import Node from './../../assets/images/Node.png'
import Promobit from './../../assets/images/Promobit.png'
import {DivContainerProjects, DivCardProject, DivCard1Project, DivCard2Project ,
    DivCard3Project, DivCard4Project , DivCard5Project, DivCardWrap} from './style'

function Projects() {

  const projects = [
    {
      title: "Pokedéx",
      image: Pokedex,
      height: "120px",
      width: "240px",
      content:"Projeto front end, que simula uma pokédex, sendo possível capturar e soltar pokémons de diversos tipos !",
      url: "https://wanting-drink.surge.sh/home",
    },
    {
      title: "Promobit",
      image: Promobit,
      height: "120px",
      width: "240px",
      content:"Projeto front end, focado em trailer e informações sobre diversos tipos de filmes !",
      url: "https://scientific-credit.surge.sh/",
    },
    {
      title: "Labefood",
      image: Labefood,
      height: "180px",
      width: "120px",
      content:"projeto front end, que simula o rappi4. Nele é possível realizer pedidos em diversos restaurantes.",
      url: "https://labefoods-group1.surge.sh",
    },
    {
      title: "Lama",
      image: Node,
      height: "120px",
      width: "240px",
      content:"projeto back end, com diversas regras de negócio e testes. Permite o cadastro e login de usuários previamente cadastrados.",
      url: "https://github.com/LincolnRp/lama",
    },
    {
      title: "LinsMarket",
      image: LinsMarket,
      height: "180px",
      width: "120px",
      content:"Projeto full stack, que simula um mercado online. Faça pedidos de compras, pague e espere os produtos no conforte de sua casa !",
      url: "https://plant-butter.surge.sh",
    },
    {
      title: "Ailton - Lincoln",
      image: LincolnRepo,
      height: "110px",
      width: "120px",
      content:"Repositório de estudos do bootcamp da Labenu com diversos projetos (front end, back end, e full stack)",
      url: "https://github.com/LincolnRp/ailton-Lincoln-Paula",
    }
  ];

  return <DivContainerProjects>
    <h1>Projetos</h1>
    <DivCardWrap>
    {/* {projects.map((project) =>{
        return <DivCardProject>
                <img src={project.image} width={project.width} height={project.height}></img>
                <h1>{project.title}</h1>
                <p>{project.content}</p>
                <button>Abrir projeto</button>
        </DivCardProject>
    })} */}
    <DivCardProject>
    <img src={projects[0].image} width={projects[0].width} height={projects[0].height} alt={"Pokedéx Image"}></img>
    <h1>{projects[0].title}</h1>
    <p>{projects[0].content}</p>
    <button>Abrir projeto</button>
    </DivCardProject>

    <DivCard1Project>
    <img src={projects[1].image} width={projects[1].width} height={projects[1].height} alt={"Promobit Image"}></img>
    <h1>{projects[1].title}</h1>
    <p>{projects[1].content}</p>
    <button>Abrir projeto</button>
    </DivCard1Project>

    <DivCard2Project>
    <img src={projects[2].image} width={projects[2].width} height={projects[2].height} alt={"Labefood Image"}></img>
    <h1>{projects[2].title}</h1>
    <p>{projects[2].content}</p>
    <button>Abrir projeto</button>
    </DivCard2Project>

    <DivCard3Project>
    <img src={projects[3].image} width={projects[3].width} height={projects[3].height} alt={"Node Image"}></img>
    <h1>{projects[3].title}</h1>
    <p>{projects[3].content}</p>
    <button>Abrir projeto</button>
    </DivCard3Project>

    <DivCard4Project>
    <img src={projects[4].image} width={projects[4].width} height={projects[4].height} alt={"Linsmarket Image"}></img>
    <h1>{projects[4].title}</h1>
    <p>{projects[4].content}</p>
    <button>Abrir projeto</button>
    </DivCard4Project>

    <DivCard5Project>
    <img src={projects[5].image} width={projects[5].width} height={projects[5].height} alt={"Repo Image"}></img>
    <h1>{projects[5].title}</h1>
    <p>{projects[5].content}</p>
    <button>Abrir projeto</button>
    </DivCard5Project>
    

    </DivCardWrap>
    
    </DivContainerProjects>;
}

export default Projects;

import styles from './About.module.css'
import { LiaHtml5 } from "react-icons/lia";
import { TiCss3 } from "react-icons/ti";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6"
import { DiMysql } from "react-icons/di";

import SocialMedia from '../SocialMedia';

import image from '../../assets/perfil.jpg'

const About = () => {
  return (
    <div id='about' className={styles.about}>
      <div className={styles.about_me}>
        <h2>Sobre mim</h2>
        <p className={styles.text}>Olá, seja muito bem vindo(a) ao meu portfólio pessoal.
          <br /><br />
          Me chamo <span>Wesley da Silva</span>, tenho 23 anos e sou residente de <span>Belo Horizonte/MG</span>.
          Sou iniciante no mundo da programação, estou em busca de minha primeira vaga como <span>desenvolvedor web</span>, aqui você verá alguns de meus projetos, um pouco sobre minhas stacks que venho me especializando e estudando.
          <br /><br />
          Atualmente estou aprimorando minhas habilidades em <span>ReactJS</span> e <span>NodeJs</span>, com o objetivo de entender as camadas de uma aplicação <span>fullstack</span>.
        </p>
        <hr />
        <br />
        <h2>Skills</h2>
        <div className={styles.tech}>
          <div className={styles.divIcons}>
            <LiaHtml5 />
            <p>Html</p>
          </div>

          <div className={styles.divIcons}>
            <TiCss3 />
            <p>Css</p>
          </div>

          <div className={styles.divIcons}>
            <RiJavascriptFill />
            <p>Javascript</p>
          </div>

          <div className={styles.divIcons}>
            <FaBootstrap />
            <p>Bootstrap</p>
          </div>

          <div className={styles.divIcons}>
            <BiLogoTypescript />
            <p>Typescript</p>
          </div>

          <div className={styles.divIcons}>
            <FaReact />
            <p>React</p>
          </div>

          <div className={styles.divIcons}>
            <FaGitAlt />
            <p>Git</p>
          </div>

          <div className={styles.divIcons}>
            <FaGithub />
            <p>GitHub</p>
          </div>

          <div className={styles.divIcons}>
            <FaNodeJs />
            <p>NodeJs</p>
          </div>

          <div className={styles.divIcons}>
            <DiMysql />
            <p>Mysql</p>
          </div>
        </div>
      </div>

      <div className={styles.perfil_img}>
        <img data-aos="flip-left" src={image} alt="" />
      </div>
    </div>
  )
}

export default About
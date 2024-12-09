import styles from './Projects.module.css'
import SocialMedia from '../../components/SocialMedia'

import project1 from '../../assets/clickTimeChallenge.png'
import project2 from '../../assets/generator.png'
import project3 from '../../assets/finance.png'
import project4 from '../../assets/jogoDaVelha.png'
import project5 from '../../assets/gitHubFinder.png'


const Projects = () => {

 const currentPage = './projects'

  let socialMediaClass
  if(currentPage === './projects') {
    socialMediaClass = styles.icons2
  } 


  return (
    <section className={styles.sectionProjets}>
      <SocialMedia className={socialMediaClass}/>
      <p className={styles.titleProjects}>Projetos</p>
      <div className={styles.projects}>
        <div className={styles.imgs}>
          <img src={project1} alt="" />
          <p>Click Time Challenge</p>
          <a href="https://github.com/WesleySv19/click_time_challenge" 
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://wesleysv19.github.io/click_time_challenge/" 
          target='_blank'><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src={project2} alt="" />
          <p>Password Generator</p>
          <a href="https://github.com/WesleySv19/password-generator-js"
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://wesleysv19.github.io/password-generator-js/"
          target='_blank'><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src={project4} alt="" />
          <p>Jogo da Velha</p>
          <a href="https://github.com/WesleySv19/jogo-da-velha-javascript" 
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://wesleysv19.github.io/jogo-da-velha-javascript/" 
          target='_blank'><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src={project5} alt="" />
          <p>GitHub Finder</p>
          <a href="">https://github.com/WesleySv19/github_api_ts<button>Acessar Repostório</button></a>
          <a href="https://github-api-97exzbbp4-wesleyysilvaa1912gmailcoms-projects.vercel.app/"><button>Acessar Projeto</button></a>
        </div>
        
        <div className={styles.imgs}>
          <img src={project3} alt="" />
          <p>Finance Control</p>
          <a href="https://github.com/WesleySv19/finance-control-js" 
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://wesleysv19.github.io/finance-control-js/"
          target='_blank'><button>Acessar Projeto</button></a>
        </div>
      </div>
    </section>
  )
}

export default Projects
import styles from './Projects.module.css'

import project1 from '../../assets/clickTimeChallenge.png'
import project2 from '../../assets/ts_commerce.png'
import project3 from '../../assets/finance.png'
import project4 from '../../assets/jogoDaVelha.png'
import project5 from '../../assets/gitHubFinder.png'
import project6 from '../../assets/stopwatch.png'


const Projects = () => {
  

  return (
    <div id='projects' className={styles.sectionProjets}>
      <h2>Projetos</h2>
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
          <p>TS-Commerce</p>
          <a href="https://github.com/WesleySv19/TS-Commerce"
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://ts-commerce-khaki.vercel.app/"
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
          <a href="https://github.com/WesleySv19/github_api_ts"><button>Acessar Repostório</button></a>
          <a href="https://github-api-ts.vercel.app/"><button>Acessar Projeto</button></a>
        </div>
        
        <div className={styles.imgs}>
          <img src={project3} alt="" />
          <p>Finance Control</p>
          <a href="https://github.com/WesleySv19/finance-control-js" 
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="https://wesleysv19.github.io/finance-control-js/"
          target='_blank'><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src={project6} alt="" />
          <p>Cronômetro</p>
          <a href="https://github.com/WesleySv19/Stopwatch" 
          target='_blank'><button>Acessar Repostório</button></a>
          <a href="#"
          target='_blank'><button>Acessar Projeto</button></a>
        </div>
      </div>
    </div>
  )
}

export default Projects
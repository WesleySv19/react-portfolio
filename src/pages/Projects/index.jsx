import styles from './Projects.module.css'
import SocialMedia from '../../components/SocialMedia'


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
          <img src="./src/assets/imgsProjects/clickTimeChallenge.png" alt="" />
          <p>Click Time Challenge</p>
          <a href=""><button>Acessar Repostório</button></a>
          <a href=""><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src="./src/assets/imgsProjects/generator.png" alt="" />
          <p>Password Generator</p>
          <a href=""><button>Acessar Repostório</button></a>
          <a href=""><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src="./src/assets/imgsProjects/jogoDaVelha.png" alt="" />
          <p>Jogo da Velha</p>
          <a href=""><button>Acessar Repostório</button></a>
          <a href=""><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src="./src/assets/imgsProjects/gitHubFinder.png" alt="" />
          <p>GitHub Finder</p>
          <a href=""><button>Acessar Repostório</button></a>
          <a href=""><button>Acessar Projeto</button></a>
        </div>

        <div className={styles.imgs}>
          <img src="./src/assets/imgsProjects/finance.png" alt="" />
          <p>Finance Control</p>
          <a href=""><button>Acessar Repostório</button></a>
          <a href=""><button>Acessar Projeto</button></a>
        </div>
      </div>
    </section>
  )
}

export default Projects
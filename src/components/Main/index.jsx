import styles from './Main.module.css'
import SocialMedia from '../SocialMedia'

const currentPage = '/'

let socialMediaClass
if(currentPage === '/') {
  socialMediaClass = styles.icons
} 

const Main = () => {
  return (
    <section>
      <SocialMedia className={socialMediaClass}/>
      <div data-aos="fade-right" className={styles.main}>
        <div className={styles.firstName}>
          <p>Wesley</p>
        </div>

        <div>
          <p className={styles.lastName}>Silva</p>
        </div>

        <div className={styles.homeSubTitle}>
          <p>Estudante de <strong>Engenharia de Software</strong></p>
          <p><strong>Desenvolvimento Web</strong></p>
        </div>
      </div>
      
      <div data-aos="flip-up" className={styles.cv}>
        <a 
        href="wesleysilvacv.pdf" download><button>Download CV</button></a>
      </div>

    </section>
  )
}

export default Main
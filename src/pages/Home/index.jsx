import React from 'react'
import styles from './Home.module.css'
import SocialMedia from '../../components/SocialMedia'

const currentPage = '/'

let socialMediaClass
if(currentPage === '/') {
  socialMediaClass = styles.icons
} 

const Home = () => {
  return (
    <section>
      <SocialMedia className={socialMediaClass}/>
      <div data-aos="fade-right" className={styles.home}>
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
        <a href=""><button>Download CV</button></a>
      </div>

    </section>
  )
}

export default Home
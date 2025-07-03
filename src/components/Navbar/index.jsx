import { useState } from 'react'
import styles from './Navbar.module.css'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    <header>
      <nav id='home'>


        <button className={styles.hamburger} onClick={toggleMenu}>
          <IoMdMenu size={28} />
        </button>

        <div className={styles.sidenav}>
          <ul className={`${styles.navbar} ${isOpen ? styles.sidenavOpen : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </div>


      </nav>
    </header>
  )
}

export default Navbar
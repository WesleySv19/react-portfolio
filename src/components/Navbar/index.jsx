import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/about'>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/projects'>
              Projetos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
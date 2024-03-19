import React from 'react'
import styles from './Footer.module.css'
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <MdOutlineEmail />
        wesleyysilvaa1912@gmail.com
      </p>
    </footer>
  )
}

export default Footer
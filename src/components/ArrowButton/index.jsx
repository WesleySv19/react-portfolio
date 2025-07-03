import { FaChevronUp } from "react-icons/fa"
import styles from './ArrowButton.module.css'
import { useEffect, useState } from "react";

const ArrowButton = () => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    visible && (
      <div className={styles.arrowButtonDiv}>
        <button onClick={scrollToTop}>
          <FaChevronUp />
        </button>
      </div>
    )
  )
};

export default ArrowButton;

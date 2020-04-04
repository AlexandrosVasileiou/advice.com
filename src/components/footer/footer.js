import React from "react"
import styles from "./footer.module.scss"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Rene Gens</div>
      <Link className={styles.buttonPrimary} to="/random">Get a random advice</Link>
    </footer>
  )
}

export default Footer

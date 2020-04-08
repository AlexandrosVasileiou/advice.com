import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.css"

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Rene Gens</div>
      <Link to="/random" className={styles.buttonPrimary} onClick={props.onClick}>
        Get a random advice
      </Link>
    </footer>
  )
}

export default Footer

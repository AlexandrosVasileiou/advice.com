import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} Rene Gens</div>
      <a className={styles.buttonPrimary} href="/random">Get a random advice</a>
    </footer>
  )
}

export default Footer

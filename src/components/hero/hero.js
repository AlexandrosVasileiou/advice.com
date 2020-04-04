import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.scss"
import MutedText from "../mutedText"

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <header className={styles.header}>
        <div className={styles.title}>Advice Worth Giving</div>
        <div className={styles.subTitle}>The best advice is this: <br/>Don’t take advice and don’t give advice.
          <br/><MutedText>Author Unknown</MutedText></div>
      </header>
      <div className={styles.bottom}>
        <a className={`${styles.button} ${styles.buttonPrimary}`} href="#book">Continue reading</a>
        <Link className={styles.button} to="/buy">Buy eBook</Link>
      </div>
    </section>
  )
}

export default Hero

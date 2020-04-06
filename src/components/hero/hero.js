import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.css"
import MutedText from "../mutedText"
import Title from "../title/title"
import Div100vh from "react-div-100vh"

const Hero = () => {
  return (
    <section>
      <Div100vh className={styles.heroSection}>
        <header className={styles.header}>
          <Title title={"Advice worth giving"}/>
          <div className={styles.subTitle}>The best advice is this: <br/>Don’t take advice and don’t give advice.
            <br/><MutedText>Author Unknown</MutedText></div>
        </header>
        <div className={styles.buttonGroup}>
          <a className={`${styles.button} ${styles.buttonPrimary}`} href="#book">Continue reading</a>
          <Link className={styles.button} to="/buy">Buy eBook</Link>
        </div>
      </Div100vh>
    </section>
  )
}

export default Hero

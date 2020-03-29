import React from "react"
import "./hero.scss"

const Hero = () => {
  return (
    <section>
      <header>
        <h1>Advice Worth Giving</h1>
        <h2>The best advice is this: Don’t take advice and don’t give advice. <br></br>~Author Unknown</h2>
      </header>
      <div className="footer">
        <a className="button button-primary" href="#">Continue reading</a>
        <a className="button" href="#">Buy ebook</a>
      </div>
    </section>
  )
}

export default Hero

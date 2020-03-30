import React from "react"
import { Link } from "gatsby"
import "./hero.scss"

const Hero = () => {
  return (
    <section>
      <header>
        <h1>Advice Worth Giving</h1>
        <h2>The best advice is this: Don’t take advice and don’t give advice. <br/>Author Unknown</h2>
      </header>
      <div className="bottom">
        <a className="button button-primary" href="#book">Continue reading</a>
        <Link className="button" to="/buy">Buy eBook</Link>
      </div>
    </section>
  )
}

export default Hero

import React from "react"
import "./hero.scss"

const Hero = () => {
  return (
    <section class="hero">
      <header class="header">
        <h1 class="hero-title">Advice Worth Giving</h1>
        <p>Try to be a rainbow in someone's cloud.</p>
      </header>
      <div class="footer">
        <a class="button button-primary" href="#">button one</a>
        <a class="button" href="#">button two</a>
      </div>
    </section>
  )
}

export default Hero

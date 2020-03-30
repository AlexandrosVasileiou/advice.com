import React from "react"
import "./footer.scss"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div>© {new Date().getFullYear()} Rene Gens</div>
      <Link className="button button-primary" to="/random">Get a random advice</Link>
    </footer>
  )
}

export default Footer

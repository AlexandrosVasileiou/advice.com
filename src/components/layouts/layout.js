import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer"

const site = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
}

const siteContent = {
  flex: 1,
}

const Layout = ({ children, onClick }) => {
  return (
    <div style={site}>
      <div style={siteContent}>{children}</div>
      <Footer onClick={onClick} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

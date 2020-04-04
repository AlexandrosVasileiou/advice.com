import React from "react"
import PropTypes from "prop-types"

const body = {
  maxWidth: "1080px",
  padding: "24px",
  margin: "0 auto",
}

const Container = ({ children }) => {
  return (
    <div style={body}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container

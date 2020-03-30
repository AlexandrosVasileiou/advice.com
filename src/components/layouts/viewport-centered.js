import React from "react"
import PropTypes from "prop-types"

const centerContent = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

const ViewPortCentered = ({ children }) => {
  return (
    <div style={centerContent}>
      {children}
    </div>
  )
}

ViewPortCentered.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ViewPortCentered

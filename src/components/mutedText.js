import React from "react"
import PropTypes from "prop-types"

const MutedText = ({ text }) => {
  return (
    <span style={{ color: "#7f8ea3" }}>{text}</span>
  )
}

MutedText.propTypes = {
  text: PropTypes.string.isRequired,
}


export default MutedText

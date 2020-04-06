import React from "react"

const style = {
  color: "#7f8ea3",
}

const MutedText = ({ children }) => {
  return (
    <span style={style}>{children}</span>
  )
}

export default MutedText

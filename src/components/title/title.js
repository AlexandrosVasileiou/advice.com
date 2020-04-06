import React from "react"
import styles from "./title.module.css"
import PropTypes from "prop-types"

const Title = ({ text }) => {
  return (
    <div className={styles.text}>{text}</div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title

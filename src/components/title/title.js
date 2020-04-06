import React from "react"
import styles from "./title.module.css"
import PropTypes from "prop-types"

const Title = ({ title }) => {
  return (
    <div className={styles.title}>{title}</div>
  )
}

Title.propTypes = {
  title: PropTypes.node.isRequired,
}

export default Title

import React from "react"
import styles from "./post.module.scss"

function createMarkup(content) {
  return { __html: content }
}

const Post = (props) => {
  return (
    <article className={styles.article}>
      <div className={styles.postTitle}>{props.post.title}</div>
      <div className={styles.postTag}>{props.post.tag}</div>
      <p className={styles.p} dangerouslySetInnerHTML={createMarkup(props.post.content)}/>
      <hr className={styles.hr}/>
    </article>
  )
}

export default Post

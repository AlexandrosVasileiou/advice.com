import React from "react"
import styles from "./post.module.scss"
import MutedText from "../mutedText"

function createMarkup(content) {
  return { __html: content }
}

const Post = (props) => {
  return (
    <article className={styles.article}>
      <div className={styles.postTitle}>{props.post.title}</div>
      <MutedText>
        <div className={styles.postTag}>{props.post.tag}</div>
      </MutedText>
      <p className={styles.postParagraph} dangerouslySetInnerHTML={createMarkup(props.post.content)}/>
      <hr className={styles.hr}/>
    </article>
  )
}

export default Post

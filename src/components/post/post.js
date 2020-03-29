import React from "react"
import "./post.scss"

const Post = (props) => {
  return (
    <article>
      <h2>{props.post.title}</h2>
      <h3>{props.post.tag}</h3>
      <p>{props.post.content}</p>
    </article>
  )
}

export default Post

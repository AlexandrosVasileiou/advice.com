import React from "react"
import "./post.scss"

const Post = (props) => {
  return (
    <article>
      <h2>{props.post.title}</h2>
      <p className="tag">{props.post.tag}</p>
      <p className="content">{props.post.content}</p>
    </article>
  )
}

export default Post

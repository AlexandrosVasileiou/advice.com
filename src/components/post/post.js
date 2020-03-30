import React from "react"
import "./post.scss"

function createMarkup(content) {
  return { __html: content }
}

const Post = (props) => {
  return (
    <article>
      <h2>{props.post.title}</h2>
      <h3>{props.post.tag}</h3>
      <p dangerouslySetInnerHTML={createMarkup(props.post.content)}/>
      <hr></hr>
    </article>
  )
}

export default Post

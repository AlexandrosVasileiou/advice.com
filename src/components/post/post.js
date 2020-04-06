import React from "react"
import MutedText from "../mutedText"

function createMarkup(content) {
  return { __html: content }
}

const Post = (props) => {
  return (
    <article>
      <h1 align="start">{props.post.title}</h1>
      <MutedText>
        <h3 align="start">{props.post.tag}</h3>
      </MutedText>
      <p dangerouslySetInnerHTML={createMarkup(props.post.content)}/>
      <hr/>
    </article>
  )
}

export default Post

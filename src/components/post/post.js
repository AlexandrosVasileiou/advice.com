import React from "react"
import MutedText from "../mutedText"

const divider = {
  width: "40%",
  height: "1px",
  border: "none",
  backgroundColor: "#7f8ea3",
  margin: "30px 0 40px 0",
}

const boldFont = {
  fontFamily: "Libre Baskerville Bold",
  fontWeight: "700",
}

function createMarkup(content) {
  return { __html: content }
}

const Post = (props) => {
  return (
    <article>
      <h1
        align="start"
        style={boldFont}
      >{props.post.title}</h1>
      <MutedText>
        <h3 align="start">{props.post.tag}</h3>
      </MutedText>
      <p dangerouslySetInnerHTML={createMarkup(props.post.content)}/>
      <hr style={divider}/>
    </article>
  )
}

export default Post

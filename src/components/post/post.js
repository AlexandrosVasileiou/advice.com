import React from "react"
import MutedText from "../mutedText"

const divider = {
  width: "40%",
  height: "1px",
  border: "none",
  backgroundColor: "#7f8ea3",
  marginLeft: "0",
  marginTop: "30px",
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
    <article style={{ marginBottom: "150px" }}>
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

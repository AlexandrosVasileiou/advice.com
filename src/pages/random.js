import React, { Component } from "react"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Layout from "../components/layouts/layout"
import Container from "../components/layouts/container"


export default class RandomPage extends Component {

  randomPost = posts[Math.floor(Math.random() * posts.length)]

  render() {
    return (
      <Layout>
        <SEO title="Random advice of the day"/>
        <Container>
          <Post post={this.randomPost}/>
        </Container>
      </Layout>)
  }
}

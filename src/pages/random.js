import React, { Component } from "react"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import ViewPortCentered from "../components/layouts/viewport-centered"
import Layout from "../components/layouts/layout"


export default class RandomPage extends Component {

  randomPost = posts[Math.floor(Math.random() * posts.length)]

  render() {
    return (
      <Layout>
        <SEO title="Random advice of the day"/>
        <ViewPortCentered>
          <Post post={this.randomPost}/>
        </ViewPortCentered>
      </Layout>)
  }
}

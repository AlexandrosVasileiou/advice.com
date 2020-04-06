import React, { Component } from "react"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Layout from "../components/layouts/layout"
import Container from "../components/layouts/container"
import ViewPortCentered from "../components/layouts/viewport-centered"

export default class RandomPage extends Component {

  state = {
    randomNumber: this.getRandomNumberForPost(),
  }

  componentDidMount() {
    this.setState({
      randomNumber: this.getRandomNumberForPost(),
    })
  }

  getRandomNumberForPost() {
    return Math.floor(Math.random() * posts.length)
  }

  render() {
    return (
      <Layout>
        <SEO title="Random advice of the day"/>
        <Container>
          <ViewPortCentered>
            <Post post={posts[this.state.randomNumber]}/>
          </ViewPortCentered>
        </Container>
      </Layout>
    )
  }
}

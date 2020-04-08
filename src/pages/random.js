import React, { Component } from "react"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Layout from "../components/layouts/layout"
import Container from "../components/layouts/container"
import ViewPortCentered from "../components/layouts/viewport-centered"

export default class RandomPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: this.getRandomNumberForPost(),
    }
  }

  getRandomNumberForPost() {
    return Math.floor(Math.random() * posts.length)
  }

  handleRandomClick() {
    this.setState({ randomNumber: this.getRandomNumberForPost() })
  }

  render() {
    return (
      <Layout onClick={this.handleRandomClick}>
        <SEO title="Random advice of the day" />
        <Container>
          <ViewPortCentered>
            <Post post={posts[this.state.randomNumber]} />
          </ViewPortCentered>
        </Container>
      </Layout>
    )
  }
}

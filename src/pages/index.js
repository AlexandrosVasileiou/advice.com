import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Container from "../components/layouts/container"


const margin = {
  marginRight: "20px",
  marginLeft: "20px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Hero/>
    <Container>
      <main style={margin} id="book">
        {posts.map((item) =>
          <Post key={item.id} post={item}/>)}
      </main>
    </Container>
  </Layout>
)

export default IndexPage

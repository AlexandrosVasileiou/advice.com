import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Container from "../components/layouts/container"
import Hero from "../components/hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Hero/>
    <Container>
      <main id="book">
        <article>
          {posts.map((item) =>
            <Post key={item.id} post={item}/>)}
        </article>
      </main>
    </Container>
  </Layout>
)

export default IndexPage

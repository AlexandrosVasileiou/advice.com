import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"


const margin = {
  marginRight: "20px",
  marginLeft: "20px",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Hero/>
    <main style={margin} id="book">
        {posts.map((item) =>
          <Post key={item.id} post={item}/>)}
    </main>
  </Layout>
)

export default IndexPage

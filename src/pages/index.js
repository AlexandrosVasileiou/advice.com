import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Footer from "../components/footer/footer"
import Hero from "../components/hero/hero"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"

const IndexPage = () => (
  <Layout>
      <SEO title="Home"/>
      <Hero/>
      <section id="postSection">
          {posts.map((item) =>
            <Post post={item}/>)}
      </section>
      <Footer/>
  </Layout>
)

export default IndexPage

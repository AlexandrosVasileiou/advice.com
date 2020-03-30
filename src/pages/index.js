import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import Footer from "../components/footer/footer"

const IndexPage = () => (
  <Layout>
        <SEO title="Home"/>
        <Hero/>
        <section id="book">
              {posts.map((item) =>
                <Post post={item}/>)}
        </section>
        <Footer/>
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"

const randomPost = posts[Math.floor(Math.random() * posts.length)]

const RandomPage = () => (
  <Layout>
    <SEO title="Random Advice"/>
    <Post post={randomPost}/>
  </Layout>
)

export default RandomPage

import React from "react"
import SEO from "../components/seo"
import Post from "../components/post/post"
import { posts } from "../assets/content.js"
import ViewPortCentered from "../components/layouts/viewport-centered"
import Layout from "../components/layouts/layout"

const randomPost = posts[Math.floor(Math.random() * posts.length)]

const RandomPage = () => (
  <Layout>
    <SEO title="Random advice of the day"/>
    <ViewPortCentered>
      <Post post={randomPost}/>
    </ViewPortCentered>
  </Layout>
)

export default RandomPage

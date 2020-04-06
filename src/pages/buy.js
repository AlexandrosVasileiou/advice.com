import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import BuyThankYou from "../components/buy/buy-thank-you"
import Centered from "../components/layouts/viewport-centered"
import Container from "../components/layouts/container"

const BuyPage = () => (
  <Layout>
    <SEO title="Buy Book"/>
    <Container>
      <Centered>
        <BuyThankYou/>
      </Centered>
    </Container>
  </Layout>
)

export default BuyPage

import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import BuyThankYou from "../components/buy/buy-thank-you"
import ViewPortCentered from "../components/layouts/viewport-centered"

const BuyPage = () => (
  <Layout>
    <SEO title="Buy Book"/>
    <ViewPortCentered>
      <BuyThankYou/>
    </ViewPortCentered>
  </Layout>
)

export default BuyPage

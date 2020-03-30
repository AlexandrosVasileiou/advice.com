import React from "react"
import ViewPortCentered from "../layouts/viewport-centered"
import SEO from "../seo"
import Layout from "../layouts/layout"

const BuyThankYou = () => {
  return (
    <Layout>
      <SEO title="Buy eBook"/>
      <ViewPortCentered>
        <h1>Thank you</h1>
        <h2>If you have gotten value out of this site consider buying the ebook</h2>
        <p>Disclaimer: The ebook you are going to purchase will have the same content as this site.</p>
      </ViewPortCentered>
    </Layout>
  )
}

export default BuyThankYou

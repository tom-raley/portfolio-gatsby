import React from "react"
import Navigation from "../components/Navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation />
    You hit a page that doesn't exist!
  </Layout>
)

export default NotFoundPage

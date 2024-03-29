import React from "react"
import Navigation from "../components/Navigation"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Navigation />
    You hit a page that doesn't exist!
  </Layout>
)

export default NotFoundPage

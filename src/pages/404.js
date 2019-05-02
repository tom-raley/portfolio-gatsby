import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navbar />
    You hit a page that doesn't exist!
  </Layout>
)

export default NotFoundPage

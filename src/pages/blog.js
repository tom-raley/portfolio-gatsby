import React, { Component } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"


class Blog extends Component {
  render() {
    return <Layout>
      <SEO title="404: Not found" />
      <Navbar />
      
  </Layout>
  }
}

export default Blog
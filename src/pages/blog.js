import React, { Component } from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"


class Blog extends Component {
  render() {
    return <Layout>
      <SEO title="blog" />
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}><h3>Coming Soon!</h3></div>
  </Layout>
  }
}

export default Blog
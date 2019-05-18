import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import PortfolioList from "../components/PortfolioList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

class IndexPage extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron />
        <Navigation />
        <About />
        <PortfolioList />
        <Contact />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage
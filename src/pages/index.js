import React, { Component } from "react"
import { graphql} from "gatsby"
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

  render(data) {
    const photos = [
      {
        title: this.props.data.squareOneImg.ChildImageSharp.src,
        fluid: this.props.data.squareOneImg.ChildImageSharp.fluid,
      },
      {
        title: this.props.data.offTheRalesImg.ChildImageSharp.src,
        fluid: this.props.data.offTheRalesImg.ChildImageSharp.fluid,
      },
      {
        title: this.props.data.beeristImg.ChildImageSharp.src,
        fluid: this.props.data.beeristImg.ChildImageSharp.fluid,
      }
    ]
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron />
        <Navigation />
        <About />
        <PortfolioList photos={photos}  />
        <Contact />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  squareOneImg: file(relativePath:{eq: "squareone.png"}) {
    childImageSharp {
      fluid(maxWidth:786) {
				...GatsbyImageSharpFluid   
      }
    }
  }
  offTheRalesImg: file(relativePath:{eq: "offtherales.png"}) {
    childImageSharp {
      fluid(maxWidth:786) {
				...GatsbyImageSharpFluid   
      }
    }
  }
  beeristImg: file(relativePath:{eq: "beerist.png"}) {
    childImageSharp {
      fluid(maxWidth:786) {
				...GatsbyImageSharpFluid   
      }
    }
  }
}`
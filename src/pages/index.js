import React, { Component } from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Navigation from "../components/Navigation"
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import PortfolioList from "../components/PortfolioList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

class IndexPage extends Component {

  render() {
    const photos = this.props.data;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron profilePic={photos.profilePic} />
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
  profilePic: file(relativePath:{eq: "profile_pic.jpg"}) {
    childImageSharp {
      fluid(maxWidth:786) {
				...GatsbyImageSharpFluid_noBase64
      }
    }
  }

}`
import React, { Component } from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import Navigation from "../components/Navigation"
import Jumbotron from "../components/Jumbotron"
import About from "../components/About"
import PortfolioList from "../components/PortfolioList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
require('typeface-montserrat')

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
    const data = this.props.data;
    const resumeAsset = data.allContentfulAsset.edges.filter((asset => asset.node.title === 'resume'))[0]
    const resumeUrl = resumeAsset.node.file.url
    console.log(resumeUrl)
    return (
      <Layout>
        <Seo  keywords={[`gatsby`, `application`, `react`]} />
        <Jumbotron profilePic={data.contentfulAsset} />
        <Navigation resumeUrl={resumeUrl} />
        <About />
        <PortfolioList data={data.allContentfulPortfolio}  />
        <Contact />
        <Footer />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  contentfulAsset(title: {eq: "profile_pic"}) {
    fluid {
      aspectRatio
      base64
      sizes
      src
      srcSet
    }
  }
  allContentfulAsset {
    edges {
      node {
        file {
          details {
            size
          }
          url
        }
        title
      }
    }
  }
  allContentfulPortfolio(sort: {fields: title, order: DESC}) {
    edges {
      node {
        github
        description {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        title
        url
        target
        href
        image {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
  squareOneImg: file(relativePath:{eq: "squareone.png"}) {
    childImageSharp {
      fluid(maxWidth:786) {
				...GatsbyImageSharpFluid   
      }
    }
  }
  offTheRalesImg: file(relativePath:{eq: "portfolio.png"}) {
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
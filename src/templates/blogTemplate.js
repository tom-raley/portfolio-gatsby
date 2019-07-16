import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const blogPostContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
  const titleStyle = {
    textAlign: 'center',
    paddingTop: '1em',
  }
  const dateStyle = {
    textAlign: 'center',
    paddingTop: '0.5em',
    paddingBottom: '3em',
    fontSize: '1em'
  }

  const blogPostContentStyle = {
    paddingTop: '3em',
    marginLeft: '15em',
    marginRight: '15em',
    lineHeight: '2em'
  }

  return (
    <Layout>
    <Navigation />
      <div className="blog-post-container">
        <div className="blog-post" style={blogPostContainerStyle}>
          <h1 style={titleStyle}>{frontmatter.title}</h1>
          <h2 style={dateStyle}>{frontmatter.author}     |     {frontmatter.date}</h2>
          <figure>
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
            <figcaption>{frontmatter.credit}</figcaption>
          </figure>
          <div
            className="blog-post-content"
            style={blogPostContentStyle}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
        author
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
       }
      }
    }
  }
`
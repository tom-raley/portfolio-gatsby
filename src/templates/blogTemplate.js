import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { date, image } = data.contentfulBlog
  const { childMarkdownRemark } = data.contentfulBlog.html // data.contentfulBlog.html holds our post data
  const { html } = childMarkdownRemark
  const { title, author } = childMarkdownRemark.frontmatter

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
      <SEO title={title}  />
    <Navigation />
      <div className="blog-post-container">
        <div className="blog-post" style={blogPostContainerStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <h2 style={dateStyle}>{author}     |     {date}</h2>
          <figure>
            <Img fluid={image.fluid} />
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
  query ($id: String!) {
    contentfulBlog(html: {childMarkdownRemark: {id: {eq: $id}}}) {
      date(formatString: "MMMM D, YYYY")
      image {
        fluid(maxWidth: 786) {
          aspectRatio
                    base64
                    src
                    srcSet
                    sizes
        }
      }
      html {
        childMarkdownRemark {
          id
          frontmatter {
            author
            title
          }
          html
        }
      }
    }
  }
`
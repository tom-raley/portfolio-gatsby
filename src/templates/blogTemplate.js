import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const divStyle = {
    display: flex,
    justifyContent: center
  }
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Navbar />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          style = {style}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
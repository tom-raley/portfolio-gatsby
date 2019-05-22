import React from "react";
import Link from "gatsby-link";
import Navigation from "../components/Navigation"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const postListStyle = {
    paddingTop: '3em',
    paddingBottom: '1em',
    marginBottom: '1em',
  }

  const previewStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: '15em',
    marginRight: '15em',
    borderBottom: '2px solid #e6e6e6',
  }

  const titleStyle = {
    fontSize: '2em',
    textDecoration: 'none',
    color: '#0981E5'
  }

  const dateStyle = {
    fontSize: '0.2em !important',
    fontWeight: '100 !important'
  }
  return (
    <Layout>
      <Navigation />
      <div className="blog-posts" style={postListStyle}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id} style={previewStyle}>
                <h1 style={titleStyle}>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h5 style={dateStyle}>{post.frontmatter.date}</h5>
                <p>{post.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
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
    }
  }
`;
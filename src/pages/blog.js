import React from "react";
import Link from "gatsby-link";
import BlogNavigation from "../components/BlogNavigation"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function Index({ data }) {
  const { edges: posts } = data.allContentfulBlog;
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
    fontSize: '1rem',
    fontWeight: '100 !important'
  }
  return (
    <Layout>
      <SEO title="Tom Raley's Blog" keywords={[`gatsby`, `application`, `react`, `web development`, `blog`]} />
      <BlogNavigation />
      <div className="blog-posts" style={postListStyle}>
        {posts
          .filter(post => post.node.html.childMarkdownRemark.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.html.childMarkdownRemark.id} style={previewStyle}>
                <h1 style={titleStyle}>
                  <Link to={`/blog/${post.html.childMarkdownRemark.frontmatter.path}`}>{post.html.childMarkdownRemark.frontmatter.title}</Link>
                </h1>
                <h5 style={dateStyle}>{post.date}</h5>
                <p>{post.html.childMarkdownRemark.excerpt}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlog(sort: {order: DESC, fields: [date]}) {
    edges {
      node {
        html {
          childMarkdownRemark {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              path
              author
            }
          }
        }
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
  }
`;
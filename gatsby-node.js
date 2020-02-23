/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allContentfulBlog {
        edges {
          node {
            html {
              childMarkdownRemark {
                id
                frontmatter {
                  path
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.html.childMarkdownRemark.frontmatter.path}`,
        component: blogPostTemplate,
        context: { id: node.html.childMarkdownRemark.id }
      })
    })
  })
}
import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />

      <div>
        <h1>My Blog</h1>
        <p>
          Wondering what I've been up to? Well this is a pretty great place to find out. Take a look at all my adventures that don't fit in my 280 characters on <a href="http://twitter.com/jnessview" target="_blank" rel="noopener noreferrer">my Twitter</a>
        </p>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.frontmatter.path}>
              <h3>
                {node.frontmatter.title}{" "} — {node.frontmatter.date}
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}

      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YY")
            path
          }
          excerpt
        }
      }
    }
  }
`
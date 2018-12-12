import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

const BlogTemplate = ({ data: { site, markdownRemark: post } }) => (
  <section style={{ maxWidth: '800px', margin: '0 auto' }}>
    <Helmet
      htmlAttributes={{ lang: 'th' }}
      title={`${post.frontmatter.title} - ${site.siteMetadata.title}`}
      meta={[
        { name: 'author', content: site.siteMetadata.author },
        {
          name: 'description',
          content: `${post.frontmatter.description} | ${post.excerpt} | ${
            site.siteMetadata.description
          }`,
        },
        { name: 'og:title', content: post.frontmatter.title },
        {
          name: 'og:description',
          content: `${post.frontmatter.description}`,
        },
        {
          name: 'og:image',
          content: post.frontmatter.thumbnail.childImageSharp.resize.src,
        },
      ]}
    />
    <div style={{ margin: '1.25rem 1.75rem' }}>
      <Link style={{ fontSize: '1rem' }} to="/">
        Home
      </Link>
      <h1 style={{ margin: '1.35rem 0' }}>{post.frontmatter.title}</h1>
      <p style={{ opacity: '0.5', marginBottom: '1rem', fontSize: '75%' }}>
        {post.frontmatter.date}
      </p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </div>
  </section>
)

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(format: PLAIN)
      frontmatter {
        path
        title
        description
        date(formatString: "DD MMMM, YYYY")
        thumbnail {
          childImageSharp {
            resize(width: 800, height: 420, cropFocus: CENTER, toFormat: JPG) {
              src
            }
          }
        }
      }
    }
  }
`

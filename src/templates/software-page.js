import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import metadata from '../content/site-metadata.json'  

export const SoftwarePageTemplate = ({ seo, title, subTitle, intro, architecture, integration, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (

    <main className="main">
      {seo && 
      <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.image && seo.url && <meta name="image" content={`${seo.url}${seo.image.publicURL}`} />}
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && seo.url && <meta property="og:image" content={`${seo.url}${seo.image.publicURL}`} />}
        <meta name="twitter:card" content="summary" />
        {seo.twitterUsername && (
          <meta name="twitter:creator" content={seo.twitterUsername} />
        )}        
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && seo.url && <meta name="twitter:image" content={`${seo.url}${seo.image.publicURL}`} />}
      </Helmet>
      }
      <div className="top-line"></div> 
      <section className="hero-intro is-primary hero">
        <div className="hero-body">
          <div className="container container-thin">
            <div className="hero-content">
              <h3 className="hero-title">{title}</h3>
              <div className="hero-entry"><p>{subTitle}</p></div>
            </div>
          </div>
        </div>
      </section> 
      <section className="section section-article-simple">
        <div className="container container-thin">
          <div className="section-body">
            <article className="article-simple default-page">
                <div className="video-wrapper">
                  <iframe width="835 px" height="469.687 px" src={intro.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <br/>
                <p>{intro.text}</p>
                <div className="columns">
                  {intro.columns.map((col, index) => {
                    return (
                      <div className="column" key={index}>
                      <div className="box is-purple">
                        <h3>{col.title}</h3>
                        {col.link.url.match(/^https?:\/\//) ? 
                          <OutboundLink href={col.link.url} target="_blank" rel="noopener noreferrer">
                            {col.link.text}
                          </OutboundLink>
                          :
                          <Link to={col.link.url}>
                            {col.link.text}
                          </Link>
                        }
                      </div>
                    </div>
                    )
                  })}
                </div>                                         
              <PageContent className="content" content={content} />
            </article>
          </div> 
        </div>
      </section>
    </main>
  )
}

SoftwarePageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  intro: PropTypes.object.isRequired,  
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SoftwarePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SoftwarePageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        intro={post.frontmatter.intro}        
        content={post.html}
      />
    </Layout>
  )
}

SoftwarePage.propTypes = {
  data: PropTypes.object.isRequired,
} 

export default SoftwarePage

export const softwarePageQuery = graphql`
  query SoftwarePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL            
          }
          twitterUsername
        }
        title
        subTitle
        intro {
          video
          text
          columns {
            title
            link {
              text
              url
            }
          }
        }        
      }
    }
  }
`

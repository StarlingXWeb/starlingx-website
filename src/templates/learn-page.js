import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'

export const LearnPageTemplate = ({ seo, title, subTitle, intro, content, useCases, endText, contentComponent }) => {
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
              <div className="content">
                <div className="video-wrapper">
                  <iframe width="835 px" height="469.687 px" src={intro.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                </div>
                <PageContent content={content} />
                {useCases.map((useCase, index) => {
                  if (index % 2 == 0) {
                    return (
                      <div className="columns use-case-wrapper">
                        <div className="column" key={index}>
                          <h3>{useCase.title}</h3>
                          <ul className="list-disc">
                            {useCase.columns.map((r, index) => <li key={index}>{r.row}</li>)}
                          </ul>
                        </div>
                        <div className="column" key={index}>
                          <img className="use-case-single-diagram" src={!!useCase.image.childImageSharp ? useCase.image.childImageSharp.fluid.src : useCase.image.publicURL} alt={useCase.title} />
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div className="columns use-case-wrapper">
                        <div className="column" key={index}>
                          <img className="use-case-single-diagram" src={!!useCase.image.childImageSharp ? useCase.image.childImageSharp.fluid.src : useCase.image.publicURL} alt={useCase.title} />
                        </div>
                        <div className="column" key={index}>
                          <h3>{useCase.title}</h3>
                          <ul className="list-disc">
                            {useCase.columns.map((r, index) => <li key={index}>{r.row}</li>)}
                          </ul>
                        </div>
                      </div>
                    )
                  }
                })}
                <hr />
                <p>{endText.text} <a href={endText.link.url} className="">{endText.link.text}</a>.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

LearnPageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  content: PropTypes.string,
  useCases: PropTypes.object,
  endText: PropTypes.object,
  contentComponent: PropTypes.func,
}

const LearnPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LearnPageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        intro={post.frontmatter.intro}
        useCases={post.frontmatter.useCases}
        endText={post.frontmatter.endText}
        content={post.html}
      />
    </Layout>
  )
}

LearnPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LearnPage

export const learnPageQuery = graphql`
  query LearnPage($id: String!) {
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
        }
        useCases {
          title
          columns {
            row
          }
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL            
          }          
        }
        endText {
          text
          link {
            text
            url
          }
        }
      }
    }
  }
`

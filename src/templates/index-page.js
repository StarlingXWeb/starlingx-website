import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import 'react-medium-image-zoom/dist/styles.css'

import leftArrow from '../img/svg/arrow-left.svg'
import metadata from '../content/site-metadata.json'

export const IndexPageTemplate = ({
  seo,
  header,
  mainpitch,
  values,
  tables
}) => (
  <div>
    {seo && 
    <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}        
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}        
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}          
    </Helmet>
    }
    <Header title={header.title} subTitle={header.subTitle} image={header.image} buttons={header.buttons} />
    <section className="section-article">
      <div className="container">
        <article className="article level">
        <div className="article-content">
            <div className="article__entry">
              <h2 id="about-starlingx">
                <a href="#about-starlingx" aria-hidden="true" className="header-anchor">#</a> 
                {mainpitch.title}
              </h2>
              {mainpitch.description.map((desc, index) => {
                return (
                  <p key={index}>
                    {desc.text}
                  </p> 
                )
              })}                            
              <p><a href="/learn/" className="link is-primary">Learn More &gt;</a></p>
            </div>
          </div>
          <figure className="article-image level-item level-right">
            <div>
              <img src={!!mainpitch.image.childImageSharp ? mainpitch.image.childImageSharp.fluid.src : mainpitch.image} />
            </div>
          </figure> 
        </article>
      </div>
    </section>

    <section className="section section-watermark is-dark" containerClassName="container-small" style={{backgroundImage: 'url(/img/watermark.png)'}}>
      <div className="container container-small">
        <div className="section section-body">
          <div className="columns is-multiline" style={{paddingTop:'50px'}}>
            {values.rows.map((value, index) => {
              return (
                <div className="column is-one-third values" key={index}>
                  <div className="article-small">
                    <figure className="article-small__image">
                      {(value.image.extension === 'svg' && !value.image.childImageSharp) ? 
                        <img src={!!value.image.publicURL ? value.image.publicURL : value.image} alt={value.title} />
                        :                     
                        <img src={!!value.image.childImageSharp ? value.image.childImageSharp.fluid.src : value.image } alt={value.title} />                  
                      }               
                    </figure>          
                    <div className="article-small__content">
                      <h6 className="article-small__title">{value.title}</h6>
                      <div className="article-small__entry">              
                        {value.text}
                      </div>
                    </div>
                  </div>
                </div>
              )          
            })}

          </div>
          <footer className="section-foot"></footer>
        </div>
      </div>
    </section>    
    <section className="section section-modified">
      <div className="container">
        <div className="section-body">
          <div className="section-inner">
            <div className="columns">
              <div className="column">
                <div className="list-numeric">
                  <h4 className="list-numeric-title">{tables.leftTable.title}</h4> 
                  <ul>
                    {tables.leftTable.rows.map((row, index) => {
                      return (
                        <li key={index}>
                          <h6>{row.title}</h6> 
                          <div dangerouslySetInnerHTML={{__html: row.text }}/>
                        </li> 
                      )
                    })}                    
                  </ul>
                </div>
              </div> 
              <div className="column">
                <div className="box is-primary-blue">
                  <h4 className="box-title">{tables.rightTable.title}</h4> 
                  <div className="box-entry">
                    <div dangerouslySetInnerHTML={{__html: tables.rightTable.text}} />
                  </div> 
                  <div className="box-actions">
                    {tables.rightTable.button.link.match(/^https?:\/\//) ? 
                      <OutboundLink className="button is-primary is-rounded" href={tables.rightTable.button.link} target="_blank" rel="noopener noreferrer">
                        <span>{tables.rightTable.button.text} </span> 
                        <span className="ico"><img src={leftArrow} alt="Call To Action" /></span>
                      </OutboundLink>
                      :
                      <Link to={tables.rightTable.button.link} className="button is-primary is-rounded">
                        <span>{tables.rightTable.button.text} </span> 
                        <span className="ico"><img src={leftArrow} alt="Call To Action" /></span>
                      </Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </div>
)

IndexPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  mainpitch: PropTypes.object,
  values: PropTypes.object,  
  tables: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        seo={frontmatter.seo}
        header={frontmatter.header}        
        mainpitch={frontmatter.mainpitch}
        values={frontmatter.values}
        tables={frontmatter.tables}
      />
      <Subscribe />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
        header {
          title
          subTitle {
            text
          }
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }      
          buttons {
            text
            link
          }
        }                
        mainpitch {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description {
            text
          }
        }
        values {
          rows {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }            
              extension
              publicURL
            }
            title
            text
          }
        }
        tables {
          leftTable {
            title
            rows {
              title
              text
            }
          }
          rightTable {
            title
            text
            button {
              text
              link
            }
          }
        }        
      }
    }
  }
`

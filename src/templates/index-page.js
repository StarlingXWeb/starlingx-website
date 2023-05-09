import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import VideoPlayer from '../components/VideoPlayer'
import VideoLink from '../components/VideoLink'
import Watermark from '../../static/img/watermark.png'

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
    <section className="hero-main home-hero is-primary hero hero-image" 
      style={{
        backgroundImage: `url(${
          !!header.image.childImageSharp ? header.image.childImageSharp.fluid.src : header.image
        })`,        
      }}>
      <div className="hero-body">
        <div className="container">
          <div className="hero-content">
            <h3 className="hero-title">{header.title}</h3> 
            {/* <div className="hero-subhead">
              {header.subTitle.map((line, index) => {
                return (
                  <React.Fragment>
                    <span>{line.text}</span>
                    {index === header.subTitle.length -1 ? '': <br/>}
                  </React.Fragment>
                )
              })}
            </div>  */}
            <div className="hero-actions">
              {header.buttons.map((button, index) => {
                return(
                  <React.Fragment>
                    <a href={button.link} className="button is-primary-dark is-rounded" key={index}>
                      <span>{button.text}</span> <span className="ico">
                        <img src={leftArrow} alt="Learn More" />
                      </span>
                    </a>
                    {index === header.buttons.length -1 ? '':'\u00A0'}
                  </React.Fragment>
                )
              })}                
            </div>
            <p className="home-survey-link">Are you using or evaluating StarlingX for your project? <a target="_blank" href="https://openinfrafoundation.formstack.com/forms/starlingx_user_survey">Take the user survey.</a></p>
          </div>
        </div>
      </div>
    </section>      
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

    <section className="section section-watermark is-dark" containerClassName="container-small">
      <div className="container container-small icon-container" >
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
                        <br />
                        <br />
                        <VideoLink link={value.link} href="/#video-player" linkText={value.linkText} />
                      </div>
                    </div>
                  </div>
                </div>
              )          
            })}

          </div>
          <div className="video-container">
            <VideoPlayer id="video-player" src="https://www.youtube.com/embed/B3uGlKLNoRE" />
          </div>
          <footer className="section-foot"></footer>
        </div>
      </div>
      <img className="watermark" src={Watermark} alt="Logo Watermark" />
    </section>    
    <section className="section section-modified section-margin-adjust">
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
            link
            linkText
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

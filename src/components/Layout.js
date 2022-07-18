import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import '../style/style.scss'
import { withPrefix } from 'gatsby'
import TopBar from './TopBar'
import 'navigation-widget/dist/index.css';
import { getEnvVariable, SPONSORED_PROJECT_ID } from '../utils/envVariables'

const TemplateWrapper = ({ children }) => {

  const currentProject = parseInt(getEnvVariable(SPONSORED_PROJECT_ID));

  return (
    <div>
      <Helmet>
        <html lang="en" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
      </Helmet>
      <SEO />
      <TopBar />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

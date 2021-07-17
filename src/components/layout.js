/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"
import { Container } from "@material-ui/core"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

//https://in-your-saas.github.io/material-ui-theme-editor/
const mainTheme = createTheme({
  palette: {
    common: { black: "rgba(126, 211, 33, 1)", white: "#fff" },
    background: { paper: "rgba(248, 231, 28, 0.16)", default: "#fafafa" },
    primary: {
      light: "rgba(126, 211, 33, 0.77)",
      main: "rgba(85, 157, 8, 1)",
      dark: "rgba(65, 117, 5, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(211, 140, 78, 1)",
      main: "rgba(219, 125, 43, 1)",
      dark: "rgba(206, 105, 16, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
})


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          phone
          aperture
          social_instagram
          address {
            city
            street
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={mainTheme}>
      <Container maxWidth="md">
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          phone={data.site.siteMetadata?.phone}
        />
        <div>
          <main>{children}</main>
          <Footer
            phone={data.site.siteMetadata?.phone}
            address={data.site.siteMetadata?.address}
            social_instagram={data.site.siteMetadata?.social_instagram}
            aperture={data.site.siteMetadata.aperture}
          />
        </div>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

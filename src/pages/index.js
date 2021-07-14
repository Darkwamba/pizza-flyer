import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Menu from "../components/menu/menu"
import Offers from "../components/offers"
import Instagram from "../components/instagram"

import '../styles/styles.scss'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="presentazione">

    <section className="hero">
    <StaticImage
      src="../images/pizza-home.jpg"
      maxwidth={1200}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A tasty pizza"
      style={{ marginBottom: `1.45rem` }}
    />
    </section>
    </div>
    <section className="container">
      <Menu/>
      <Offers/>
      <Instagram/>
    </section>
  </Layout>
)

export default IndexPage

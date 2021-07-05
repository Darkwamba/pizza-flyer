import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Menu from "../components/menu/menu"
import Offers from "../components/offers"
import Instagram from "../components/instagram"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="presentazione">
    <StaticImage
      src="../images/pizza-home.jpg"
      width={800}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A tasty pizza"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
    <Menu/>
    <Offers/>
    <Instagram/>
    
  </Layout>
)

export default IndexPage

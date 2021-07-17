import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from "../components/menu/menu"
import Offers from "../components/offers"
import Instagram from "../components/instagram"
import MyMap from "../components/mymap"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social_instagram
          phone
          coordinates
          address {
            city
            street
          }
        }
      }
    }
  `)
  return (
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
        <Menu />
        <Offers />
        <Instagram account_name={data.site.siteMetadata?.social_instagram}/>
        <MyMap
          address={data.site.siteMetadata?.address}
          coordinates={data.site.siteMetadata?.coordinates}
        />
      </section>
    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Instagram = () => {
  /*return (
    <div>
    {`Qua ci va instagram`}
  </div>
)*/

  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6, sort: { fields: [timestamp], order: [DESC] }) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            localFile {
              childImageSharp {
                gatsbyImageData(width: 280, height: 280, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `)
  const instaPosts = data.allInstaNode.edges
  //const account_name=process.env.INSTA_ACCOUNT_NAME
  const account_name = "piz.zart"

  return (
    <div className="insta">
      <h2>INSTAGRAM</h2>

      <span>
        <a href={"https://www.instagram.com/".concat(account_name).concat("/")}>
          {"@".concat(account_name)}
        </a>
      </span>
      <ul className="insta-posts">
        {instaPosts.map(({ node }) => {
          const image = getImage(node.localFile)
          return (
            <li key={node.id} className="insta-post">
              <GatsbyImage image={image} alt={"@".concat(account_name)} />
              <div className="overlay">
                <StaticImage
                  src="../images/like.png"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="like icon"
                />
                <p className="text">{node.likes}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Instagram

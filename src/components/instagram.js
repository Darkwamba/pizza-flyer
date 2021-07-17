import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Typography, Link } from "@material-ui/core"

const Instagram = ({account_name}) => {

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

  return (
    <div className="insta">
      <Typography variant="h5" component="p">Seguici su Instagram</Typography>
      <Typography variant="h5" component="p">
        <Link 
            href={"https://www.instagram.com/".concat(account_name).concat("/")}
            target="_blank"
            rel="noopener noreferrer"
          >
          {"@".concat(account_name)}
        </Link>
        </Typography>
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

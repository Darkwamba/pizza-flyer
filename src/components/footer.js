import * as React from "react"


const Footer = () => {
return (
    <footer
    style={{
      marginTop: `2rem`,
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` love using `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </footer>
)

}

export default Footer

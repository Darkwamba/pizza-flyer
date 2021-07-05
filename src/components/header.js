import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

//TODO parametrizzare n telefono

const Header = ({ siteTitle }) => {

  const phone=`051-00000000`
  return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h1 style={{ margin: 0 }}>
        {phone}
      </h1>
    </div>
  </header>
  )
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

//TODO parametrizzare n telefono

const Header = ({ siteTitle }) => {

  const phone=`051-00000000`
  return (
  <header>
      <span >
        <Link  to="/" className="siteName">
          {siteTitle}
        </Link>
      </span>
      <span className="phone">
        {phone}
      </span>
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

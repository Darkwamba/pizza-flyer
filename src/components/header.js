import * as React from "react"
import PropTypes from "prop-types"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = ({ siteTitle, phone }) => {
  return (
    <AppBar position="fixed">
      <Toolbar >
         <Typography variant="h4">{siteTitle}</Typography>
         <Typography variant="h6">{phone}</Typography>
      </Toolbar>
    </AppBar>
  )
 }

Header.propTypes = {
  siteTitle: PropTypes.string,
  phone: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  phone: `051-00000000`
}

export default Header

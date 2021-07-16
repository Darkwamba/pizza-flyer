import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  buttonContent:{
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  },
}))

const ToggleButton = ({ name, visible, children }) => {
  const [isOn, setOn] = useState(visible)
  const classes = useStyles();
  var element = (
    <Button classes={{ label: classes.buttonContent }} onClick={() => setOn(!isOn)} 
            variant="contained" 
            color="secondary"
            fullWidth={true}
          >      
        <span>{name}</span>
        <span className="material-icons">{isOn ? "arrow_drop_up" : "arrow_drop_down"}</span>
    </Button>
  )
  if (isOn) {
    return (
      <div>
        {element}
        {children}
      </div>
    )
  } else {
    return <div>{element}</div>
  }
}
ToggleButton.propTypes = {
  name: PropTypes.string,
  visible: PropTypes.bool,
}

ToggleButton.defaultProps = {
  name: ``,
  visible: false,
}
export default ToggleButton

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core"

const ToggleButton = ({ name, visible, children }) => {
  const [isOn, setOn] = useState(visible)

  var element = (
    <Button onClick={() => setOn(!isOn)} 
            variant="contained" 
            color="secondary"
            fullWidth={true}
          >
      {name} <span className="material-icons">{isOn ? "arrow_drop_up" : "arrow_drop_down"}</span>
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

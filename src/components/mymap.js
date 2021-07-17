import * as React from "react"
import { Typography } from "@material-ui/core"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  map:{
    height: '400px',
  },
}))
const MyMap = ({ address, coordinates }) => {
  const classes = useStyles();
  if (typeof window !== "undefined") {
    return (
      <React.Fragment>
        <Typography variant="h3" component="p">
          Dove siamo
        </Typography>
        <MapContainer
        className={classes.map}
          center={coordinates}
          zoom={16}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
                  <span className="material-icons">local_pizza</span> {address.street+","+address.city}
            </Popup>
          </Marker>
        </MapContainer>
      </React.Fragment>
    )
  }
  return null
}

MyMap.defaultProps = {
  address: {street:'via Europa unita 10',city:'Castello D\'Argile'},
  coordinates: [44.6803392, 11.2927718]
}

export default MyMap

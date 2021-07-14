import * as React from "react"
import { Grid, Card } from "@material-ui/core"

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={4}>
          <Card>
            <div className="address">
              <h3>Dove siamo?</h3>
              <span>via Roma 3</span>
              <span>Casalecchio</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <div className="hours">
              <h3>Orari</h3>
              <span>Mar-sab 12-14 18-22:30</span>
              <span>Dom 18-22:30</span>
              <span>Chiusi lunedì e festivi a pranzo</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <div className="contact">
              <h3>CONTATTI</h3>
              <span>051 44444444</span>
              <span>@yourSocialName</span>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <p>
            Creato da
            <a
              href="https://github.com/Darkwamba"
              target="_blank"
              rel="noopener noreferrer"
            >
              S.Martello
            </a>
          </p>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

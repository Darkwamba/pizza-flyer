import * as React from "react"
import { Grid, Card,Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card:{
    minHeight:'100px',
  }
}))

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={4}>
          <Card className={classes.card} > 
              <Typography variant="h6" component="p">Dove siamo?</Typography>
              <Typography variant="body1" component="p">via Roma 3</Typography>
              <Typography variant="body1" component="p"> Casalecchio</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card} >
            <Typography variant="h6" component="p">Orari</Typography>
            <Typography variant="body1" component="p">Mar-sab 12-14 18-22:30</Typography>
            <Typography variant="body1" component="p">Dom 18-22:30</Typography>
            <Typography variant="body2" component="p">Chiusi lunedì e festivi a pranzo</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card} > 
            <Typography variant="h6" component="p">Contatti</Typography>
            <Typography variant="body1" component="p">051 44444444</Typography>
            <Typography variant="body1" component="p">@yourSocialName</Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle1" component="p">
            Created by:
            <Link
              href="https://github.com/Darkwamba"
              target="_blank"
              rel="noopener noreferrer"
            >
            S.Martello
            </Link>
            </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

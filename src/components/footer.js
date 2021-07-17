import * as React from "react"
import { Grid, Card,Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  card:{
    minHeight:'100px',
  }
}))

const Footer = ({address,phone,social_instagram,aperture}) => {
  const classes = useStyles();
  return (
    <footer>
      <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={4}>
          <Card className={classes.card} > 
              <Typography variant="h6" component="p">Indirizzo</Typography>
              <Typography variant="body1" component="p">{address.street}</Typography>
              <Typography variant="body1" component="p">{address.city}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card} >
            <Typography variant="h6" component="p">Orari</Typography>
            {aperture.map(( node ,index) => {
              return <Typography key={index} variant="body1" component="p">{node}</Typography>
            })}
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card} > 
            <Typography variant="h6" component="p">Contatti</Typography>
            <Typography variant="body1" component="p">{phone}</Typography>
            <Typography variant="body1" component="p">@{social_instagram}</Typography>
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
            Salvatore Martello
            </Link>
            </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
Footer.defaultProps = {
  address: {street:'',city:''},
  phone: `none`,
  social_instagram: '',
  aperture:[''],
}
export default Footer

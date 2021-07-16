import React from 'react'
import { Card,CardContent,Typography,Paper } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    display: 'flex',
    width:'100%',
    flexFlow: 'column wrap',
  },
  row: {
    display: 'flex',
    flexFlow: 'row  wrap',
    justifyContent: 'space-between',
  },
  prices: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),

  },
  price:{
    display: 'flex',
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

  },
}));


const ItemPizza = ({ item }) => {
  const classes = useStyles()
  return (
    <Card key={item.idprodotto} className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.row}>
          <Typography variant="h6" component="div">
            {item.nome}
          </Typography>
          <div className={classes.prices}>
            <Paper className={classes.price}>
              <Typography variant="body" color="textSecondary" component="p">
                €{item.prezzoNormale}
              </Typography>
            </Paper>
            <Paper className={classes.price}>
              <Typography variant="body" color="textSecondary" component="p">
                €{item.prezzoTirata}
              </Typography>
            </Paper>
            <Paper className={classes.price}>
              <Typography variant="body" color="textSecondary" component="p">
                €{item.prezzoGigante}
              </Typography>
            </Paper>
          </div>
        </div>
        <Typography variant="body" color="textSecondary" component="p">
          Ingredienti:{" "}
          {item.ingredienti.reduce((htmlDesc, ingrediente, indice) => {
            if (indice === 0) return ingrediente.nome
            else return htmlDesc + "," + ingrediente.nome
          }, "")}
        </Typography>
      </CardContent>
    </Card>
  )
}
  
  export default ItemPizza;
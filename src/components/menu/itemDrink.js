import React from 'react'
import { Card,CardContent,Typography } from "@material-ui/core"

const ItemDrink = ({item}) => {

    return (
      <Card key={item.idprodotto} >
        <CardContent>
        <Typography variant="h6" component="span">
        {item.nome}
        </Typography>  
        <Typography variant="body" color="textSecondary" component="p">
        €{item.prezzoNormale}
        </Typography>     
        </CardContent>
      </Card>      
    )
  }
  
  export default ItemDrink;
import React from 'react'
import { Card,CardContent,Typography } from "@material-ui/core"

const ItemPizza = ({item}) => {

    return (
      <Card key={item.idprodotto} >
        <CardContent>
        <Typography variant="h6" component="span">
        {item.nome}
        </Typography>  
        <Typography variant="body" color="textSecondary" component="p">
        €{item.prezzoNormale}
        </Typography>
        <Typography variant="body" color="textSecondary" component="p">
        €{item.prezzoTirata}
        </Typography>
        <Typography variant="body" color="textSecondary" component="p">
        €{item.prezzoGigante}
        </Typography>
        <Typography variant="body" color="textSecondary" component="p">
        Ingredienti: {item.ingredienti.reduce((htmlDesc,ingrediente,indice) => {
                                      if (indice===0)
                                          return ingrediente.nome;
                                      else
                                          return htmlDesc + ","+ ingrediente.nome;
  
                                    },""
  
                  )}
        </Typography>        

        </CardContent>
      </Card>
     
    )
  }
  
  export default ItemPizza;
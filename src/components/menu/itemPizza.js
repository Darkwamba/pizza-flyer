import React from 'react'

const ItemPizza = ({item}) => {

    return (
                <div key={item.idprodotto} className="menu-item">
                  <div>{item.nome}</div>
                  <div>€{item.prezzoNormale}</div>
                  <div>€{item.prezzoBaby}</div>
                  <div>€{item.prezzoGigante}</div>
                  <div>Ingredienti: {item.ingredienti.reduce((htmlDesc,ingrediente,indice) => {
                                      if (indice===0)
                                          return ingrediente.nome;
                                      else
                                          return htmlDesc + ","+ ingrediente.nome;
  
                                    },""
  
                  )}</div>
                </div>       
    )
  }
  
  export default ItemPizza;
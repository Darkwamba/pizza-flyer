import React from 'react'

const ItemFood = ({item}) => {

    return (
                <div key={item.idprodotto} className="menu-item">
                  <div>{item.nome}</div>
                  <div>€{item.prezzoNormale}</div>
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
  
  export default ItemFood;
import React from 'react'

const ItemDrink = ({item}) => {

    return (
                <div key={item.idprodotto} className="menu-item">
                  <div>{item.nome}</div>
                  <div>€{item.prezzoNormale}</div> 
                </div>       
    )
  }
  
  export default ItemDrink;
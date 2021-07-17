import React from 'react'
import ItemPizza from './itemPizza';
import ItemFood from './itemFood';
import ItemDrink from './itemDrink';

const Category = ({data,type}) => {


  const items = data.edges;
  return (
    <div>
      <article className="table-items-grid">
        {
          items.map(({ node }) => {
          if(type==="pizza")
              return <ItemPizza key={node.idprodotto} item={node}/>
            else if(type==="drink")
              return <ItemDrink key={node.idprodotto} item={node}/>
            else
              return <ItemFood key={node.idprodotto}  item={node}/>
          })
        }
      </article>
    </div>
  )
}

export default Category;
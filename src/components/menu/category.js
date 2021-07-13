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
          if(type==="Pizza")
              return <ItemPizza item={node}/>
            else if(type==="Drink")
              return <ItemDrink item={node}/>
            else
              return <ItemFood item={node}/>
          })
        }
      </article>
    </div>
  )
}

export default Category;
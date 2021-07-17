import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Category from './category'
import ToggleButton  from './togglebutton'
import {Typography} from "@material-ui/core"

const getCategoryType= (name)=>{
  let regex = /pizz/i;
  if(name.match(regex)!==null)
    return 'pizza';
  let regex2 = /bibit|bevand|drink/i;
  if(name.match(regex2)!==null)
    return 'drink';
  else return 'food';
}

// eslint-disable-next-line no-unused-vars
const capitalizeFirstLetter = (string)=>{
  return string[0].toUpperCase() + string.slice(1);
}

const Menu = () => {
  const localmenu = useStaticQuery(graphql`
  {
    pizzeclassiche: allDatoCmsPizza(filter: {categoria: {idcategoria: {eq: 1}}}) {
      edges {
        node {
          idprodotto
          nome
          prezzoNormale
          prezzoTirata
          prezzoGigante
          order
          categoria {
            nome
          }
          ingredienti {
            nome
            categoria {
              nome
            }
          }
        }
      }
    }
    pizzegourmet: allDatoCmsPizza(filter: {categoria: {idcategoria: {eq: 2}}}) {
      edges {
        node {
          idprodotto
          nome
          prezzoNormale
          prezzoTirata
          prezzoGigante
          order
          categoria {
            nome
          }
          ingredienti {
            nome
            categoria {
              nome
            }
          }
        }
      }
    }
    allDatoCmsPiada {
      edges {
        node {
          idprodotto
          nome
          prezzoNormale
          order
          ingredienti {
            nome
            categoria {
              nome
            }
          }
          categoria {
            nome
          }
        }
      }
    }
    allDatoCmsBevanda {
      edges {
        node {
          idprodotto
          nome
          prezzoNormale
          order
          categoria {
            nome
          }
        }
      }
    }
  }
  `)
  return (
    <section className="menu">
      <Typography variant="h3" component="p">
        Menu
      </Typography>
      {Object.values(localmenu).map((categoryData, index) => {
        console.log(categoryData)
        let category = "undefined"
        if ("categoria" in categoryData.edges[0].node)
          category = categoryData.edges[0].node.categoria.nome
        let category_name = capitalizeFirstLetter(category)
        let category_type = getCategoryType(category)
        return (
          <ToggleButton key={index} name={category_name}>
            <Category data={categoryData} type={category_type} />
          </ToggleButton>
        )
      })}
    </section>
  )
}

export default Menu;
import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Category from './category'
import ToggleButton  from './togglebutton'

const Menu = () => {
  const localmenu = useStaticQuery(graphql`
  {
    pizzeclassiche: allDatoCmsPizza(filter: {categoria: {nome: {eq: "classiche"}}}) {
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
      pizzegourmet: allDatoCmsPizza(filter: {categoria: {nome: {eq: "gourmet"}}}) {
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
        }
      }
    }
  }
  `)

  /*const [menuCategory, setMenuCategory] = useState('hotDrinks');
  let SelectedCategory;
  if (menuCategory === 'hotDrinks' ) {
    SelectedCategory = HotDrinks;
  } else if (menuCategory === 'coldDrinks') {
    SelectedCategory = ColdDrinks
  } else if (menuCategory === 'breakfast') {
    SelectedCategory = Breakfast
  } else if (menuCategory === 'lunch') {
    SelectedCategory = Lunch
  }
  */
  return (
    <section className="menu">
      <h2>IL MENU</h2>
      <ToggleButton name="Pizze classiche">
          <Category data={localmenu.pizzeclassiche} type={"Pizza"} />
      </ToggleButton>
      <ToggleButton name="Pizze gourmet">
          <Category data={localmenu.pizzegourmet} type={"Pizza"} />
      </ToggleButton>
      <ToggleButton name="Panini">
          <Category data={localmenu.allDatoCmsPiada}  type={"Food"}  />
      </ToggleButton>
      <ToggleButton name="Bibite">
          <Category data={localmenu.allDatoCmsBevanda}  type={"Drink"} />
      </ToggleButton>
    </section>
  )
}

export default Menu;
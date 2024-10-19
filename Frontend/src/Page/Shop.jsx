import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsProvider'
import Product from '../Components/Product'

export default function Shop() {

  const ProductsData = useContext(ProductsContext);

  return (
    <section className='container'>
      {/* <aside className=''>
        s
      </aside> */}
      <ul className="products">
        {ProductsData.map((Item) => {
          return <Product Item={Item} key={Item.Id} />
        })}
      </ul>

    </section>
  )
}

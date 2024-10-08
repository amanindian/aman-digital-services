import React, { useContext } from 'react'
import { ProductsContext } from '../Context/ProductsProvider';
import Product from './Product';

const NewArrival = () => {
  const ProductsList = useContext(ProductsContext)

  return (
    <section className="container new-arrivals">
      <h2 className='title text-center '>New Arrival</h2>
      <div className="new-arrivals products">
        {
          ProductsList.slice(0, 5).map((Item) => {
            return <Product Item={Item} key={Item.Id} />
          })
        }
      </div>

    </section>
  )
}

export default NewArrival;
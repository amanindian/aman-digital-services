import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageNotFound from '../PageNotFound';
import { ProductsContext } from '../../Context/ProductsProvider';
import Product from '../Product';

export default function Category() {
    const { categoryParma} = useParams()
    const ProductsData = useContext(ProductsContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const products = ProductsData.filter((item) => {
                return item.Categories.includes(categoryParma)
            })
            setProducts(products);
        }
        fetchProduct();
    }, [ProductsData, categoryParma]);

    if (products.length === 0) {
        return <PageNotFound Page_Type="Category" />;
    }

    return (
        <section className="container">
            <h2 className='title text-center '>Products from {categoryParma} Category</h2>
            <div className="products">
                {
                    // In this function we are filtering products that if categoryParma (ProductCategory) Exist in that item then return 
                    products.map((Item) => {
                        return <Product Item={Item} key={Item.Id} />
                    })
                }
            </div>

        </section>
    )
}

import React, { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../../Context/ProductsProvider'
import Product from '../Product'


export default function RelatedProducts({ productParma }) {
    const ProductList = useContext(ProductsContext);


    const [products, setProducts] = useState([])

    useEffect(() => {

        // This is for Related Products 

        async function fetchProduct() {
            const categoriesName = ProductList.find((e) => e.Id === productParma).Categories;
            let filteredProducts = ProductList.map(item => {
                const matchingCategories = item.Categories.filter(category => categoriesName.includes(category));
                return { ...item, matchCount: matchingCategories.length };
            }).filter(item => item.matchCount > 0)
                .sort((a, b) => b.matchCount - a.matchCount)
                .slice(0, 5);
            setProducts(filteredProducts);
        }
        fetchProduct();
    }, [ProductList, productParma]);

    if (!products) {
        return <h1>There is No related Products </h1>;
    }

    return (
        <section className='container related-products'>
            <h1>Related Products</h1>
            <div className="products">
                {
                    products.map((Item) => {
                        return <Product Item={Item} key={Item.Id} />
                    })
                }
            </div>
        </section>
    )
}

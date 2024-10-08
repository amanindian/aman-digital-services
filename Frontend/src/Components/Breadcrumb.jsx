import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../Context/ProductsProvider';
import './Breadcrumb.css'

// import PropTypes from "prop-types";


export default function PageBreadcrumb() {
    const ProductsList = useContext(ProductsContext)
    const { PageTitle } = useParams()
    const { categoryParma } = useParams()
    const { productParma } = useParams()
    const [product, setProduct] = useState(null)





    useEffect(() => {
        async function fetchProduct() {
            const item = await ProductsList.find((item) => {
                return item.Id === Number.parseInt(productParma);
            });
            setProduct(item);
        }
        fetchProduct();
    }, [ProductsList, productParma]);




    if (product) {
        return (
            <section className='product-breadcrumb'>
                <Link to="/Shop">Shop &gt;&nbsp; </Link>
                <h2>{product.Categories.map((e, i) => {
                    return <Link to={`/category/${e}`} key={i} >{e}{i === product.Categories.length - 1 ? "" : ", "}</Link>
                })}	&gt;&nbsp; </h2>
                <h1> {product.Title}</h1>
            </section>
        )
    } else if (PageTitle) {
        return (
            <section className='product-breadcrumb'>
                <Link to="/">Home &gt;&nbsp;</Link>
                <h1>{PageTitle} </h1>
            </section>
        )
    } else if (categoryParma) {
        return (
            <section className='product-breadcrumb'>
                <Link to="/">Home &gt;&nbsp;</Link>
                <h1>{categoryParma} </h1>
            </section>
        )
    } else {
        return <h1>This is Wrong Breadcrumb</h1>
    }

}



// PageBreadcrumb.defaultProps = {
//     showCondition: true,
// };
// PageBreadcrumb.propType = {
//     showCondition: PropTypes.bool,
// };
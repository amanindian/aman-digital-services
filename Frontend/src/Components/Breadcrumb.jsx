import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../Context/ProductsProvider';
import './Breadcrumb.css'
import { Helmet } from 'react-helmet';

// import PropTypes from "prop-types";


function PageBreadcrumb({ title, description, author, keywords }) {
    const ProductsList = useContext(ProductsContext)
    const { PageTitle } = useParams()
    const { categoryParma } = useParams()
    const { productParma } = useParams()
    const [product, setProduct] = useState(null)




    const wordCapitalized = (sen) => {
        return sen
            .replace("-", " ")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

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
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                    <meta property="og:url" content={`https://amandigitalservices.netlify.app/product/${productParma}`} />
                    <title>{wordCapitalized(product.Title)} - Aman Digital Services</title>
                </Helmet>
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
                <Helmet>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                    <meta property="og:url" content={`https://amandigitalservices.netlify.app/${PageTitle}`} />
                    <title>{wordCapitalized(PageTitle)} - Aman Digital Services</title>
                </Helmet>
                <Link to="/">Home &gt;&nbsp;</Link>
                <h1>{PageTitle} </h1>
            </section>
        )
    } else if (categoryParma) {
        return (
            <section className='product-breadcrumb'>
                <Helmet>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <meta name="author" content={author} />
                    <meta property="og:url" content={`https://amandigitalservices.netlify.app/category/${categoryParma}`} />
                    <title>{wordCapitalized(categoryParma)} - Aman Digital Services</title>
                </Helmet>
                <Link to="/">Home &gt;&nbsp;</Link>
                <h1>{categoryParma} </h1>
            </section>
        )
    } else {
        return <h1>This is Wrong Breadcrumb</h1>
    }
}


PageBreadcrumb.defaultProps = {
    title: "Aman Digital Services",
    description: "Aman Digital Services is a web development and digital marketing company founded by Aman Kumar in March 2020 near Siwan, Bihar. ",
    keywords: "Web Development, E-Commerce, Digital Marketing, Web Designing, Aman Digital Services, Aman Kumar",
    author: "Aman Kumar",
};

export default PageBreadcrumb;





// PageBreadcrumb.defaultProps = {
//     showCondition: true,
// };
// PageBreadcrumb.propType = {
//     showCondition: PropTypes.bool,
// };
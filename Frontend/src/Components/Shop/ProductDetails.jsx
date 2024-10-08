import { ProductsContext } from "../../Context/ProductsProvider";
import React, { useState, useEffect, useContext, useRef } from "react";
import PageNotFound from "../PageNotFound";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {

  const ProductsData = useContext(ProductsContext);

  const [product, setProduct] = useState();
  const { productParma } = useParams();
  const [quantity, setQuantity] = useState(1);

  const mainProductImageRef = useRef(null)
  const handleImageClick = (image) => {
    mainProductImageRef.current.src = image
  }

  useEffect(() => {
    async function fetchProduct() {
      const item = await ProductsData.find((item) => {
        return item.Id === Number.parseInt(productParma);
      });
      setProduct(item);
    }
    fetchProduct();
  }, [ProductsData, productParma]);



  if (!product) {
    return <PageNotFound Page_Type="Product" />;
  }


  // const [selectedVariants, setSelectedVariants] = useState({});

  // const handleVariantChange = (variantName, value) => {
  //   setSelectedVariants({
  //     ...selectedVariants,
  //     [variantName]: value
  //   });
  // };

  return (
    <React.Fragment>
      <section className="container" id="product-section">
        <div className="product-image-section">
          <img
            className="product-main-image"
            src={product.Image}
            ref={mainProductImageRef}
            alt={product.Title}
          />
          <div className="product-images-gallery">
            <img
              src={product.Image}
              onClick={(e) => (mainProductImageRef.current.src = e.target.src)}
              key={0}
              alt={product.Title}
            />
            {product.Images.map((image, index) => {
              return (
                <img
                  src={image}
                  onClick={() => handleImageClick(image, index)}
                  alt={product.Title}
                  key={index + 1}
                />
              );
            })}
          </div>
        </div>
        <div className="Product-content-section">
          <h3 className="single-product-title">{product.Title}</h3>

          <p className="product-price">
            <b> Price: &nbsp;</b>
            <span className="Regular-price">
              &#8377;{product.Regular_Price}
            </span>
            <span className="Sale-price">&nbsp;&#8377;{product.Sale_Price}</span>
          </p>

          {product.Variants && product.Variants.length > 0 && (
            <div className="product-variants">
              {product.Varients.map((variant, index) => (
                <div key={index} className="variant-select">
                  <label className="variant-name">{variant.Name}:</label>
                  <div className="variant-options">
                    {variant.Values.map((value, idx) => (
                      <label key={idx} className="variant-option">
                        <input
                          type="radio"
                          name={variant.Name}
                          defaultValue={value}
                          // checked={selectedVariants[variant.Name] === value}
                          // onChange={() => {
                          //     // handleVariantChange(variant.Name, value)
                          //     console.log(value)
                          // }}
                          readOnly
                        />
                        {value}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="product-rating">
            <b>Rating: &nbsp; </b>
            {Array(Number.parseInt(product.Rating))
              .fill(0)
              .map((e, i) => {
                return (
                  <i className="fa-solid fa-star color-yellow" key={i}></i>
                );
              })}
            {Array(5 - Number.parseInt(product.Rating))
              .fill(0)
              .map((e, i) => {
                return (
                  <i
                    className="fa-regular fa-star"
                    key={+ i}
                  ></i>
                );
              })}
          </p>

          <p className="product-short-description"><b>Sort Description:</b> {product.Short_Description}</p>

          {/* Handle Cart and Quantity */}
          <div className="product-cart-quantity">
            <div className="quantity">
              <button
                className="product-quantity-button decrement"
                onClick={() => {
                  setQuantity((prevState) => {
                    return prevState >= 2 ? prevState - 1 : prevState;
                  });
                }}
              >
                -
              </button>
              <input
                type="number"
                name="quantity"
                value={quantity}
                className="product-quantity-input"
                readOnly
              />
              <button
                className="product-quantity-button"
                onClick={() => {
                  setQuantity((prevState) => {
                    return prevState + 1;
                  });
                }}
              >
                +
              </button>
            </div>

            <button className="add-to-cart">Add to Cart</button>
          </div>

          <p className="product-description"><b> Description: </b>
            {product.Description ? product.Description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
        </div>
      </section>

      <RelatedProducts productParma={product.Id} />
    </React.Fragment>
  );
};

export default ProductDetails;
import React, { useContext, useState, useEffect, useRef } from "react";
import "./ProductQuickView.css";
import { ProductsContext } from "../../Context/ProductsProvider";
import { StateContext } from "../../Context/StateProvider";

export default function ProductQuickView() {
    const { ProductQuickView, setProductQuickView, isEnquirePopup, setIsEnquirePopup } = useContext(StateContext);

    const ProductsData = useContext(ProductsContext);

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState();

    // On Click Esc Close Popup
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape" && (ProductQuickView.condition === true || isEnquirePopup === true)) {
                ProductQuickView.condition === true ?
                    setProductQuickView((prevState) => ({
                        ...prevState,
                        condition: false,
                    })) :
                    setIsEnquirePopup(false); //This is using for Quick Enquiry For Popup Close
            }
        };
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    });



    const popupRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setProductQuickView((prevState) => ({
                    ...prevState,
                    condition: false,
                }))
            }
        };

        if (ProductQuickView) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ProductQuickView, setProductQuickView]);



    const mainImageRef = useRef(null);
    // const [currentImage, setCurrentImage] = useState();
    const handleImageClick = (image) => {
        // setCurrentImage(image);
        mainImageRef.current.src = image;
    };

    useEffect(() => {
        async function fetchProduct() {
            const item = await ProductsData.find((item) => {
                return item.Id === Number.parseInt(ProductQuickView.targetId);
            });
            setQuantity(1);
            setProduct(item);
        }
        fetchProduct();
    }, [ProductsData, ProductQuickView]);






    return (
        ProductQuickView.condition && (
            <section className="quick-view-section">
                <div className="product-quick-view" ref={popupRef}>
                    <div className="product-image-section">
                        <i
                            className="material-symbols-outlined btn-qv-close"
                            onClick={() => {
                                setProductQuickView((prevState) => ({
                                    ...prevState,
                                    condition: false,
                                }));
                            }}
                        >close</i>
                        <div>
                            <img
                                className="product-main-image"
                                ref={mainImageRef}
                                src={product.Image}
                                alt={product.Title}
                            />
                            <div className="product-images-gallery">
                                <img
                                    src={product.Image}
                                    onClick={(e) => (mainImageRef.current.src = e.target.src)}
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

                        {product.Variants && product.Varients.length > 0 && (
                            <div className="product-variants">
                                {product.Variants.map((variant, index) => (
                                    <div key={index} className="variant-select">
                                        <label className="variant-name">{variant.Name}:</label>
                                        <div className="variant-options">
                                            {variant.Values.map((value, idx) => (
                                                <label key={idx} className="variant-option">
                                                    <input
                                                        type="radio"
                                                        name={variant.Name}
                                                        // value={value} // Remove this line
                                                        // checked={selectedVariants[variant.Name] === value}
                                                        checked={true}
                                                        onChange={() => {
                                                            // handleVariantChange(variant.Name, value)
                                                            console.log("first")
                                                        }}
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
                            <b>Rating:</b>
                            {Array(Number.parseInt(product.Rating))
                                .fill(0)
                                .map((e, i) => {
                                    return (
                                        <i class="material-icons color-yellow" key={i}>star</i>
                                    );
                                })}
                            {Array(5 - Number.parseInt(product.Rating))
                                .fill(0)
                                .map((e, i) => {
                                    return (
                                        <i class="material-symbols-outlined color-yellow" key={Number.parseInt(product.Rating) + i}
                                        >star</i>
                                    );
                                })}
                        </p>

                        <p className="pro   duct-short-description">
                            <b>Short Description:</b>{" "}
                            {product.Short_Description.slice(0, 150)}
                        </p>

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
                    </div>
                </div>
            </section>
        )
    );
}
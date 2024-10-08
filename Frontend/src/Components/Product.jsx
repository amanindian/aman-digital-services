import React from 'react'
import './Product.css'
import useCustomHook from '../Hooks/useCustomHook';


export default function Product({ Item }) {
    const [ShowProduct, handleProductQuickView] = useCustomHook();

    return (
        <React.Fragment>
            <div className="product" >
                <div className='product-image'><img src={Item.Image} alt={Item.Title} />
                    <div className="product-image-layer">
                        <h3>{Item.Title}</h3>
                        <i className="fa-solid fa-cart-plus" title="Add To Cart"></i>
                        <i className="fa-solid fa-arrow-up-right-from-square" title="View" onClick={() => {
                            ShowProduct(Item.Id)
                            window.scrollTo(0, 0)
                        }} ></i>
                    </div>
                </div>

                <div className="product-content">
                    <div>
                        <h3 className='product-title'>{Item.Title}</h3>
                        <div className='product-cnt'>
                            <p className='product-rating'>{
                                Array(Number.parseInt(Item.Rating)).fill(0).map((e, i) => {
                                    return <i className="fa-solid fa-star color-yellow" key={i}></i>
                                })
                            }
                                {
                                    Array(5 - Number.parseInt(Item.Rating)).fill(0).map((e, i) => {
                                        return <i className="fa-regular fa-star" key={Item.Rating + i}></i>
                                    })
                                }
                            </p>
                            <p className='product-price'>{Item.Ragular_Price}</p>
                        </div>
                    </div>
                    <button className="product-content-layer" onClick={() => {
                        handleProductQuickView(Item.Id)
                    }}>Quick View</button>
                </div>
            </div>
        </React.Fragment>
    )
}

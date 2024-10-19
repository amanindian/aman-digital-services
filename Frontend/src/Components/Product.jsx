import React from 'react'
import './Product.css'
import useCustomHook from '../Hooks/useCustomHook';


export default function Product({ Item }) {
    const [ShowProduct, handleProductQuickView] = useCustomHook();
    return (
        <React.Fragment>
            <li className="product" >
                <div className='product-image'><img src="https://cdn.mos.cms.futurecdn.net/fYiknYQteLSt8emoFfNWNH.jpg" alt={Item.Title} />
                    <div className="product-image-layer">
                        <h3>{Item.Title}</h3>
                        <i className="material-icons" title="Add To Cart">shopping_cart</i>
                        <i className="material-symbols-outlined" title="View" onClick={() => {
                            ShowProduct(Item.Id)
                            window.scrollTo(0, 0)
                        }} >bubble</i>
                    </div>
                </div>

                <div className="product-content">
                    <div>
                        <h3 className='product-title'>{Item.Title}</h3>
                        <div className='product-cnt'>
                            <p className='product-rating'>{
                                Array(Number.parseInt(Item.Rating)).fill(0).map((e, i) => {
                                    return <i className="material-icons color-yellow" key={i}>star</i>
                                })
                            }
                                {
                                    Array(5 - Number.parseInt(Item.Rating)).fill(0).map((e, i) => {
                                        return <i className="material-icons color-yellow" key={Item.Rating + i}>star_half</i>
                                    })
                                }                                {/* <i className="material-symbols-outlined color-yellow" >star</i> can be use*/}
                            </p>
                            <p className='product-price'>{Item.Ragular_Price}</p>
                        </div>
                    </div>
                    <button className="product-content-layer" onClick={() => {
                        handleProductQuickView(Item.Id)
                    }}>Quick View</button>
                </div>
            </li>
        </React.Fragment>
    )
}

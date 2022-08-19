import React from 'react';
import { Link } from 'react-router-dom';
import '../css/product-list-item.css';
import '../css/product-list-item-no-btn.css';

export default function ProductListItemNoBtn(props) {
    return (
        <div className="card h-100 product-list-item product-list-item-no-btn">
            <i className="fa-solid fa-heart plwishlist" data-bs-toggle="modal" data-bs-target="#addedwishlistModal" title="Wishlist"></i>
            <i className="fa-solid fa-cart-shopping mobcart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideCart" aria-controls="offcanvasSideCart"></i>
            <Link to='/single-product' target="_blank" className='h-100 d-flex align-items-center'>
                <img src="/images/headphone.jpg" className="card-img-top" alt="headphone" />
            </Link>
            <div className="card-body mp-content">
                <Link to='/single-product' target="_blank">
                    <h5 className="card-title fw-normal mt-0 mb-0 pl-title">{props.producttitle}</h5>
                    <div> <span className="product_price">₹ {props.productprice}</span> <strike className="product_discount fs-10"> <span className='product-o-price'>₹ 2,000</span> </strike><span className='min-price ms-1'> 45% Off</span> </div>
                </Link>
            </div>
        </div >
    )
}

ProductListItemNoBtn.defaultProps = {
    producttitle: 'boAt Rockerz 510 Super Extra Bass Bluetooth Headset',
    productprice: '999'
};
import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../CountdownTimer';
import '../css/product-list-item.css';

export default function ProductListItem(props) {

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
    return (
        <>
            <div className="card h-100 product-list-item">
                <i className="fa-solid fa-heart plwishlist" data-bs-toggle="modal" data-bs-target="#addedwishlistModal" title="Wishlist"></i>
                <i className="fa-solid fa-cart-shopping mobcart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideCart" aria-controls="offcanvasSideCart"></i>
                <div className='dis-percentage'>45%</div>

                <Link to='/single-product' target="_blank">
                    <img src="/images/headphone.jpg" className="card-img-top" alt="headphone" />
                </Link>
                <div className="card-body">

                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />

                    <Link to='/single-product' target="_blank">
                        <h5 className="card-title fw-normal fs-6 mt-2 pl-title">{props.producttitle}</h5>
                        <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span> <Link to="/" className='ms-2 fs-8'><i className="fa-solid fa-share"></i> Share</Link></div>
                        <div> <span className="product_price">₹ {props.productprice}</span> <strike className="product_discount"> <span className='product-o-price'>₹ 2,000</span> </strike> </div>
                        <div className='pc-sec'> <span className="product_saved">You Saved:</span> <span style={{ color: "black" }}>₹ 1,001</span> </div>
                    </Link>
                </div>
            </div >

        </>
    )
}

ProductListItem.defaultProps = {
    producttitle: 'boAt Rockerz 510 Super Extra Bass Bluetooth Headset',
    productprice: '999'
};
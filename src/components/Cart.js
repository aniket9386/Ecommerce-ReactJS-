import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';
import ProductCarousel from './ProductCarousel';
import RecentlyViewed from './RecentlyViewed';

function ButtonIncrement(props) {

    return (
        <button className='btn bg-primary text-white fw-bold btn-plus' onClick={props.onClickFunc}>
            +
        </button>
    )
}
function ButtonDecrement(props) {

    return (
        <button className='btn bg-primary text-white fw-bold btn-minus' onClick={props.onClickFunc}>
            -
        </button>
    )
}
function Display(props) {
    return (
        <label className='btn rounded-0 fw-bold btn-result' >{props.message}</label>
    )
}

export default function Cart() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    const [counter2, setCounter2] = useState(1);
    const incrementCounter2 = () => setCounter2(counter2 + 1);
    let decrementCounter2 = () => setCounter2(counter2 - 1);
    if (counter2 <= 1) {
        decrementCounter2 = () => setCounter2(1);
    }


    return (
        <>
            <section className="h-100 cart">
                <div className="container pt-0">
                    <div className="row d-flex justify-content-center mt-2">
                        <div className="col-md-8">
                            <div className="card mb-2">
                                <div className="card-header py-2 bg-secondary text-white">
                                    <h5 className="mb-0">Cart - 2 items</h5>
                                </div>
                                <div className="card-body">
                                    {/* <!-- Single item --> */}
                                    <div className="row">
                                        <div className="col-lg-2 col-3 mb-0 mb-lg-0 cart-p-image-sec">
                                            {/* <!-- Image --> */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="/images/headphone.jpg"
                                                    className="w-100" alt="headphone" />
                                                <a href="#!">
                                                    <div className="mask"></div>
                                                </a>
                                            </div>
                                            {/* <!-- Image --> */}
                                        </div>

                                        <div className="col-lg-6 col-5 mb-0 mb-lg-0">
                                            {/* <!-- Data --> */}
                                            <Link to="/single-product" target="_blank" className='p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</Link>
                                            <div className='cart-varient'>
                                                <p>Color: Red</p>
                                                <p>Size: Free</p>
                                            </div>
                                            <button type="button" className="btn btn-primary btn-sm me-1 mb-2 remove-item" data-mdb-toggle="tooltip"
                                                title="Remove item">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            <button type="button" className="btn btn-danger btn-sm me-1 mb-2 move-wish" data-mdb-toggle="tooltip"
                                                title="Move to the wish list">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                            <button type="button" className="btn btn-secondary btn-sm mb-2 share-item" data-mdb-toggle="tooltip"
                                                title="Share Product">
                                                <i className="fa-solid fa-share"></i>
                                            </button>
                                            {/* <!-- Data --> */}
                                        </div>

                                        <div className="col-lg-4 col-4 mb-0 mb-lg-0">
                                            {/* <!-- Quantity --> */}
                                            <div className="d-flex mb-4 quantity justify-content-end">
                                                <div>
                                                    <ButtonDecrement onClickFunc={decrementCounter} />
                                                    <Display message={counter} />
                                                    <ButtonIncrement onClickFunc={incrementCounter} />
                                                </div>
                                            </div>
                                            {/* <!-- Quantity --> */}

                                            {/* <!-- Price --> */}
                                            <p className="text-end"><span className='fw-bold'>₹999</span> <strike> ₹2,000 </strike><span className="min-price ms-1"> 45% Off</span>
                                            </p>
                                            {/* <!-- Price --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Single item --> */}

                                    <hr className="my-2" />

                                    {/* <!-- Single item --> */}
                                    <div className="row">
                                        <div className="col-lg-2 col-3 mb-0 mb-lg-0 cart-p-image-sec">
                                            {/* <!-- Image --> */}
                                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                <img src="/images/headphone.jpg" alt="headphone"
                                                    className="w-100" />
                                                <a href="#!">
                                                    <div className="mask"></div>
                                                </a>
                                            </div>
                                            {/* <!-- Image --> */}
                                        </div>

                                        <div className="col-lg-6 col-5 mb-0 mb-lg-0">
                                            {/* <!-- Data --> */}
                                            <Link to="/single-product" target="_blank" className='p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</Link>
                                            <div className='cart-varient'>
                                                <p>Color: Red</p>
                                                <p>Size: Free</p>
                                            </div>

                                            <button type="button" className="btn btn-primary btn-sm me-1 mb-2 remove-item" data-mdb-toggle="tooltip"
                                                title="Remove item">
                                                <i className="fas fa-trash"></i>
                                            </button>
                                            <button type="button" className="btn btn-danger btn-sm me-1 mb-2 move-wish" data-mdb-toggle="tooltip"
                                                title="Move to the wish list">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                            <button type="button" className="btn btn-secondary btn-sm mb-2 share-item" data-mdb-toggle="tooltip"
                                                title="Share Product">
                                                <i className="fa-solid fa-share"></i>
                                            </button>
                                            {/* <!-- Data --> */}
                                        </div>

                                        <div className="col-lg-4 col-4 mb-0 mb-lg-0">
                                            {/* <!-- Quantity --> */}
                                            <div className="d-flex mb-4 quantity justify-content-end">
                                                <div>
                                                    <ButtonDecrement onClickFunc={decrementCounter2} />
                                                    <Display message={counter2} />
                                                    <ButtonIncrement onClickFunc={incrementCounter2} />
                                                </div>
                                            </div>
                                            {/* <!-- Quantity --> */}

                                            {/* <!-- Price --> */}
                                            <p className="text-end"><span className='fw-bold'>₹999</span> <strike> ₹2,000 </strike><span className="min-price ms-1"> 45% Off</span>
                                            </p>
                                            {/* <!-- Price --> */}
                                        </div>
                                    </div>
                                    {/* <!-- Single item --> */}
                                </div>
                            </div>
                            <div className="card mb-2">
                                <div className="card-body">
                                    <p><strong>Expected shipping delivery</strong></p>
                                    <div className="input-group mb-3 pincode">
                                        <input type="text" className="form-control" placeholder="Enter Your Pincode" aria-label="Enter Your Pincode" aria-describedby="pincode" />
                                        <button className="btn btn-primary" type="button" id="pincode">Check</button>
                                    </div>
                                    <p className="mb-0 text-dark">Delivery in 5 - 7 days | ₹40
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div id="price-details" className="card mb-2">
                                <div className="card-header py-2 bg-secondary text-white">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Price (2 Items)
                                            <span>₹4,000</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Discount
                                            <span className='min-price'>-₹2,002</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Shipping
                                            <span>₹40</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            GST (18%)
                                            <span>₹40</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                                <strong>
                                                    <p className="mb-0">(Including GST)</p>
                                                </strong>
                                            </div>
                                            <span><strong>₹2,078</strong></span>
                                        </li>
                                    </ul>
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="Apply Coupon Code" aria-label="Apply Coupon Code" aria-describedby="Coupon" />
                                        <button className="btn btn-primary" type="button" id="pincode">Apply</button>
                                    </div>
                                    {/* <!-- Offer trigger modal --> */}
                                    <div className='mb-2'>
                                        <button type="button" className="ps-0 btn offer-btn fw-bold text-secondary available-offer-btn" data-bs-toggle="modal" data-bs-target="#offers">
                                            <img src="/images/discount.png" alt='offer' /> Available Offers
                                        </button>
                                    </div>

                                    <Link to="/checkout" type="button" className="btn w-100 px-5 py-2 btn-primary btn-block btn-place-order place-order-pc">
                                        PLACE ORDER
                                    </Link>
                                    <div className='place-order-mob'>
                                        <div><span className='place-order-price'>2,078</span>
                                            <a href='#price-details'>View price details</a>
                                        </div>
                                        <div><Link to="/checkout" type="button" className='btn w-100 px-5 py-2 btn-primary'>Place Order</Link></div>
                                    </div>
                                    <div className='min-price mt-2'>You will save ₹2,002 on this order</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductCarousel productsectitle="You May Also Like" />
                <RecentlyViewed productsectitle="Recently Viewed" />
            </section >

        </>
    )
}

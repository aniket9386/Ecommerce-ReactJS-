import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function CustomerWishlistPage() {
    return (
        <>
            <div className='container customer-wishlist-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='customer-wishlist-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='customer-wishlist-r-sidebar'>
                            <h5>My Wishlist (6)</h5>
                            <div className='wishlist-sec'>
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span>
                                            </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span> </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span> </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span> </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span> </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='wishlists'>
                                    <div className='wishlist-link'><Link to="/wishlist"><i className="fa-solid fa-trash opacity-50"></i></Link></div>
                                    <div className='wishlist-item'>
                                        <div className='wishlist-item-img'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                        <div className='wishlist-item-text'>
                                            <div className="wishlist-product_name"><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</Link></div>
                                            <div className="wishlist-product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span></div>
                                            <div className='wishlist-p-price-sec'> <span className="wishlist-product_price">₹ 1,199</span> <strike className="wishlist-product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="wishlist-p-dis-percentage"> 69% off</span> </div>
                                            <Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart" className='btn btn-primary wishlist-add-cart'>Add to Cart</Link>
                                            <Link to="/checkout" className='btn btn-secondary ms-2 wishlist-add-cart wishlist-buy-now'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

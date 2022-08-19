import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function CustomerReviewPage() {
    return (
        <>
            <div className='container customer-review-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='customer-review-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='customer-review-r-sidebar'>
                            <h5>My Reviews (2)</h5>
                            <div className='rating-review'>
                                <div className='d-flex'>
                                    <div className='customer-product-review-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                    <div className='rating-review-item customer-review-item'>
                                        <div className='edit-address'>
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                            <div className='edit-delete'>
                                                <div><span>Edit</span></div>
                                                <div><span>Delete</span></div>
                                            </div>
                                        </div>
                                        <Link to="/single-product" target="_blank"><h6 className='text-muted dashboart-p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</h6></Link>
                                        <div>
                                            <span className="badge badge-success"><i className="fa fa-star"></i> 4.5</span>
                                            <span className='review-title'>Mind-blowing purchase</span>
                                        </div>
                                        <p className='customer-review-text'>Nice product. Happy with the bass quality. One information I would like to share that the logo has been changed so don't need to worry.
                                            <br />I hope this review will help you.</p>
                                        <div className='p-review-image customer-p-review-image'>
                                            <img src="/images/boat3.jpg" alt="headphone" />
                                            <img src="/images/boat2.jpg" alt="headphone" />
                                            <img src="/images/boat4.jpg" alt="headphone" />
                                        </div>
                                        <div className='review-customer'>
                                            <p className='review-customer-item review-customer-name'>Ashutosh Anand Tiwari</p>
                                            <i className="fa-solid fa-circle-check"></i>
                                            <p className='review-customer-item review-customer-address'>Certified Buyer, Noida</p>
                                            <p className='review-customer-item review-date'>Oct, 2018</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='d-flex'>
                                    <div className='customer-product-review-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                    <div className='rating-review-item customer-review-item'>
                                        <div className='edit-address'>
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                            <div className='edit-delete'>
                                                <div><span>Edit</span></div>
                                                <div><span>Delete</span></div>
                                            </div>
                                        </div>
                                        <Link to="/single-product" target="_blank"><h6 className='text-muted dashboart-p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</h6></Link>
                                        <div>
                                            <span className="badge badge-success"><i className="fa fa-star"></i> 4.5</span>
                                            <span className='review-title'>Mind-blowing purchase</span>
                                        </div>
                                        <p className='customer-review-text'>Nice product. Happy with the bass quality. One information I would like to share that the logo has been changed so don't need to worry.
                                            <br />I hope this review will help you.</p>
                                        <div className='p-review-image customer-p-review-image'>
                                            <img src="/images/boat3.jpg" alt="headphone" />
                                            <img src="/images/boat2.jpg" alt="headphone" />
                                            <img src="/images/boat4.jpg" alt="headphone" />
                                        </div>
                                        <div className='review-customer'>
                                            <p className='review-customer-item review-customer-name'>Ashutosh Anand Tiwari</p>
                                            <i className="fa-solid fa-circle-check"></i>
                                            <p className='review-customer-item review-customer-address'>Certified Buyer, Noida</p>
                                            <p className='review-customer-item review-date'>Oct, 2018</p>
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

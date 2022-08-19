import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function MyOrderPage() {
    return (
        <>
            <div className='container my-order-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='my-order-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='my-order-r-sidebar'>
                            <h5 className='mb-4'>My Orders</h5>
                            <div className='myorder-sec'>

                                <div className='myorder-item'>
                                    <Link to="/account/order-status">
                                        <div className='d-flex'>
                                            <div className='myorder-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                            <div className='myorder-p-text d-flex'>
                                                <div className='myorder-p-name'>
                                                    <p className='order-product-name mb-2'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                    <p className='fs-8 mb-1'>Color: Red</p>
                                                    <p className='fs-8 mb-1'>Size: Free</p>
                                                </div>
                                                <div>₹999</div>
                                                <div className='order-delivery-status'><span><i className="fa-solid fa-circle text-success me-2 fs-8"></i>Delivered on Aug 09, 2021</span><br /><span className='fs-8 fw-normal'>Your item has been delivered</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className='myorder-item'>
                                    <Link to="/account/order-status">
                                        <div className='d-flex'>
                                            <div className='myorder-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                            <div className='myorder-p-text d-flex'>
                                                <div className='myorder-p-name'>
                                                    <p className='order-product-name mb-2'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                    <p className='fs-8 mb-1'>Color: Red</p>
                                                    <p className='fs-8 mb-1'>Size: Free</p>
                                                </div>
                                                <div>₹999</div>
                                                <div className='order-delivery-status'><span><i className="fa-solid fa-circle text-danger me-2 fs-8"></i>
                                                    Cancelled on Mar 10, 2021</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className='myorder-item'>
                                    <Link to="/account/order-status">
                                        <div className='d-flex'>
                                            <div className='myorder-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                            <div className='myorder-p-text d-flex'>
                                                <div className='myorder-p-name'>
                                                    <p className='order-product-name mb-2'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                    <p className='fs-8 mb-1'>Color: Red</p>
                                                    <p className='fs-8 mb-1'>Size: Free</p>
                                                </div>
                                                <div>₹999</div>
                                                <div className='order-delivery-status'><span><i className="fa-solid fa-circle text-success me-2 fs-8"></i>Delivered on Aug 09, 2021</span><br /><span className='fs-8 fw-normal'>Your item has been delivered</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className='myorder-item'>
                                    <Link to="/account/order-status">
                                        <div className='d-flex'>
                                            <div className='myorder-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                            <div className='myorder-p-text d-flex'>
                                                <div className='myorder-p-name'>
                                                    <p className='order-product-name mb-2'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                    <p className='fs-8 mb-1'>Color: Red</p>
                                                    <p className='fs-8 mb-1'>Size: Free</p>
                                                </div>
                                                <div>₹999</div>
                                                <div className='order-delivery-status'><span><i className="fa-solid fa-circle text-danger me-2 fs-8"></i>
                                                    Cancelled on Mar 10, 2021</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className='myorder-item'>
                                    <Link to="/account/order-status">
                                        <div className='d-flex'>
                                            <div className='myorder-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                            <div className='myorder-p-text d-flex'>
                                                <div className='myorder-p-name'>
                                                    <p className='order-product-name mb-2'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                    <p className='fs-8 mb-1'>Color: Red</p>
                                                    <p className='fs-8 mb-1'>Size: Free</p>
                                                </div>
                                                <div>₹999</div>
                                                <div className='order-delivery-status'><span><i className="fa-solid fa-circle text-success me-2 fs-8"></i>Delivered on Aug 09, 2021</span><br /><span className='fs-8 fw-normal'>Your item has been delivered</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

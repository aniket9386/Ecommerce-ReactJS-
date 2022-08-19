import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function OrderStatusPage() {
    return (
        <>
            <div className='container my-order-tracking-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='my-order-tracking-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='my-order-tracking-r-sidebar'>
                            <h5 className='mb-4'>My Order Status</h5>
                            <div className='myorder-tracking-sec'>
                                <div className='ordered-product d-flex align-items-center'>
                                    <div className='order-status-p-image'><img src="/images/boat1.jpg" alt="headphone" /></div>
                                    <div className='order-status-p-name'><Link to="/single-product" target="_blank">boAt Rockerz 510 Super Extra Bass Bluetooth Headset</Link><span className='order-status-p-price'>₹999</span></div>
                                </div>
                                <div className='order-track-status mt-4'>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="bg-white p-2 border rounded px-3">
                                                <div className="d-flex flex-row justify-content-between order">
                                                    <div className="d-flex flex-column order-details"><h6>Your item is out for delivery</h6><span className="date">by DHFL on 21 Mar, 2022<br />Delivery By 11am, <b>Today</b></span></div>
                                                    <div className="tracking-details"><button className="btn btn-primary" type="button">Track</button></div>
                                                </div>
                                                <hr className="divider mb-4" />
                                                <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="dot order-active"></span>
                                                    <hr className="flex-fill track-line order-active" /><span className="dot order-active"></span>
                                                    <hr className="flex-fill track-line order-active" /><span className="dot order-active"></span>
                                                    <hr className="flex-fill track-line order-active" /><span className="dot big-dot order-active"></span>
                                                    <hr className="flex-fill track-line" /><span className="d-flex justify-content-center align-items-center big-dot dot"><i className="fa fa-check text-white"></i></span></div>
                                                <div className="d-flex flex-row justify-content-between align-items-center delivery-dates">
                                                    <div className="d-flex flex-column align-items-start my-fs-9"><span>25 Mar</span><span>Order placed</span></div>
                                                    <div className="d-flex flex-column justify-content-center my-fs-9"><span>25 Mar</span><span>Order processed</span></div>
                                                    <div className="d-flex flex-column justify-content-center my-fs-9"><span>26 Mar</span><span>Order Shipped</span></div>
                                                    <div className="d-flex flex-column my-fs-9"><span>28 Mar</span><span>Out for delivery</span></div>
                                                    <div className="d-flex flex-column align-items-end my-fs-9"><span>28 Mar</span><span>Delivered</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='order-status-address-sec d-flex mt-4'>
                                    <div className='order-status-address'>
                                        <p className='delivery-head'>Delivery Address</p>
                                        <p className='status-c-name'>Aniket Kumar Gupta</p>
                                        <p className='fs-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor - 123456</p>
                                        <p className='status-phone-number'>Phone number</p>
                                        <p className='fs-14'>+91 12345 74521</p>
                                    </div>
                                    <div className='download-invoice'>
                                        <p className='delivery-head'>More actions</p>
                                        <Link to="/account/order-status"><i className="fa-solid fa-file-arrow-down me-2"></i>Download Invoice</Link>
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

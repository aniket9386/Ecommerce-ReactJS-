import React from 'react';
import '../css/ordertracking.css'

export default function OrderTracking() {
    return (
        <div className="container-fluid mb-1">
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-white p-2 border rounded px-3">
                        <div className="d-flex flex-row justify-content-between order">
                            <div className="d-flex flex-column order-details"><h5>Your item is out for delivery</h5><span className="date">by DHFL on 21 Mar, 2022<br />Delivery By 11am, <b>Today</b></span></div>
                            <div className="tracking-details"><button className="btn btn-primary" type="button">Track</button></div>
                        </div>
                        <hr className="divider mb-4" />
                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center"><span className="dot order-active"></span>
                            <hr className="flex-fill track-line order-active" /><span className="dot order-active"></span>
                            <hr className="flex-fill track-line order-active" /><span className="dot order-active"></span>
                            <hr className="flex-fill track-line order-active" /><span className="dot big-dot order-active"></span>
                            <hr className="flex-fill track-line" /><span className="d-flex justify-content-center align-items-center big-dot dot"><i className="fa fa-check text-white"></i></span></div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
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
    )
}

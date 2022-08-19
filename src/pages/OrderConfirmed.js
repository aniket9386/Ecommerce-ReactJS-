import React from 'react';
import { Link } from 'react-router-dom';
import RecentlyViewed from '../components/RecentlyViewed';
import '../css/orderconfirmed.css';

export default function OrderConfirmed() {
    return (
        <>
            <div className='order-complete-sec text-center my-1 container-fluid'>
                <div className='py-5 bg-white'>
                    <h1>ORDER CONFIRMED</h1>
                    <div className='mt-5'><i className="fa-solid fa-circle-check text-primary"></i></div>
                    <div>
                        <h4>Thank you, Customer Name. Your order is confirmed.</h4>
                        <p>Your order hasn't shipped yet but we will send you ane email when it does.</p>
                        <Link to="/account/orders" className='btn btn-primary btn-confirm-page'>View Order</Link>
                    </div>
                </div>
            </div>
            <RecentlyViewed productsectitle="Recently Viewed" />
        </>
    )
}

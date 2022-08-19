import React from 'react';
import { Link } from 'react-router-dom';
import RecentlyViewed from './RecentlyViewed';

export default function EmptyCart() {
    return (
        <>
            <div className="container-fluid py-1">
                <div className="row m-0">
                    <div className="col-md-12 py-3 bg-white m-0">
                        <div className="card py-5 border-0 rounded-0">
                            <div className="card-body cart">
                                <div className="col-sm-12 empty-cart-cls text-center"> <i className="fa-solid fa-cart-arrow-down fs-1 pb-4"></i>
                                    <h3><strong>Your Cart is Empty</strong></h3>
                                    <h4>Add something to Place Order :)</h4> <Link to="/collections/all" className="btn btn-primary fs-5 px-4 m-3">continue shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RecentlyViewed productsectitle="Recently Viewed" />
        </>
    )
}

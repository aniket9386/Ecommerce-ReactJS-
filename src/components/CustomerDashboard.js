import React from 'react';
import { Link } from 'react-router-dom';
import '../css/customer-dashboard.css';

export default function CustomerDashboard() {
    return (
        <>
            <div className='container py-4'>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3 c-dashboard-l-sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='user-name'>
                            <img src='/images/user.svg' alt='user' />
                            <div className='user-name-sec'>
                                <span className='user-greetings'>Hello,</span>
                                User Name</div>
                        </div>
                        <button className="nav-link c-my-order" id="c-my-order-tab" data-bs-toggle="pill" data-bs-target="#c-my-order" type="button" role="tab" aria-controls="c-my-order" aria-selected="false"><i className="fa-solid fa-file-export"></i>MY ORDERS</button>
                        <h6 className='c-dashboard-heading'><i className="fa-solid fa-user-large"></i>ACCOUNT SETTINGS</h6>
                        <button className="nav-link active" id="profile-information-tab" data-bs-toggle="pill" data-bs-target="#profile-information" type="button" role="tab" aria-controls="profile-information" aria-selected="true">Profile Information</button>
                        <button className="nav-link" id="manage-address-tab" data-bs-toggle="pill" data-bs-target="#manage-address" type="button" role="tab" aria-controls="manage-address" aria-selected="false">Manage Addresses</button>
                        <h6 className='c-dashboard-heading'><i className="fa-solid fa-wallet"></i>PAYMENTS</h6>
                        <button className="nav-link" id="gift-card-tab" data-bs-toggle="pill" data-bs-target="#gift-card" type="button" role="tab" aria-controls="gift-card" aria-selected="false">Gift Cards</button>
                        <button className="nav-link" id="saved-card-tab" data-bs-toggle="pill" data-bs-target="#saved-card" type="button" role="tab" aria-controls="saved-card" aria-selected="false">Saved Cards</button>
                        <h6 className='c-dashboard-heading'><i className="fa-solid fa-address-card"></i>MY STUFF</h6>
                        <button className="nav-link" id="my-coupons-tab" data-bs-toggle="pill" data-bs-target="#my-coupons" type="button" role="tab" aria-controls="my-coupons" aria-selected="false">My Coupons</button>
                        <button className="nav-link" id="my-review-rating-tab" data-bs-toggle="pill" data-bs-target="#my-review-rating" type="button" role="tab" aria-controls="my-review-rating" aria-selected="false">My Reviews & Ratings</button>
                        <button className="nav-link" id="all-notifications-tab" data-bs-toggle="pill" data-bs-target="#all-notifications" type="button" role="tab" aria-controls="all-notifications" aria-selected="false">All Notifications</button>
                        <button className="nav-link" id="c-my-wishlist-tab" data-bs-toggle="pill" data-bs-target="#c-my-wishlist" type="button" role="tab" aria-controls="c-my-wishlist" aria-selected="false">My Wishlist</button>
                        <Link to='/customer-dashboard' className='c-dashboard-heading user-logout'><i className="fa-solid fa-power-off"></i>Logout</Link>

                    </div>
                    <div className="tab-content c-dashboard-r-sidebar" id="v-pills-tabContent">
                        <div className="tab-pane fade" id="c-my-order" role="tabpanel" aria-labelledby="c-my-order-tab">My Order</div>
                        <div className="tab-pane fade show active" id="profile-information" role="tabpanel" aria-labelledby="profile-information-tab">Profile Information</div>
                        <div className="tab-pane fade" id="manage-address" role="tabpanel" aria-labelledby="manage-address-tab">Manage Address</div>
                        <div className="tab-pane fade" id="gift-card" role="tabpanel" aria-labelledby="gift-card-tab">Gift Card</div>
                        <div className="tab-pane fade" id="saved-card" role="tabpanel" aria-labelledby="saved-card-tab">Saved Card</div>
                        <div className="tab-pane fade" id="my-coupons" role="tabpanel" aria-labelledby="my-coupons-tab">My Coupons</div>
                        <div className="tab-pane fade" id="my-review-rating" role="tabpanel" aria-labelledby="my-review-rating-tab">My Reviews & Ratings</div>
                        <div className="tab-pane fade" id="all-notifications" role="tabpanel" aria-labelledby="all-notifications-tab">All Notifications</div>
                        <div className="tab-pane fade" id="c-my-wishlist" role="tabpanel" aria-labelledby="c-my-wishlist-tab">My Wishlist</div>
                    </div>
                </div>
            </div>
        </>
    )
}

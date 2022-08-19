import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerDashboardSidebar() {
    return (
        <>
            <div className='c-dashboard-sidebar'>
                <div className='user-name'>
                    <img src='/images/user.svg' alt='user' />
                    <div className='user-name-sec'>
                        <span className='user-greetings'>Hello,</span>
                        User Name</div>
                </div>
                <Link to='/account/orders' className="c-my-order" id="c-my-order-tab"><h6><i className="fa-solid fa-file-export"></i>MY ORDERS</h6></Link>
                <h6 className='c-dashboard-heading'><i className="fa-solid fa-user-large"></i>ACCOUNT SETTINGS</h6>
                <Link to='/account' className="profile-information" id="profile-information-tab">Profile Information</Link>
                <Link to='/account/address' className="manage-address" id="manage-address-tab">Manage Addresses</Link>
                <h6 className='c-dashboard-heading'><i className="fa-solid fa-wallet"></i>PAYMENTS</h6>
                <Link to='/account/carddetails' className="saved-cards" id="saved-card-tab">Saved Cards</Link>
                <h6 className='c-dashboard-heading'><i className="fa-solid fa-address-card"></i>MY STUFF</h6>
                <Link to='/account/rewards' className="my-coupons" id="my-coupons-tab">My Coupons</Link>
                <Link to='/account/reviews' className="my-review-rating" id="my-review-rating-tab">My Reviews & Ratings</Link>
                <Link to='/notifications' className="all-notification" id="all-notifications-tab">All Notifications</Link>
                <Link to='/wishlist' className="my-wishlist" id="c-my-wishlist-tab">My Wishlist</Link>
                {/* <Link to='/' className='c-dashboard-heading user-logout'><i className="fa-solid fa-power-off"></i>Logout</Link> */}
                <p className='py-1'></p>

            </div>
        </>
    )
}

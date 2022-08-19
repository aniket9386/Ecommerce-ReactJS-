import React from 'react';
import { Link } from 'react-router-dom';
import '../css/myaccount-mob.css';

export default function CustomerAccountMob() {
    return (
        <>
            <div className='myaccount-mob-header'>
                <img className='myaccount-mob-image' src="/images/user.svg" alt="user" />
                <h3 className='myaccount-mob-name'>Customer Name</h3>
                <p><span className='myaccount-mob-number'>+91 1234567891</span>
                    <span className='myaccount-mob-email'>yourmail@yourwebsite.com</span>
                </p>
                <Link to="/account" className='text-light'><i className="fa-solid fa-pen-to-square profile-edit-mob"></i></Link>
            </div>
            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>My Order</h4>
                <hr />
                <Link to="/account/orders" className='myaccount-mob-url'>View all Orders</Link>
            </div>

            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>My Coupons</h4>
                <hr />
                <Link to="/account/rewards" className='myaccount-mob-url'>View My Coupons</Link>
            </div>

            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>My Wishlist</h4>
                <hr />
                <Link to="/wishlist" className='myaccount-mob-url'>View My Wishlist</Link>
            </div>

            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>Saved Cards</h4>
                <hr />
                <Link to="/account/carddetails" className='myaccount-mob-url'>View all Cards</Link>
            </div>

            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>My Reviews</h4>
                <hr />
                <Link to="/account/reviews" className='myaccount-mob-url'>View Your Reviews</Link>
            </div>

            <div className='myaccount-mob-item'>
                <h4 className='myaccount-mob-item-title'>My Addresses</h4>
                <hr />
                <Link to="/account/address" className='myaccount-mob-url'>View My Addresses</Link>
            </div>

            <Link className='myaccount-mob-logout' to="/"><i class="fa-solid fa-power-off"></i>Logout</Link>
        </>
    )
}

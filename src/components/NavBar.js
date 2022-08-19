import React from "react";
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import '../js/header.js';
import HeaderCategorySlider from "./HeaderCategorySlider";
import Login from "./Login";
import Register from "./Register";
import SideCart from "./SideCart";
import AddedToWishlist from "./AddedToWishlist";
import OfferModal from "./OfferModal";
import ForgotPassword from "./ForgotPassword";

export default function NavBar() {
    const isLoggedIn = false;

    return (

        <>
            <header id="header" className="section-header">
                <section id="navfix" className="header-main border-bottom bg-white h-pc-sec">
                    <div className="container">
                        <div className="row p-1 d-flex align-items-center">
                            <div className="col-md-2"> <Link to="/">
                                {/* <img src="/images/logo.png" alt="logo" className="logo" /> */}
                                MyStore
                            </Link> </div>
                            <div className="col-md-6">
                                <div className="d-flex form-inputs"> <input className="form-control" type="text" placeholder="Search any product..." /> <i className="fa-solid fa-magnifying-glass"></i> </div>
                            </div>
                            <div className="col-md-4">
                                <div className="d-flex d-none d-md-flex flex-row justify-content-end align-items-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown login-dropdown">
                                            <Link className="btn btn-primary me-4 px-5 fw-600" data-bs-toggle="modal" to="#exampleModalToggle" id="loginDropdownMenuLink" aria-expanded="false">

                                                {isLoggedIn ? (
                                                    <>Logout</>
                                                ) : (
                                                    <>Login</>
                                                )}


                                            </Link>
                                            <ul className="dropdown-menu width-max-content " aria-labelledby="loginDropdownMenuLink">
                                                <div className="d-flex justify-content-between new-sign-up mb-1">
                                                    {isLoggedIn ? (
                                                        <>
                                                            <li>Hello <Link className="" to="/" > User Name</Link></li>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <li>New Customer</li>
                                                            <li><Link className="" to="/" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" role="button">Sign up</Link></li>
                                                        </>
                                                    )}


                                                </div>
                                                <div className="login-menu-items">
                                                    <li>
                                                        <Link className="dropdown-item" to="/account"><i className="fa-solid fa-user"></i> My Account</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" aria-current="page" to="/account/orders"><i className="fa-solid fa-file-export"></i> My Orders</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/account/rewards"><i className="fa-solid fa-gift"></i> My Rewards</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/cart"><i className="fa-solid fa-cart-shopping"></i> My Cart</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="/wishlist"><i className="fa-solid fa-heart"></i> My Wishlist</Link>
                                                    </li>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav me-4">
                                        <li className="nav-item dropdown more-dropdown"> <Link className="nav-link dropdown-toggle text-primary fw-600" to="/" id="moreDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> More </Link>
                                            <ul className="dropdown-menu more-menu-items" aria-labelledby="moreDropdownMenuLink">
                                                <li className="border-0"><Link className="dropdown-item" to="/"><i className="fa-solid fa-circle-question"></i> 24x7 Customer upport</Link></li>
                                                <li><Link className="dropdown-item" to="/"><i className="fa-solid fa-download"></i> Download app</Link></li>
                                                <li><Link className="dropdown-item" to="/sell-on-topmaybe"><i className="fa-solid fa-bag-shopping"></i> <strong>Become a Seller</strong></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <Link to="#offcanvasSideCart" className="shop-bag" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart">
                                        <span><i className="fa-solid fa-cart-shopping"></i></span>
                                        <div className="cart-count">0</div>
                                        <div className="d-flex flex-column"> <span className="fw-600 fs-6 ms-2">Cart</span> </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* mob sec */}
                <section id="mobnavfix" className="header-main border-bottom bg-white h-mob-sec">
                    <div className="container">
                        <div className="row p-1 pt-2 d-flex align-items-center">
                            <div className="col-2">
                                <button className="navbar-toggler ps-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <i className="fa-solid fa-bars text-primary"></i>
                                </button>
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header bg-primary" data-bs-dismiss="offcanvas">
                                        <Link to="/" className="offcanvas-title" id="offcanvasNavbarLabel"><i className="fa-solid fa-house offcanvas-title-home"></i> Home</Link>

                                        <img src="/images/favicon-topmaybe.png" alt="topmaybe" width="30" type="button" className="favicon-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mobile-menu">
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/my-account"><i className="fa-solid fa-user"></i> My Account</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link active" aria-current="page" to="/account/orders"><i className="fa-solid fa-file-export"></i> My Orders</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i> My Cart</Link>
                                            </li>
                                            <hr />
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/account/rewards"><i className="fa-solid fa-gift"></i> My Coupons</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/sell-on-topmaybe"><i className="fa-solid fa-bag-shopping"></i> <strong>Become a Seller</strong></Link>
                                            </li>
                                            <hr />
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/wishlist"><i className="fa-solid fa-heart"></i> My Wishlist</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/account/reviews"><i className="fa-solid fa-star"></i> My Reviews & Ratings</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/account/address"><i className="fa-solid fa-address-book"></i> Manage Addresses</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/account/carddetails"><i className="fa-solid fa-credit-card"></i> Saved Cards</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/notifications"><i className="fa-solid fa-bell"></i> My Notifications</Link>
                                            </li>
                                            <hr />
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link text-primary" to="/"><i className="fa-solid fa-power-off"></i> Logout</Link>
                                            </li>
                                            <hr />
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/about-us">About Us</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/">Help Center</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/terms-condition">Terms & Conditions</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/shipping-policy">Shipping Policy</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/return-policy">Return Policy</Link>
                                            </li>
                                            <li className="nav-item" data-bs-dismiss="offcanvas">
                                                <Link className="nav-link" to="/refund-policy">Refund Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6"> <Link to="/">
                                {/* <img src="/images/logo.png" alt="logo" className="logo" /> */}
                                MyStore
                            </Link> </div>
                            <div className="col-1 me-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSideCart" aria-controls="offcanvasSideCart"><Link to="#offcanvasSideCart" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasSideCart"><i className="fa-solid fa-cart-shopping"></i></Link>
                                <div className="cart-count">0</div>
                            </div>
                            <div className="col-1 ms-1"><Link data-bs-toggle="modal" to="#exampleModalToggle"><i className="fa-solid fa-user"></i></Link></div>
                            <div className="col-1 ms-1"><Link to="/notifications"><i className="fa-solid fa-bell"></i></Link>
                                <div className="notification-count">0</div>
                            </div>
                            <div className="col-12 mt-2 pb-1 header-search-sec">
                                <div className="d-flex form-inputs"> <input className="form-control" type="text" placeholder="Search any product..." /> <i className="fa-solid fa-magnifying-glass"></i> </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* mob sec end */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-h-cat p-0 myheader-category">
                    <div className="container-fluid">
                        <HeaderCategorySlider />
                    </div>
                </nav>
            </header>
            <Login />
            <Register />
            <ForgotPassword />
            <SideCart />
            <AddedToWishlist />
            <OfferModal />
        </>
    );
}

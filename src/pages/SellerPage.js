import React from 'react';
import { Link } from 'react-router-dom';
import SellerLogin from '../components/sellerform/SellerLogin';
import '../css/sellerpage.css';


export default function SellerPage() {
    return (
        <>
            <div className='seller-banner'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-7 seller-form-content'>
                            <h1>Become a Seller on<br />MyStore</h1>
                            <div className='seller-points'>
                                <div><i className="fa-solid fa-0"></i><i className="fa-solid fa-percent"></i>
                                    <h4>Sell at 0%<br />Commission</h4>
                                </div>
                                <div><i className="fa-solid fa-users"></i>
                                    <h4>40 Crores+<br />Customers</h4>
                                </div>
                                <div><i className="fa-solid fa-location-dot"></i>
                                    <h4>27000+<br />pincodes</h4>
                                </div>
                            </div>
                            <Link to="/seller-registration" className='btn-primary mt-3 me-2 d-inline-block start-selling-btn rounded-pill' data-bs-target="#sellerrModalToggle" data-bs-toggle="modal" role="button">Login</Link>
                            <Link to="/seller-registration" className='btn-primary mt-3 d-inline-block start-selling-btn rounded-pill'>Start Selling</Link>
                        </div>
                        <div className='col-md-5'>
                            <div className='seller-side-banner'>
                                <img src="/images/seller-banner.png" alt="seller" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white py-5'>
                <div className='container seller-page-content'>
                    <h2 className='why-sell-heading'>Why sell on MyStore?</h2>
                    <div className='d-flex justify-content-between mt-4'>
                        <div className='why-sell-point'>
                            <i className="fa-solid fa-hand-holding-dollar d-block"></i>
                            <h3>Receive timely payments</h3>
                            <p>Topmaybe ensures your payments are deposited directly in your bank account within 7-14 days.</p>
                        </div>
                        <div className='why-sell-point'>
                            <i className="fa-solid fa-hand-holding-dollar d-block"></i>
                            <h3>Receive timely payments</h3>
                            <p>Topmaybe ensures your payments are deposited directly in your bank account within 7-14 days.</p>
                        </div>
                        <div className='why-sell-point'>
                            <i className="fa-solid fa-hand-holding-dollar d-block"></i>
                            <h3>Receive timely payments</h3>
                            <p>Topmaybe ensures your payments are deposited directly in your bank account within 7-14 days.</p>
                        </div>
                        <div className='why-sell-point'>
                            <i className="fa-solid fa-hand-holding-dollar d-block"></i>
                            <h3>Receive timely payments</h3>
                            <p>Topmaybe ensures your payments are deposited directly in your bank account within 7-14 days.</p>
                        </div>
                    </div>



                    {/* <div className='d-flex align-items-center seller-below-contents'>
                        <div className='heading-img'>
                            <h3>Yours Heading</h3>
                            <img src="/images/delivery-employees.jpg" alt="delivery" />
                        </div>
                        <div className='only-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center seller-below-contents flex-reverse'>
                        <div className='only-content-l'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className='heading-img'>
                            <h3>Yours Heading</h3>
                            <img src="/images/delivery-employees.jpg" alt="delivery" />
                        </div>
                    </div> */}

                </div>
            </div>
            <div className='seller-how-register'>
                <div className='container px-3'>
                    <h2 className='why-sell-heading'>How to Register?</h2>
                    <div className='row py-3'>
                        <div className='col-md-4 text-center'>
                            <h5>3 steps to register as a MyStore Seller</h5>
                            <iframe height="250" src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p className='mt-2 mb-0'>You need just 3 things to become a MyStore Seller, 1 unique product to sell, your GSTIN details and a copy of the cancelled cheque. Yes! this is all that you require to register as a seller on MyStore.</p>
                        </div>
                        <div className='col-md-8 how-seller-register-steps'>
                            <h5 className='text-center'>You need just 3 things to become a MyStore Seller.</h5>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='register-item'>
                                        <div><img src="/images/ProductIcon.svg" alt="production" /></div>
                                        <div><h6>At least 1 product to sell</h6>
                                            <p>All you need is a minimum of 1 unique product to start selling on MyStore.</p>
                                        </div>
                                    </div>
                                    <div className='register-item'>

                                        <div><img src="/images/CheckSheetIcon.svg" alt="CheckSheetIcon" /></div>
                                        <div><h6>Cancelled cheque</h6>
                                            <p>
                                                A copy of the cancelled cheque of your bank account is mandatory of registering.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='register-item'>
                                        <div><img src="/images/GSTINIcon.svg" alt="GSTINIcon" /></div>
                                        <div><h6>GSTIN details</h6>
                                            <p>You are required to furnish the details of your GSTIN to sell your products online.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/seller-registration" className='btn btn-primary text-center w-auto m-auto px-5 mt-3'>Register Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='seller-common-questions'>
                <div className='container'>
                    <h2 className='common-question-heading text-center'>Common Questions</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='seller-learning-sec'>
                <div className='container'>
                    <div className='row align-items-center seller-learning-sec-item'>
                        <div className='col-md-6'>
                            <h4>MyStore
                                <span className='fs-8 d-block'>Seller <strong className='text-primary'>Learning</strong> Hub</span>
                            </h4>
                            <h4 className='mb-0'>Learn how to sell and grow<br />your business on My Store.</h4>
                        </div>
                        <div className='col-md-6'>
                            <Link to="/" className='btn btn-primary px-4 d-flex align-items-center m-auto'><i className="fa-solid fa-circle-play fs-2"></i> Visit Learning Hub</Link>
                        </div>
                    </div>
                </div>
            </div>

            <SellerLogin />
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function CustomerInformationPage() {
    return (
        <>
            <div className='container customer-information-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='customer-information-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='customer-information-r-sidebar'>

                            <form action='' className="row g-3">
                                <h5 className='customer-information-heading0'>Personal Information</h5>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="inputFirstName" placeholder='First Name' value='Aniket' />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="inputLastName" placeholder='Last Name' value='Gupta' />
                                </div>
                                <div className="form-group col-md-12">
                                    <label className='mb-2 mt-2' for="Gender">Your Gender</label><br />
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="genderm" value="Male" checked />
                                        <label className="form-check-label" for="genderm">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="genderf" value="Female" />
                                        <label className="form-check-label" for="genderf">
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="gendero" value="Other" />
                                        <label className="form-check-label" for="gendero">
                                            Other
                                        </label>
                                    </div>
                                </div>
                                <h5 className='customer-information-heading'>Email Address</h5>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" value='yourname@domain.com' />
                                </div>
                                <h5 className='customer-information-heading'>Mobile Number</h5>
                                <div className="col-md-6">
                                    <input type="phone" className="form-control" id="inputphonel4" value='1234567893' />
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary px-5 fw-bold float-end">SAVE</button>
                                </div>
                            </form>

                            <h5 className='my-4'>FAQs</h5>
                            <div className='faqs'>
                                <h4 id="what-happens-when-i-update-my-email-address-or-mobile-number-">What happens when I update my email address (or mobile number)?</h4>
                                <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                                <h4 id="when-will-my-flipkart-account-be-updated-with-the-new-email-address-or-mobile-number-">When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                                <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                                <h4 id="what-happens-to-my-existing-flipkart-account-when-i-update-my-email-address-or-mobile-number-">What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                                <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                                <h4 id="does-my-seller-account-get-affected-when-i-update-my-email-address-">Does my Seller account get affected when I update my email address?</h4>
                                <p>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                            </div>

                            <div className='customer-loggingout-sec'>
                                <p className='fw-bold'>Logging Out from this site <Link to="/account" className='btn btn-primary ms-2 px-4'>Logout</Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

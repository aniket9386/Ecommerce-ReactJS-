import React from 'react'
import SellerLogin from './SellerLogin'

export default function SuccessModal() {
    return (
        <>
            <div className="modal fade" id="Sellersuccess" tabindex="-1" aria-labelledby="offerLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-white">
                        <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body Seller-success-message text-center">
                            <div className='mb-3'><i class="fa-solid fa-circle-check text-primary"></i></div>
                            <h2>SUCCESS</h2>
                            <div>
                                <h5>Thank you, Customer Name. Your Registration is under Review.</h5>
                                <p>
                                    Thank you for filling out our sign up form. We are glad that you joined us. For this reason, we are giving you a special offer. Here is the link to the coupon for you to exclusively use on our website.
                                </p>
                                <button data-bs-target="#sellerrModalToggle" data-bs-toggle="modal" type="button" className='btn btn-primary btn-success-message'>Login Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SellerLogin />
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/checkout.css';

export default function Checkout() {
    return (
        <>
            <div className='container p-md-4 p-2 checkout'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-header py-3 bg-primary text-white">
                                PRICE DETAILS
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Price (2 Items)
                                        <span>₹4,000</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Discount
                                        <span className='min-price'>-₹2,002</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Shipping
                                        <span>₹40</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        GST (18%)
                                        <span>₹40</span>
                                    </li>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <strong>
                                                <p className="mb-0">(Including GST)</p>
                                            </strong>
                                        </div>
                                        <span><strong>₹2,078</strong></span>
                                    </li>
                                </ul>
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" placeholder="Apply Coupon Code" aria-label="Apply Coupon Code" aria-describedby="Coupon" />
                                    <button className="btn btn-primary" type="button" id="pincode">Apply</button>
                                </div>
                                {/* <!-- Offer trigger modal --> */}
                                <div className='mb-1'>
                                    <button type="button" className="ps-0 btn offer-btn fw-bold text-secondary available-offer-btn" data-bs-toggle="modal" data-bs-target="#coffers">
                                        <img src="/images/discount.png" alt='offer' /> Available Offers
                                    </button>
                                </div>
                                <div className='min-price mt-2'>You will save ₹2,002 on this order</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className="accordion" id="accordionExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingZero">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseZero" aria-expanded="true" aria-controls="collapseZero">
                                        DELIVERY ADDRESS
                                    </button>
                                </h2>
                                <div id="collapseZero" className="accordion-collapse collapse show" aria-labelledby="headingZero" data-bs-parent="#accordionExample">
                                    <div className="accordion-body checkout-select-address">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioaddress" id="flexRadioaddress1" />
                                            <label className="form-check-label w-100" for="flexRadioaddress1">

                                                <div className='checkout-addresses'>
                                                    <div className='edit-address'>
                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                        <div className='edit-delete'>
                                                            <div><span>Edit</span></div>
                                                            <div><span>Delete</span></div>
                                                        </div>
                                                    </div>
                                                    <div className='address-type'>
                                                        <span>Home</span>
                                                    </div>
                                                    <p className='cust-information'><span className='customer-name'>Customer Name</span><span className='customer-phone'>Customer Phone</span></p>
                                                    <p className='cust-address'>Lorem ipsum dolor sit amet<br />
                                                        <span className='pincode'>123456</span></p>
                                                </div>

                                            </label>
                                        </div>
                                        <hr />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioaddress" id="flexRadioaddress1" />
                                            <label className="form-check-label w-100" for="flexRadioaddress1">

                                                <div className='checkout-addresses'>
                                                    <div className='edit-address'>
                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                        <div className='edit-delete'>
                                                            <div><span>Edit</span></div>
                                                            <div><span>Delete</span></div>
                                                        </div>
                                                    </div>
                                                    <div className='address-type'>
                                                        <span>Home</span>
                                                    </div>
                                                    <p className='cust-information'><span className='customer-name'>Customer Name</span><span className='customer-phone'>Customer Phone</span></p>
                                                    <p className='cust-address'>Lorem ipsum dolor sit amet<br />
                                                        <span className='pincode'>123456</span></p>
                                                </div>

                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        ADD A NEW ADDRESS
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <form className="needs-validation" novalidate="">
                                            <div className="row g-3">
                                                <div className="col-sm-6">
                                                    <label for="firstName" className="form-label">First name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                                                    <div className="invalid-feedback">
                                                        Valid first name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label for="lastName" className="form-label">Last name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" required="" />
                                                    <div className="invalid-feedback">
                                                        Valid last name is required.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label for="phone" className="form-label">Phone</label>
                                                    <input type="phone" className="form-control" id="phone" placeholder="Phone/Mobile" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                                    <div className="invalid-feedback">
                                                        Please enter a valid email address for shipping updates.
                                                    </div>
                                                </div>

                                                <div className="col-md-5">
                                                    <label for="country" className="form-label">Country</label>
                                                    <select className="form-select" id="country" required="">
                                                        <option value="India">India</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please select a valid country.
                                                    </div>
                                                </div>

                                                <div className="col-md-4">
                                                    <label for="state" className="form-label">State</label>
                                                    <select className="form-select" id="state" required="">
                                                        <option value="" disabled="">--Select State--</option><option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttarakhand">Uttarakhand</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="West Bengal">West Bengal</option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label for="zip" className="form-label">Zip</label>
                                                    <input type="text" className="form-control" id="zip" placeholder="Pincode" required="" />
                                                    <div className="invalid-feedback">
                                                        Zip code required.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="address" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                                    <div className="invalid-feedback">
                                                        Please enter your shipping address.
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label for="LankMark" className="form-label">Land Mark</label>
                                                    <input type="text" className="form-control" id="LankMark" placeholder="Near By" />
                                                </div>

                                            </div>

                                            <div className="form-check my-4">
                                                <input type="checkbox" className="form-check-input" id="save-info" />
                                                <label className="form-check-label" for="save-info">Save this information for next time</label>
                                            </div>

                                            <button className="ms-auto btn btn-primary py-2 px-4 fs-6" type="submit">DELIVER HERE</button>
                                            <button className="ms-auto btn ps-4 py-2 fs-6 btn-cancel" type="submit">Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        ORDER SUMMARY
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body pb-1">
                                        <div className="row order-summary">
                                            <div className="col-lg-2 col-3 mb-lg-0 cart-p-image-sec">
                                                {/* <!-- Image --> */}
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src="/images/headphone.jpg"
                                                        className="w-100" alt="headphone" />
                                                    <a href="#!">
                                                        <div className="mask"></div>
                                                    </a>
                                                </div>
                                                {/* <!-- Image --> */}
                                            </div>

                                            <div className="col-lg-6 col-6 mb-lg-0">
                                                {/* <!-- Data --> */}
                                                <p className='p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</p>
                                                <div className='cart-varient'>
                                                    <p>Color: Red</p>
                                                    <p>Size: Free</p>
                                                </div>
                                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2 remove-item" data-mdb-toggle="tooltip"
                                                    title="Remove item">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm mb-2 move-wish" data-mdb-toggle="tooltip"
                                                    title="Move to the wish list">
                                                    <i className="fas fa-heart"></i>
                                                </button>
                                                {/* <!-- Data --> */}
                                            </div>

                                            <div className="col-lg-4 col-3 mb-lg-0">

                                                {/* <!-- Price --> */}
                                                <p className="text-end"><span className='fw-bold'>₹999</span> <strike> ₹2,000 </strike><span className="min-price ms-1"> 45% Off</span>
                                                </p>
                                                {/* <!-- Price --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        PAYMENT OPTION
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body payment-option">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="upi" />
                                            <label className="form-check-label" for="upi">
                                                UPI
                                            </label>
                                        </div>
                                        <hr className='my-3' />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="wallets" />
                                            <label className="form-check-label" for="wallets">
                                                Wallets
                                            </label>
                                        </div>
                                        <hr className='my-3' />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="card" />
                                            <label className="form-check-label" for="card">
                                                Credit/Debit Card
                                            </label>
                                        </div>
                                        <hr className='my-3' />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="net-banking" />
                                            <label className="form-check-label" for="net-banking">
                                                Net Banking
                                            </label>
                                        </div>
                                        <hr className='my-3' />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="emi" />
                                            <label className="form-check-label" for="emi">
                                                EMI (Easy Installment)
                                            </label>
                                        </div>
                                        <hr className='my-3' />
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="cod" />
                                            <label className="form-check-label" for="cod">
                                                Cash on Delivery
                                            </label>
                                        </div>
                                        <Link to="/order-complete">
                                            <button className="d-block ms-auto mt-2 btn btn-primary py-2 px-4 fs-6" type="submit">CONTINUE</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Offer Modal --> */}
            <div className="modal fade" id="coffers" tabindex="-1" aria-labelledby="offerLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title text-secondary" id="offerLabel"><img src="/images/discount.png" alt='offer' /> Available Offers</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body dis-code">
                            <div className='text-secondary'><img src="/images/discount.png" alt='offer' />
                                <b> FLAT20</b> <span className='fs-8'>Applicable only once per user</span><br /><span className='fs-8 text-dark'>Get FLAT 20% OFF On Furniture and Electronics.</span>
                            </div>
                            <div className='text-secondary'><img src="/images/discount.png" alt='offer' />
                                <b> FLAT20</b> <span className='fs-8'>Applicable only once per user</span><br /><span className='fs-8 text-dark'>Get FLAT 20% OFF On Furniture and Electronics.</span>
                            </div>
                            <div className='text-secondary'><img src="/images/discount.png" alt='offer' />
                                <b> FLAT20</b> <span className='fs-8'>Applicable only once per user</span><br /><span className='fs-8 text-dark'>Get FLAT 20% OFF On Furniture and Electronics.</span>
                            </div>
                            <b className='fs-8'>T&C’s</b> : <span className='fs-8'>Only one offer can be applied at a time. Offers can not be clubbed together</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

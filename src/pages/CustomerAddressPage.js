import React from 'react';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function CustomerAddressPage() {
    return (
        <>
            <div className='container manage-address-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='manage-address-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='manage-address-r-sidebar'>
                            <h5>Saved Addresses</h5>
                            <div className='saved-address'>
                                <div className='addresses'>
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
                                    <p className='cust-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,<br />
                                        <span className='pincode'>123456</span></p>
                                </div>
                                <hr />
                                <div className='addresses'>
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
                                    <p className='cust-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor,<br />
                                        <span className='pincode'>123456</span></p>
                                </div>
                            </div>

                            <h5 className='mt-5'>Add a New Address</h5>
                            <div className='add-address'>
                                <form className="needs-validation" novalidate="">
                                    <div className="row g-3 mb-4">
                                        <div className="col-6">
                                            <label for="fullName" className="form-label">Full name</label>
                                            <input type="text" className="form-control" id="fullName" placeholder="Full Name" required="" />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="phone" className="form-label">Phone</label>
                                            <input type="phone" className="form-control" id="phone" placeholder="Phone/Mobile" />
                                            <div className="invalid-feedback">
                                                Please enter a valid phone number for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="zip" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="zip" placeholder="Pincode" required="" />
                                            <div className="invalid-feedback">
                                                Zip code required.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="country" className="form-label">Country</label>
                                            <select className="form-select" id="country" required="">
                                                <option value="India">India</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid country.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="state" className="form-label">State</label>
                                            <select className="form-select" id="state" required="">
                                                <option value="" disabled="">--Select State--</option><option value="Andaman &amp; Nicobar Islands">Andaman &amp; Nicobar Islands</option><option value="Andhra Pradesh">Andhra Pradesh</option><option value="Arunachal Pradesh">Arunachal Pradesh</option><option value="Assam">Assam</option><option value="Bihar">Bihar</option><option value="Chandigarh">Chandigarh</option><option value="Chhattisgarh">Chhattisgarh</option><option value="Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu">Dadra &amp; Nagar Haveli &amp; Daman &amp; Diu</option><option value="Delhi">Delhi</option><option value="Goa">Goa</option><option value="Gujarat">Gujarat</option><option value="Haryana">Haryana</option><option value="Himachal Pradesh">Himachal Pradesh</option><option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option><option value="Jharkhand">Jharkhand</option><option value="Karnataka">Karnataka</option><option value="Kerala">Kerala</option><option value="Ladakh">Ladakh</option><option value="Lakshadweep">Lakshadweep</option><option value="Madhya Pradesh">Madhya Pradesh</option><option value="Maharashtra">Maharashtra</option><option value="Manipur">Manipur</option><option value="Meghalaya">Meghalaya</option><option value="Mizoram">Mizoram</option><option value="Nagaland">Nagaland</option><option value="Odisha">Odisha</option><option value="Puducherry">Puducherry</option><option value="Punjab">Punjab</option><option value="Rajasthan">Rajasthan</option><option value="Sikkim">Sikkim</option><option value="Tamil Nadu">Tamil Nadu</option><option value="Telangana">Telangana</option><option value="Tripura">Tripura</option><option value="Uttarakhand">Uttarakhand</option><option value="Uttar Pradesh">Uttar Pradesh</option><option value="West Bengal">West Bengal</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label for="address" className="form-label">Address</label>
                                            <textarea type="text" className="form-control" id="address" placeholder="1234 Main St" required="" ></textarea>
                                            <div className="invalid-feedback">
                                                Please enter your shipping address.
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <label for="LankMark" className="form-label">Land Mark</label>
                                            <input type="text" className="form-control" id="LankMark" placeholder="Near By" />
                                        </div>

                                        <div className="col-6">
                                            <label for="alternatephone" className="form-label">Alternate Phone</label>
                                            <input type="phone" className="form-control" id="alternatephone" placeholder="Alternate Phone/Mobile" />
                                            <div className="invalid-feedback">
                                                Please enter a valid phone number for shipping updates.
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label className='mb-2 mt-2' for="Gender">Address Type</label><br />
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="type" id="home" value="Home" />
                                                <label className="form-check-label" for="home">
                                                    Home
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="type" id="work" value="Work" />
                                                <label className="form-check-label" for="work">
                                                    Work
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="ms-auto btn btn-primary py-2 px-5 fs-6" type="submit">SAVE</button>
                                    <button className="ms-auto btn ps-4 py-2 fs-6 btn-cancel" type="submit">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

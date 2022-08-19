import React from 'react';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function CustomerSavedCard() {
    return (
        <>
            <div className='container saved-card-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='saved-card-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='saved-card-r-sidebar'>
                            <h5>Saved Cards</h5>
                            <div className='saved-address'>
                                <div className='addresses'>
                                    <div className='edit-address'>
                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                        <div className='edit-delete'>
                                            <div><span>Edit</span></div>
                                            <div><span>Delete</span></div>
                                        </div>
                                    </div>
                                    <p className='cust-card-name'><span className='customer-name'>Axis Bank Credit Card</span></p>
                                    <p className='cust-card m-0'>**** **** **** 1234</p>
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
                                    <p className='cust-card-name'><span className='customer-name'>Axis Bank Credit Card</span></p>
                                    <p className='cust-card m-0'>**** **** **** 1234</p>
                                </div>
                            </div>

                            <h5 className='mt-5'>Add a New Card</h5>
                            <div className='add-address'>
                                <form className="needs-validation" novalidate="">
                                    <div className="row g-3 mb-4">
                                        <div className="col-sm-6">
                                            <label for="cardnumber" className="form-label">Card Number</label>
                                            <input type="number" className="form-control" id="cardnumber" placeholder="Enter Card Number" required />
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="lastName" className="form-label">Valid thru</label>
                                            <div className='d-flex'>
                                                <select className="form-select" name="month" required tabindex="4">
                                                    <option value="MM">MM</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option>
                                                </select>
                                                <select className="form-select" name="year" required="" tabindex="5"><option disabled="" value="YY">YY</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option><option value="60">60</option><option value="61">61</option></select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label for="nameoncard" className="form-label">Name on Card</label>
                                            <input type="text" className="form-control" id="nameoncard" placeholder="Name on Card" />

                                        </div>

                                        <div className="col-sm-6">
                                            <label for="cardname" className="form-label">Name this Card for future use</label>
                                            <input type="text" className="form-control" id="cardname" placeholder="Name this Card for future use" />
                                        </div>
                                    </div>

                                    <button className="ms-auto btn btn-primary py-2 px-5 fs-6" type="submit">SAVE</button>
                                    <button className="ms-auto btn ps-4 py-2 fs-6 btn-cancel" type="submit">Cancel</button>
                                    <p className='fs-8 mb-0 mt-3'>Your card details would be securely saved for faster payments. Your CVV will not be stored</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import CustomerDashboardSidebar from '../components/CustomerDashboardSidebar';
import '../css/customer-dashboard.css';

export default function AllNotificationsPage() {
    return (
        <>
            <div className='container all-notifications-page'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='all-notifications-l-sidebar'>
                            <CustomerDashboardSidebar />
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='all-notifications-r-sidebar'>
                            <h5>All Notifications</h5>
                            <div className='notification-sec'>
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='notifications'>
                                    <div className='notification-link'><Link to="/notifications" data-bs-toggle="modal" data-bs-target="#notificationmoreModal" type="button">More details <i className="fa-solid fa-angle-right fs-8"></i></Link></div>
                                    <div className='notification-item'>
                                        <div className='notification-item-img'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                        <div className='notification-item-text'>
                                            <span className='notification-item-text-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>

                                            <span className='fs-8'>21 Apr, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- notification more Modal --> */}
            <div className="modal fade" id="notificationmoreModal" tabindex="-1" aria-labelledby="notificationmoreModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="notificationmoreModalLabel">Notification</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className='notifications'>

                                <div className='notification-item'>
                                    <div className='notification-item-img-modal'><img src="/images/favicon-topmaybe.png" alt="favicon" /></div>
                                    <div className='notification-item-text'>
                                        <span className='notification-item-text-modal-title'>Buy more and Save upto ₹1000. Valid till 25 Apr 2022, 11:59 PM hours</span>
                                        <br />
                                        <span className='fs-8'>21 Apr, 2022</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import '../../css/login.css';

export default function SellerLogin() {
    return (
        <>
            <div className="modal fade" id="sellerrModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="container h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="user_card">
                                    <div className="d-flex justify-content-center">
                                        <div className="brand_logo_container">
                                            <img src="/images/logo.png" className="brand_logo" alt="Logo" />
                                            <h5 className='mt-2'>Seller Login</h5>
                                        </div>
                                        <i type="button" class="fa-solid fa-xmark btn-close myclose" data-bs-dismiss="modal" aria-label="Close"></i>
                                    </div>
                                    <div className="d-flex justify-content-center form_container pt-2">
                                        <form>
                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" name="" className="form-control input_user" placeholder="Phone/Email" />
                                            </div>

                                            <div className="input-group mb-2">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" name="" className="form-control input_pass" placeholder="password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="" />
                                                    <label className="custom-control-label ms-2" for="customControlInline">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3 mb-2 login_container">
                                                <button type="button" name="button" className="btn login_btn">Login</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >




        </>
    )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

export default function Login() {
    const [searchString, setSearchString] = useState();
    const [searchString2, setSearchString2] = useState();
    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">


                        <div className="container h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="user_card">
                                    <div className="d-flex justify-content-center">
                                        <div className="brand_logo_container">
                                            <img src="/images/logo.png" className="brand_logo" alt="Logo" />
                                        </div>
                                        <i type="button" className="fa-solid fa-xmark btn-close myclose" data-bs-dismiss="modal" aria-label="Close"></i>
                                    </div>
                                    <div className="d-flex justify-content-center form_container">
                                        <form>
                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                                </div>
                                                <input type="text" name="" className="form-control input_user" value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder="Phone/Email" />
                                            </div>
                                            <div className="input-group mb-2">
                                                <div className="input-group-append">
                                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                                </div>
                                                <input type="password" name="" className="form-control input_pass" value={searchString2} onChange={(f) => setSearchString2(f.target.value)} placeholder="password" />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label ms-2" htmlFor="customControlInline">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mt-3 login_container">
                                                <button type="button" name="button" className="btn login_btn">Login</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="mt-4">
                                        <div className="d-flex justify-content-center links">
                                            Don't have an account? <div className="ms-2 text-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" role="button"> Sign Up</div>
                                        </div>
                                        <div className="d-flex justify-content-center links mt-1">
                                            <Link to="/" data-bs-target="#ForgotModalToggle" data-bs-toggle="modal" role="button">Forgot your password?</Link>
                                        </div>
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

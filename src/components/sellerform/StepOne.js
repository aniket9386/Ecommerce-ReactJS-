import React from 'react';
import { Link } from 'react-router-dom';
import SellerStep from './SellerStep';

export default function StepOne() {


    return (
        <>
            <div className='seller-step-one'>
                <SellerStep />
            </div>

            <div class="mb-3">
                <input type="number" class="form-control" id="seller-phone" min="0" placeholder='*Enter Mobile No.' required />
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="seller-email" placeholder='*Enter Email ID' required />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="seller-password" placeholder='*Create Password' required />
                <p className='m-0 fs-8 mt-1'>
                    <i class="fa-solid fa-circle-check"></i> Maximum 15 characters
                    <br />
                    <i class="fa-solid fa-circle-check"></i> Minimum 8 characters
                    <br />
                    <i class="fa-solid fa-circle-check"></i> 1 lowercase
                    <br />
                    <i class="fa-solid fa-circle-check"></i> 1 uppercase
                    <br />
                    <i class="fa-solid fa-circle-check"></i> 1 digit
                    <br />
                    <i class="fa-solid fa-circle-check"></i> 1 special character (!@#$%^&*)
                </p>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="seller-conf[o]rm-password" placeholder='*Confirm Password' required />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="seller-password" placeholder='*At least 6 characters' required />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="seller-gtin" placeholder='*Enter GTIN' required />
                <p className='m-0 fs-8 mt-1'>GSTIN is required to sell products</p>
            </div>
            <div className='small mb-3'>By continuing, I agree to Topmaybe's <Link to="/">Terms of Use</Link> & <Link to="/">Privacy Policy</Link></div>
        </>
    )
}


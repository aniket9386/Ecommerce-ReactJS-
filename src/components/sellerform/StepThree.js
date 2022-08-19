import React from 'react';
import SellerStep from './SellerStep';

export default function StepThree() {

    return (
        <>
            <div className='seller-step-three'>
                <SellerStep />
            </div>

            <div class="mb-3">
                <input type="text" class="form-control" id="seller-business-name" placeholder='*Enter your Business name' required />
            </div>
            <div class="mb-3">
                <input type="number" class="form-control" id="seller-pan" min="0" placeholder='*Enter your pan number' required />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="seller-business-type" placeholder='*Enter your Business type' required />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="seller-business-address" placeholder='*Enter your Address' required />
            </div>
            <div class="mb-3">
                <label className='form-label'>Address Proof*</label>
                <input type="file" class="form-control" id="seller-business-address-proof" required />
                <p className='m-0 fs-8 mt-1'>Address proof can include: Aadhar card, Electricity bill, Driving License, etc.</p>
            </div>
            <div class="mb-3">
                <label className='form-label'>Signature*</label>
                <input type="file" class="form-control" id="seller-signature" required />
                <p className='m-0 fs-8 mt-1'>Make sure the signature is visibly large and on a white background.</p>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="seller-agree" />
                <label class="form-check-label">
                    I agreee all the mention details are correct.
                </label>
            </div>

        </>
    )
}

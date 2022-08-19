import React from 'react';
import SellerStep from './SellerStep';

export default function StepTwo() {

    return (
        <>
            <div className='seller-step-two'>
                <SellerStep />
            </div>

            <div class="mb-3">
                <input type="text" class="form-control" id="seller-address" placeholder='*Enter your pickup address' required />
            </div>
            <div class="mb-3">
                <input type="number" class="form-control" id="seller-zip" min="0" placeholder='*Enter your pin code' required />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="seller-city" placeholder='*Enter your city' required />
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" id="seller-state" placeholder='*Enter your state' required />
            </div>

        </>
    )
}


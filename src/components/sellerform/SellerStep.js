import React from 'react';

export default function SellerStep() {
    return (
        <>
            <div className='seller-step-sec'>
                <div className='heading-step-one'><i class="fa-regular fa-circle-check"></i> <span className='active-step-one'>Create</span></div>
                <hr />
                <div className='heading-step-two'><i class="fa-regular fa-circle-check"></i> <span className='active-step-two'>Pick Up Address</span></div>
                <hr />
                <div className='heading-step-three'><i class="fa-regular fa-circle-check"></i> <span className='active-step-three'>Business Details</span></div>
            </div>
        </>
    )
}

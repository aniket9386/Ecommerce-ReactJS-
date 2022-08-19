import React from 'react';

export default function OfferModal() {
    return (
        <>
            <div className="modal fade" id="offers" tabindex="-1" aria-labelledby="offerLabel" aria-hidden="true">
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

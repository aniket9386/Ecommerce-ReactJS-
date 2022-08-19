import React from 'react'
import { Link } from 'react-router-dom'

export default function AddedToWishlist() {
    return (
        <>
            <div className="modal fade" id="addedwishlistModal" tabindex="-1" aria-labelledby="addedwishlistModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addedwishlistModalLabel">Added to Wishlist</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row align-items-center'>
                                <div className="col-3">
                                    <img src="/images/headphone.jpg"
                                        className="w-100" alt="headphone" />
                                </div>
                                <div className='col-9'>
                                    <Link to="/single-product" target="_blank" className='p-title'>boAt Rockerz 510 Super Extra Bass Bluetooth Headset</Link>
                                    <button type="button" className=" float-end btn btn-primary btn-sm me-1 mb-2 remove-item" data-mdb-toggle="tooltip"
                                        title="Remove item">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

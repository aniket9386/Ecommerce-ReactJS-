import React from 'react';
import { Link } from 'react-router-dom';
import '../css/card-box.css';

export default function CardBoxInnerSec() {
    return (
        <>
            <div className="card h-100">
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='m-0'> Shop by category </h5>
                        <Link to='/collections/all' className='btn btn-primary m-0'>View all</Link>
                    </div>
                    <div className='row'>
                        <div className="col-6 mt-2">
                            <div className='cat-bg'>
                                <Link to='/collections/all'>
                                    <img src="/images/cat1.jpg" className="rounded" alt="headphone" /></Link>
                                <p className="card-text cat-name">Category</p>
                                <p className="min-price">Min. 70% Off</p>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className='cat-bg'>
                                <Link to='/collections/all'>
                                    <img src="/images/cat1.jpg" className="rounded" alt="headphone" /></Link>
                                <p className="card-text cat-name">Category</p>
                                <p className="min-price">Min. 70% Off</p>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className='cat-bg'>
                                <Link to='/collections/all'>
                                    <img src="/images/cat1.jpg" className="rounded" alt="headphone" /></Link>
                                <p className="card-text cat-name">Category</p>
                                <p className="min-price">Min. 70% Off</p>
                            </div>
                        </div>
                        <div className="col-6 mt-2">
                            <div className='cat-bg'>
                                <Link to='/collections/all'>
                                    <img src="/images/cat1.jpg" className="rounded" alt="headphone" /></Link>
                                <p className="card-text cat-name">Category</p>
                                <p className="min-price">Min. 70% Off</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

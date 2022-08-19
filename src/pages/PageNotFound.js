import React from 'react';
import { Link } from 'react-router-dom';
import RecentlyViewed from '../components/RecentlyViewed';

export default function PageNotFound() {
    return (
        <>
            <div className='pagenotfound-sec text-center my-1 container-fluid'>
                <div className='py-5 px-3 bg-white'>
                    <div className='py-5'>
                        <h1 className='title404'>404</h1>
                        <div>
                            <h4>UH OH! You're lost.
                            </h4>
                            <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                            <Link to="/" className='btn btn-primary px-5'>Home</Link>
                        </div>
                    </div>
                </div>
            </div>
            <RecentlyViewed productsectitle="Recently Viewed" />
        </>
    )
}

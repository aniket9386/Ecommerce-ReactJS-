import React from 'react';
import { Link } from 'react-router-dom';

export default function SlideShow() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner home-slide">
                    <div className="carousel-item active home-slide-item" data-bs-interval="10000">
                        <Link to="/" className='myhome-slider-link'>
                            <img src="/images/slideshow-img.jpg" className="pc-sec w-100" alt="slideshow" />
                            <img src="/images/mob-banner1.jpg" className="mob-sec w-100" alt="slideshow" />
                        </Link>
                    </div>
                    <div className="carousel-item home-slide-item" data-bs-interval="2000">
                        <Link to="/" className='myhome-slider-link'>
                            <img src="/images/slideshow-img-2.jpg" className="pc-sec w-100" alt="slideshow" />
                            <img src="/images/mob-banner2.jpg" className="mob-sec w-100" alt="slideshow" />
                        </Link>
                    </div>
                    <div className="carousel-item home-slide-item" data-bs-interval="2000">
                        <Link to="/" className='myhome-slider-link'>
                            <img src="/images/slideshow-img-3.jpg" className="pc-sec w-100" alt="slideshow" />
                            <img src="/images/mob-banner3.jpg" className="mob-sec w-100" alt="slideshow" />
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev z-index1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next z-index1" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

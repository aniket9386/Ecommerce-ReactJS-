import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/offersec.css';
import { Link } from 'react-router-dom';

export default function OfferSec() {
    const settings = {
        navs: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    return (
        <>
            <div className="container-fluid mb-1">
                <Slider {...settings} className="offer-sec">
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                    <div className="p-2"><Link to='/collections/all'><img src="/images/offer.jpg" alt="offer" /></Link></div>
                </Slider>
            </div>
        </>
    )
}

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/product-carousel.css';
import '../css/dealsoftheday.css';
import ProductListItem from './ProductListItem';
import CountdownTimer from '../CountdownTimer';

export default function DealsOfTheDay(props) {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    const settings = {
        navs: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    }
    return (
        <>
            <div className='container-fluid mb-1 dealsoftheday'>
                <div className='d-flex justify-content-between align-items-center bg-white px-3 py-2'>
                    <div className='d-flex align-items-center w-50'>
                        <h5 className='m-0 me-4'> Deals of the Day </h5>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    </div>
                    <div className='pc-sec'><a href='/' className='btn btn-primary m-0'>View all</a></div>
                </div>
                <div className='bg-white pb-0'>
                    <hr className='m-0' />
                </div>
                <Slider {...settings} className='product-list'>
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                </Slider>
            </div>
        </>
    )
}

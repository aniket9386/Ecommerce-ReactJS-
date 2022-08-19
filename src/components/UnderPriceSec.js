import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UnderPriceSecItem from './UnderPriceSecItem';

export default function UnderPriceSec() {
    const settings = {
        arrows: false,
        swipeToSlide: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    }
    return (
        <>
            <div className='container-fluid mb-1'>
                <div className='under-price-sec'>
                    <Slider {...settings}>
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                        <UnderPriceSecItem />
                    </Slider>
                </div>
            </div>
        </>
    )
}

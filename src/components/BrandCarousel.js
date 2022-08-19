import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCarouselItem from './BrandCarouselItem';

export default function BrandCarousel() {
    const brandcarouselItem = () => {
        const row = [];
        for (var i = 0; i < 20; i++) {
            row.push(<div className='brandcarouselItem'><BrandCarouselItem /> </div>);
        }
        return row;
    };

    const settings = {
        arrows: false,
        swipeToSlide: true,
        autoplay: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: false,
                    autoplay: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    autoplay: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: false,
                },
            },
        ],
    }
    return (
        <>
            <div className='container-fluid mb-1'>
                <div className='brand-carousel-sec'>
                    <Slider {...settings}>
                        {
                            brandcarouselItem()
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

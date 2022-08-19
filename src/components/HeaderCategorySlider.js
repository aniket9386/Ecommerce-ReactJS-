import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderCategorySlideItem from './HeaderCategorySlideItem';

export default function HeaderCategorySlider() {
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
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                },
            },
        ],
    }
    return (
        <>
            <div className='container p-0 myheader-category-slider'>
                <Slider {...settings}>
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                    <HeaderCategorySlideItem />
                </Slider>
            </div>
        </>
    )
}

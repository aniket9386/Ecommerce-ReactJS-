import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductListItem from './ProductListItem';

export default function RecentlyViewed(props) {
    const settings = {
        navs: true,
        swipeToSlide: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
            <div className='container-fluid mb-1'>
                <div className='row bg-white m-0'>
                    <div className='col-md-2 d-flex align-items-center justify-content-center flex-column text-center px-3 py-2 mob-cat-content-sec'>
                        <h5> {props.productsectitle} </h5>
                        <a href='/' className='btn btn-primary mt-3'>View all</a>
                    </div>
                    <div className='bg-white pb-0 mob-sec px-0'>
                        <hr className='m-0' />
                    </div>
                    <Slider {...settings} className='category-list col-md-10 p-0'>
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
            </div>
        </>
    )
}

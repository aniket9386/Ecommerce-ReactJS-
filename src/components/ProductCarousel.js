import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/product-carousel.css'
import ProductListItem from './ProductListItem';

export default function ProductCarousel(props) {
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
      <div className='container-fluid mb-1'>
        <div className='d-flex justify-content-between align-items-center bg-white px-3 py-2'>
          <h5 className='m-0'> {props.productsectitle} </h5>
          <a href='/' className='btn btn-primary m-0'>View all</a>
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

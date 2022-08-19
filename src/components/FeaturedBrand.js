import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/featured-brand.css'
import { Link } from "react-router-dom";

export default function FeaturedBrand(props) {
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
        <Slider {...settings} className="featured-list">
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
          <div className="featured-list-item p-2"><Link to='/collections/all'><img src="/images/featured.jpg" alt="featured" /></Link></div>
        </Slider>
      </div>
    </>
  );
}

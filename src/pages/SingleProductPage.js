import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from 'react-image-magnify';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import RecentlyViewed from '../components/RecentlyViewed';
import '../css/single-product-page.css';
import '../js/singleproduct.js';
import AddedToWishlist from "../components/AddedToWishlist";

export default function SingleProductPage() {

    const viewMoreoffer = () => {
        var dots = document.getElementById("offerdot");
        var moreText = document.getElementById("moreoffer");
        var btnText = document.getElementById("viewmoreoffer");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "View more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "View less";
            moreText.style.display = "inline";
        }
    }

    const viewMoredescription = () => {
        var dots = document.getElementById("descriptiondot");
        var moreText = document.getElementById("moredescription");
        var btnText = document.getElementById("viewmoredescription");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "View more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "View less";
            moreText.style.display = "inline";
        }
    }

    const viewMorehighlight = () => {
        var dots = document.getElementById("highlightdot");
        var moreText = document.getElementById("morehighlight");
        var btnText = document.getElementById("viewmorehighlight");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "View more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "View less";
            moreText.style.display = "inline";
        }
    }

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, [slider1, slider2]);


    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true
    };

    return (
        <>
            <div className="container mw-100 single-product-sec">
                <div className="single_product">
                    <div className="container-fluid" style={{ backgroundColor: "#fff", padding: "11px" }}>
                        <div className="row">
                            <div className='col-lg-5'>
                                <div className='row p-side1'>
                                    <div className="col-lg-2 order-lg-1 order-2 pe-1">
                                        <ul className="image_list">
                                            <Slider
                                                {...settingsThumbs}
                                                asNavFor={nav1}
                                                ref={slider => (setSlider2(slider))}>
                                                <li><img src="/images/boat1.jpg" alt="headphone" /></li>
                                                <li><img src="/images/boat2.jpg" alt="headphone" /></li>
                                                <li><img src="/images/boat3.jpg" alt="headphone" /></li>
                                                <li><img src="/images/boat4.jpg" alt="headphone" /></li>
                                                <li><img src="/images/boat5.jpg" alt="headphone" /></li>
                                            </Slider>
                                        </ul>
                                    </div>
                                    <div className="col-lg-10 order-lg-2 order-1 ps-0 p-main-image">
                                        <i className="fa-solid fa-heart product-page-wishlist" title="Wishlist" data-bs-toggle="modal" data-bs-target="#addedwishlistModal"></i>
                                        <i className="fa-solid fa-share product-page-cart" title="Share"></i>

                                        <Slider
                                            {...settingsMain}
                                            asNavFor={nav2}
                                            ref={slider => (setSlider1(slider))}
                                        >
                                            <div className="p-image_selected z-index-1">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'headphone',
                                                        isFluidWidth: true,
                                                        src: '/images/boat1.jpg',
                                                    },
                                                    largeImage: {
                                                        src: '/images/boat1.jpg',
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    imageClassName: 'product-small-img',
                                                    shouldUsePositiveSpaceLens: true,
                                                    enlargedImageContainerDimensions: {
                                                        width: '150%',
                                                        height: '100%'
                                                    }
                                                }}
                                                />
                                            </div>

                                            <div className="p-image_selected z-index-1">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'headphone',
                                                        isFluidWidth: true,
                                                        src: '/images/boat2.jpg',
                                                    },
                                                    largeImage: {
                                                        src: '/images/boat2.jpg',
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    imageClassName: 'product-small-img',
                                                    shouldUsePositiveSpaceLens: true,
                                                    enlargedImageContainerDimensions: {
                                                        width: '150%',
                                                        height: '100%'
                                                    }
                                                }} />
                                            </div>

                                            <div className="p-image_selected z-index-1">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'headphone',
                                                        isFluidWidth: true,
                                                        src: '/images/boat3.jpg',
                                                    },
                                                    largeImage: {
                                                        src: '/images/boat3.jpg',
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    imageClassName: 'product-small-img',
                                                    shouldUsePositiveSpaceLens: true,
                                                    enlargedImageContainerDimensions: {
                                                        width: '150%',
                                                        height: '100%'
                                                    }
                                                }} />
                                            </div>

                                            <div className="p-image_selected z-index-1">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'headphone',
                                                        isFluidWidth: true,
                                                        src: '/images/boat4.jpg',
                                                    },
                                                    largeImage: {
                                                        src: '/images/boat4.jpg',
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    imageClassName: 'product-small-img',
                                                    shouldUsePositiveSpaceLens: true,
                                                    enlargedImageContainerDimensions: {
                                                        width: '150%',
                                                        height: '100%'
                                                    }
                                                }} />
                                            </div>

                                            <div className="p-image_selected z-index-1">
                                                <ReactImageMagnify {...{
                                                    smallImage: {
                                                        alt: 'headphone',
                                                        isFluidWidth: true,
                                                        src: '/images/boat5.jpg',
                                                    },
                                                    largeImage: {
                                                        src: '/images/boat5.jpg',
                                                        width: 1200,
                                                        height: 1800
                                                    },
                                                    imageClassName: 'product-small-img',
                                                    shouldUsePositiveSpaceLens: true,
                                                    enlargedImageContainerDimensions: {
                                                        width: '150%',
                                                        height: '100%'
                                                    }
                                                }} />
                                            </div>
                                        </Slider>
                                        <div className='d-flex align-items-center p-add-button'>
                                            <button className='btn btn-add-to-cart bg-primary'>ADD TO CART</button>
                                            <button className='btn btn-buy-now bg-secondary'>BUY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 ps-4 order-3 p-side-decs">
                                <div className="product_description">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                                            <li className="breadcrumb-item"><a href="/">Products</a></li>
                                            <li className="breadcrumb-item active">boAt Rockerz 510</li>
                                        </ol>
                                    </nav>
                                    <div className="product_name">boAt Rockerz 510 Super Extra Bass Bluetooth Headset  (Molten Orange, On the Ear)</div>
                                    <div className="product-rating"><span className="badge badge-success"><i className="fa fa-star"></i> 4.5 Star</span> <span className="rating-review-top">45 Ratings & 35 Reviews</span></div>
                                    <div> <span className="product_price">₹ 1,199</span> <strike className="product_discount"> <span style={{ color: "black" }}>₹ 3,990</span> </strike> <span className="p-dis-percentage"> 69% off</span> </div>
                                    <div> <span className="product_saved">You Saved:</span> <span style={{ color: "black" }}>₹ 2,791</span> </div>
                                    <hr className="singleline" />
                                    <div>
                                        <h5>Available offers</h5>
                                        <span className="product_info"><i className="fa-solid fa-tag"></i> <b>Bank Offer</b> 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above.</span>
                                        <span className="product_info"><i className="fa-solid fa-tag"></i> <b>No Cost EMI</b> on Bajaj Finserv EMI Card on cart value above ₹2999.</span>
                                        <span id="offerdot"></span>
                                        <span id="moreoffer">
                                            <span className="product_info"><i className="fa-solid fa-tag"></i> <b>Bank Offer</b> 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above.</span>
                                            <span className="product_info"><i className="fa-solid fa-tag"></i> <b>Bank Offer</b> 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above.</span>
                                            <span className="product_info"><i className="fa-solid fa-tag"></i> <b>Bank Offer</b> 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above.</span>
                                        </span>
                                        <span onClick={viewMoreoffer} id="viewmoreoffer" className="more-button">View more</span>
                                    </div>
                                    <div className='p-brand'><img src='/images/boat-brand.jpg' alt='brand' /><span>1 Year Replacement Warranty</span></div>
                                    <div className="p-delivery-pin">
                                        <div className='delivery-text'>Delivery</div>
                                        <div className='delivery-pin'>
                                            <div className="input-group align-items-baseline">
                                                <i className="fa-solid fa-location-dot pe-2 text-primary"></i><input type="text" className="form-control" placeholder="Enter Your Pincode" aria-label="Enter Your Pincode" aria-describedby="pincode" />
                                                <button className="btn btn-pin text-primary" type="button" id="pincode">Check</button>
                                            </div>
                                            <p className="mb-0 mt-2 text-dark delivery-date">Delivery in 5 - 7 days | ₹40
                                            </p>
                                        </div>
                                    </div>
                                    <div className='p-varients'>
                                        <div className='p-varient-text'>
                                            Color
                                        </div>
                                        <div className='p-varient-item'>
                                            <img className='p-list-active' src='/images/boat1.jpg' alt='headphone' />
                                            <img src='/images/boat1.jpg' alt='headphone' />
                                            <img src='/images/boat1.jpg' alt='headphone' />
                                            <img src='/images/boat1.jpg' alt='headphone' />
                                        </div>
                                    </div>
                                    <div className='p-highlights'>
                                        <div className='p-highlight-text'>
                                            Highlights
                                        </div>
                                        <div className='p-highlight-item'>
                                            <ul>
                                                <li>With Mic:Yes</li>
                                                <li>Bluetooth version: 4.1</li>
                                                <li>Wireless range: 10 m</li>
                                                <li>Battery life: 10 hrs | Charging time: 2.5 hrs</li>
                                                <span id="highlightdot"></span>
                                                <span id="morehighlight">
                                                    <li>Extra bass: Add extra thump to your music</li>
                                                    <li>Using simple touch controls answer phone calls, change music tracks and control volume</li>
                                                    <li>Lightweight and comfortable ear tips which is available in 3 sizes provides comfortable musical experience for longer listening</li>
                                                </span>
                                                <span onClick={viewMorehighlight} id="viewmorehighlight" className="more-button">View more</span>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='p-desc'>
                                        <h4 className="pc-decs-heading">Product Description</h4>
                                        <hr className="pc-decs-heading" />
                                        <div className="accordion border-0 rounded-0 mobile-p-description">
                                            <div className="accordion-item border-0 rounded-0">
                                                <h2 className="accordion-header border-0 rounded-0" id="accordian-description-mob">
                                                    <button className="accordion-button collapsed border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsedesc" aria-expanded="false" aria-controls="panelsStayOpen-collapsedesc">
                                                        Product Description
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapsedesc" className="accordion-collapse collapse" aria-labelledby="accordian-description-mob">
                                                    <div className="accordion-body border-0 rounded-0">
                                                        <div className='p-desc-item'>
                                                            <div className='p-desc-item-img'>
                                                                <img src="/images/boat2.jpg" alt="product" />
                                                            </div>
                                                            <div className='p-desc-item-desc'>
                                                                <h5>Ergonomic Design</h5>
                                                                <p>This headset comes with a headband that can be adjusted to suit your needs. Moreover, the ear cups are designed to be comfortable so that you can listen to your audio for a longer period.</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className='p-desc-item'>
                                                            <div className='p-desc-item-desc'>
                                                                <h5>Ergonomic Design</h5>
                                                                <p>This headset comes with a headband that can be adjusted to suit your needs. Moreover, the ear cups are designed to be comfortable so that you can listen to your audio for a longer period.</p>
                                                            </div>
                                                            <div className='p-desc-item-img'>
                                                                <img src="/images/boat2.jpg" alt="product" />
                                                            </div>
                                                        </div>
                                                        <span id="descriptiondot"></span>
                                                        <span id="moredescription">
                                                            <hr />
                                                            <div className='p-desc-item'>
                                                                <div className='p-desc-item-img'>
                                                                    <img src="/images/boat2.jpg" alt="product" />
                                                                </div>
                                                                <div className='p-desc-item-desc'>
                                                                    <h5>Ergonomic Design</h5>
                                                                    <p>This headset comes with a headband that can be adjusted to suit your needs. Moreover, the ear cups are designed to be comfortable so that you can listen to your audio for a longer period.</p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className='p-desc-item'>
                                                                <div className='p-desc-item-desc'>
                                                                    <h5>Ergonomic Design</h5>
                                                                    <p>This headset comes with a headband that can be adjusted to suit your needs. Moreover, the ear cups are designed to be comfortable so that you can listen to your audio for a longer period.</p>
                                                                </div>
                                                                <div className='p-desc-item-img'>
                                                                    <img src="/images/boat2.jpg" alt="product" />
                                                                </div>
                                                            </div>
                                                        </span>
                                                        <hr />
                                                        <div className='p-desc-item'>
                                                            <div className='p-desc-item-desc'>
                                                                <span onClick={viewMoredescription} id="viewmoredescription" className="more-button">View more</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-specs'>
                                        <h4 className="pc-spec-heading">Specifications</h4>
                                        <hr className="pc-spec-heading" />
                                        <div className="accordion border-0 rounded-0 mobile-p-specification">
                                            <div className="accordion-item border-0 rounded-0">
                                                <h2 className="accordion-header border-0 rounded-0" id="accordian-specification-mob">
                                                    <button className="accordion-button collapsed border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsespec" aria-expanded="false" aria-controls="panelsStayOpen-collapsespec">
                                                        Specifications
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapsespec" className="accordion-collapse collapse" aria-labelledby="accordian-specification-mob">
                                                    <div className="accordion-body border-0 rounded-0">
                                                        <div className='p-specs-item'>
                                                            <h5>General</h5>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Model Name</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Rockerz 510 / Rockerz 518</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Color</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Molten Orange</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Headphone Type</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>On the Ear</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Inline Remote</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Yes</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Sales Package</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Rockerz 510, Charging Cable, User Manual, Warranty Card</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Connectivity</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Bluetooth</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <hr />
                                                        <div className='p-specs-item'>
                                                            <h5>Product Details</h5>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Sweat Proof</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Yes</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Foldable/Collapsible</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>No</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Deep Bass</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Yes</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Water Resistant</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>No</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Monaural</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>No</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>With Microphone</td>
                                                                        <td>
                                                                            <ul>
                                                                                <li>Yes</li>
                                                                            </ul>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rating-review'>
                                        <div className='mb-2 d-flex justify-content-between align-items-center rate-start'>
                                            <h4>Ratings & Reviews</h4>
                                            <Link to="/" className='btn rate-btn'>Rate Product</Link>
                                        </div>
                                        <div className='review-summary'>
                                            <div className='review-summary-1'>
                                                <span className='overall-rating'>4.5/5★ </span>
                                                45 Ratings &
                                                35 Reviews
                                            </div>
                                            <div className='review-summary-2'>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='rating-star'>5★</div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className='rating-number'>20</div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='rating-star'>4★</div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className='rating-number'>12</div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='rating-star'>3★</div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className='rating-number'>7</div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='rating-star'>2★</div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className='rating-number'>4</div>
                                                </div>
                                                <div className='d-flex align-items-center mb-1'>
                                                    <div className='rating-star'>1★</div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <div className='rating-number'>2</div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='rating-review-item'>
                                            <div>
                                                <span className="badge badge-success"><i className="fa fa-star"></i> 4.5</span>
                                                <span className='review-title'>Mind-blowing purchase</span>
                                            </div>
                                            <p>Nice product. Happy with the bass quality. One information I would like to share that the logo has been changed so don't need to worry.
                                                <br />I hope this review will help you.</p>
                                            <div className='p-review-image'>
                                                <img src="/images/boat3.jpg" alt="headphone" />
                                                <img src="/images/boat2.jpg" alt="headphone" />
                                                <img src="/images/boat4.jpg" alt="headphone" />
                                            </div>
                                            <div className='review-customer'>
                                                <p className='review-customer-item review-customer-name'>Ashutosh Anand Tiwari</p>
                                                <i className="fa-solid fa-circle-check"></i>
                                                <p className='review-customer-item review-customer-address'>Certified Buyer, Noida</p>
                                                <p className='review-customer-item review-date'>Oct, 2018</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='rating-review-item'>
                                            <div>
                                                <span className="badge badge-success"><i className="fa fa-star"></i> 5</span>
                                                <span className='review-title'>Mind-blowing purchase</span>
                                            </div>
                                            <p>Nice product. Happy with the bass quality. One information I would like to share that the logo has been changed so don't need to worry.
                                                <br />I hope this review will help you.</p>
                                            <div className='p-review-image'>
                                                <img src="/images/boat3.jpg" alt="headphone" />
                                                <img src="/images/boat2.jpg" alt="headphone" />
                                                <img src="/images/boat4.jpg" alt="headphone" />
                                            </div>
                                            <div className='review-customer'>
                                                <p className='review-customer-item review-customer-name'>Ashutosh Anand Tiwari</p>
                                                <i className="fa-solid fa-circle-check"></i>
                                                <p className='review-customer-item review-customer-address'>Certified Buyer, Noida</p>
                                                <p className='review-customer-item review-date'>Oct, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='question-answer'>
                                        <h4>Questions and Answers</h4>
                                        <hr />
                                        <div className='question-answer-item'>
                                            <div className='ques'>Q: this support realme c1</div>
                                            <div>
                                                <div className='ans'><span>A:</span> Obviously</div>

                                                <div className='certified-buyer'><i className="fa-solid fa-circle-check"></i> Certified Buyer</div>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className='question-answer-item'>
                                            <div className='ques'>Q: this support realme c1</div>
                                            <div>
                                                <div className='ans'><span>A:</span> Obviously</div>

                                                <div className='certified-buyer'><i className="fa-solid fa-circle-check"></i> Certified Buyer</div>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className='question-answer-item'>
                                            <div className='ques'>Q: this support realme c1</div>
                                            <div>
                                                <div className='ans'><span>A:</span> Obviously</div>

                                                <div className='certified-buyer'><i className="fa-solid fa-circle-check"></i> Certified Buyer</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div className='scrollend'></div>
                <div>
                    <ProductCarousel productsectitle="Similar products" />
                </div>
                <div>
                    <RecentlyViewed productsectitle="Recently Viewed" />
                </div>
            </div >
            <AddedToWishlist />
        </>
    )
}

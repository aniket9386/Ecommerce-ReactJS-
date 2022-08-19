import React from 'react';
import { Link } from 'react-router-dom';
import BrandCarousel from '../components/BrandCarousel';
import CategoryCarousel from '../components/CategoryCarousel';
import OfferSec from '../components/OfferSec';
import RecentlyViewed from '../components/RecentlyViewed';
import SubcategoryItem from '../components/SubcategoryItem';
import '../css/subcategory.css';

export default function SubCategoryPage() {
    const subCategory = () => {
        const row = [];
        for (var i = 0; i < 12; i++) {
            row.push(<div className='col-md-2 col-3 subcategory-item'><SubcategoryItem /> </div>);
        }
        return row;
    };

    return (
        <>
            <div id="carouselsubcategoryInterval" className="carousel slide subcategory-banner" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <Link to="/collections/all" className='w-100 d-block'>
                            <img src="/images/subcat-banner.jpg" alt="subcat banner" className='pc-sec w-100' />
                            <img src="/images/subcat-banner-mob.jpg" className="mob-sec w-100" alt="subcat banner" />
                        </Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <Link to="/collections/all" className='w-100 d-block'>
                            <img src="/images/subcat-banner.jpg" alt="subcat banner" className='pc-sec w-100' />
                            <img src="/images/subcat-banner-mob.jpg" className="mob-sec w-100" alt="subcat banner" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to="/collections/all" className='w-100 d-block'>
                            <img src="/images/subcat-banner.jpg" alt="subcat banner" className='pc-sec w-100' />
                            <img src="/images/subcat-banner-mob.jpg" className="mob-sec w-100" alt="subcat banner" />
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselsubcategoryInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselsubcategoryInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <BrandCarousel />
            <div className='container-fluid'>
                <div className='row subcategory-item-sec bg-white p-4 mb-1 m-auto'>
                    <h2 className='text-center'>Category Title</h2>
                    <p className='text-center mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    {
                        subCategory()
                    }
                </div>
            </div>
            <CategoryCarousel categorysectitle="Top Offers" />
            <OfferSec />
            <RecentlyViewed productsectitle="Recently Viewed" />
        </>
    )
}

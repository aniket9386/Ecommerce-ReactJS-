import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandCarouselItem(props) {
    return (
        <div className='brandcarousel-img'>
            <Link to="/collections/all">
                <img src={props.imageurl} alt='brand name' />
            </Link>
        </div>
    )
}
BrandCarouselItem.defaultProps = {
    imageurl: '/images/branditem.jpg'
};

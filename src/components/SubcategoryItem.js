import React from 'react';
import { Link } from 'react-router-dom';

export default function SubcategoryItem(props) {
    return (
        <div className="subcategory-list-item text-center border-0 col-12 px-2">
            <Link to='/collections/all'>
                <img src="/images/tshirt.jpg" className="subcategory-img" alt="headphone" /></Link>
            <div className="">
                <h5 className="fs-6 subcat-name">{props.categorytitle}</h5>
            </div>
        </div>
    )
}
SubcategoryItem.defaultProps = {
    categorytitle: 'T-shirts',
};
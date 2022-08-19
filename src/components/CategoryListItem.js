import React from 'react';
import { Link } from 'react-router-dom';
import '../css/category-list-item.css';

export default function CategoryListItem(props) {
  return (
    <div className="card category-list-item text-center border-0 col-12 px-2">
      <Link to='/collections/all'>
        <img src="/images/tv-category.jpg" className="card-img-top" alt="headphone" /></Link>
      <div className="card-body">
        <h5 className="card-title fw-normal fs-6 cat-name">{props.categorytitle}</h5>
        <p className="card-text text-success min-price">{props.categoryprice}</p>
      </div>
    </div>
  )
}

CategoryListItem.defaultProps = {
  categorytitle: 'TV Unit',
  categoryprice: 'From Rs. 999'
};

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HeaderCategorySlider.css';

export default function HeaderCategorySlideItem(props) {
    return (
        <div className='category-slide-item nav-item'>
            <Link to='/subcategory'>
                <img src='/images/categoryimage.png' alt='category' /></Link>
            <div className="btn-group">
                <Link to="/subcategory" type="button" className="cat-name dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                </Link>

                <ul className="dropdown-menu hide-mob">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>

                    <div className="btn-group submenu dropend nav-item">
                        <Link to="/collections/all" type="button" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            Category
                        </Link>

                        <ul className="dropdown-menu" data-bs-popper="none">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                        </ul>

                    </div>

                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                    <div className="btn-group submenu dropend nav-item">
                        <Link to="/collections/all" type="button" className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
                            Category
                        </Link>

                        <ul className="dropdown-menu" data-bs-popper="none">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                        </ul>

                    </div>
                </ul>

            </div>
        </div >
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import ProductFilter from '../components/ProductFilter';
import ProductListItem from '../components/ProductListItem';
import '../css/collection-page.css'

export default function CollectionPage() {
    return (
        <>
            {/* mob sort and filter */}
            <div className='mob-sec'>
                <div className='mob-sort-filter'>
                    <div className='mob-sort'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSort" aria-controls="offcanvasSort">
                            <i className="fa-solid fa-arrow-down-wide-short"></i> Sort
                        </button>
                    </div>
                    <div className='mob-filter'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter" aria-controls="offcanvasFilter">
                            <i className="fa-solid fa-filter"></i> Filter
                        </button>
                    </div>
                </div>

                {/* sort offcanvas */}
                <div className="offcanvas offcanvas-bottom sort-offcanvas" tabindex="-1" id="offcanvasSort" aria-labelledby="offcanvasSortLabel">
                    <div className="offcanvas-header bg-primary">
                        <Link to="/" className="offcanvas-title" id="offcanvasSortLabel">Sort By</Link>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Popularity
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Price
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" for="flexRadioDefault3">
                                Rating
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                            <label className="form-check-label" for="flexRadioDefault4">
                                Newest First
                            </label>
                        </div>
                    </div>
                </div>

                {/* Filter offcanvas */}
                <div className="offcanvas offcanvas-start filter-offcanvas" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
                    <div className="offcanvas-header bg-primary">
                        <Link to="/" className="offcanvas-title" id="offcanvasFilterLabel">Filter</Link>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ProductFilter />
                    </div>
                </div>

            </div>

            {/* <!-- Sidebar filter section --> */}
            <div className='container-fluid p-2 mob-col-padding'>
                <div className='row'>
                    <section className='col-md-3 pe-0 collection-lside-filter'>
                        <div id="sidebar">
                            <p> Home | <b>All Products</b></p>
                            <ProductFilter />
                        </div>
                    </section>

                    <section className='col-md-9 c-products collection-rside-filter'>
                        <div id="products">
                            <div className='container mt-3 mb-3'>
                                {/* pc sort */}
                                <div className="d-flex flex-row justify-content-between mb-3 pc-sec">
                                    <div className="text-muted m-2" id="res">Showing 44 results</div>
                                    <div className="ml-auto mr-lg-4">
                                        <div id="sorting" className="border rounded p-1 m-1"> <span className="text-muted">Sort by</span> <select name="sort" id="sort" className='bg-transparent sort'>
                                            <option value="popularity">Popularity</option>
                                            <option value="prcie">Price</option>
                                            <option value="rating">Rating</option>
                                            <option value="newest">Newest First</option>
                                        </select> </div>
                                    </div>

                                </div>
                                <div className="row row-cols-2 row-cols-md-4 g-4">
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                    <div className="col">
                                        <ProductListItem />
                                    </div>
                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
                                    </li>
                                    <li className="page-item active" aria-current="page"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="/">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    <div className='collection-scroll-end'></div>
                </div>
            </div>

        </>
    )
}

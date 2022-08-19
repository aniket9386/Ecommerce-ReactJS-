import React, { useState } from 'react';
import '../css/productfilter.css';
import '../js/pfilter.js';

export default function ProductFilter() {
    const [minString = 2500, setminString] = useState();
    const [maxString = 50000, setmaxString] = useState();
    return (
        <><div className='productfilter'>
            <div className="border-bottom pb-2 ml-2 pc-sec">
                <h4 id="burgundy">Filters</h4>
            </div>

            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Price</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>

                <div className="range-slider">
                    <span className='d-flex justify-content-between align-items-center range-text'>from : <input type="number" value={minString} onChange={(e) => setminString(e.target.value)} min="0" max="100000" step="500" /> to : <input type="number" value={maxString} onChange={(f) => setmaxString(f.target.value)} min="0" max="100000" step="500" /></span>
                    <input value={minString} onChange={(e) => setminString(e.target.value)} min="0" max="100000" step="500" type="range" />
                    <input value={maxString} onChange={(f) => setmaxString(f.target.value)} min="0" max="100000" step="500" type="range" />
                    <svg width="100%" height="24">
                        <line x1="4" y1="0" x2="480" y2="0" stroke="#444" stroke-width="12" stroke-dasharray="1 28"></line>
                    </svg>
                </div>

            </div>

            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Categories</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>
                    <div className="form-group"> <input type="checkbox" id="artisan" /> <label htmlFor="artisan">Fresh Artisan Breads</label> </div>
                    <div className="form-group"> <input type="checkbox" id="breakfast" /> <label htmlFor="breakfast">Breakfast Breads</label> </div>
                    <div className="form-group"> <input type="checkbox" id="healthy" /> <label htmlFor="healthy">Healthy Breads</label> </div>
                </form>
            </div>
            <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Accompainments</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>
                    <div className="form-group"> <input type="checkbox" id="tea" /> <label htmlFor="tea">Tea Cakes</label> </div>
                    <div className="form-group"> <input type="checkbox" id="cookies" /> <label htmlFor="cookies">Cookies</label> </div>
                    <div className="form-group"> <input type="checkbox" id="pastries" /> <label htmlFor="pastries">Pastries</label> </div>
                    <div className="form-group"> <input type="checkbox" id="dough" /> <label htmlFor="dough">Cookie Dough</label> </div>
                    <div className="form-group"> <input type="checkbox" id="choco" /> <label htmlFor="choco">Chocolates</label> </div>
                </form>
            </div>
            <div className="py-2 ml-3">
                <h6 className="font-weight-bold">Top Offers</h6>
                <div id="orange"><span className="fa fa-minus"></span></div>
                <form>
                    <div className="form-group"> <input type="checkbox" id="25off" /> <label htmlFor="25">25% off</label> </div>
                    <div className="form-group"> <input type="checkbox" id="5off" /> <label htmlFor="5off" id="off">5% off on artisan breads</label> </div>
                </form>
            </div>
        </div></>
    )
}

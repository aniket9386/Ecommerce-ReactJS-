import React from 'react';
import CardBoxInnerSec from './CardBoxInnerSec';

export default function CardBox() {
    return (
        <div className='container-fluid mt-1 mb-1 z-index2'>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4 cat-card">
                <div className="col card1">
                    <CardBoxInnerSec />
                </div>
                <div className="col card2 pc-sec">
                    <CardBoxInnerSec />
                </div>
                <div className="col card3 pc-sec">
                    <CardBoxInnerSec />
                </div>
                <div className="col card4 pc-sec hide-tab">
                    <CardBoxInnerSec />
                </div>
            </div>
        </div>
    )
}

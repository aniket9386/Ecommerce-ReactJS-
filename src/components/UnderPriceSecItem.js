import React from 'react';
import { Link } from 'react-router-dom';
import '../css/underpricesecitem.css';

export default function UnderPriceSecItem(props) {
    return (
        <>
            <div className='UnderPriceSecItem'>
                <Link to='/'>
                    <h2>{props.pricetitle}</h2>
                    <p>{props.content}</p>
                </Link>
            </div>
        </>
    )
}

UnderPriceSecItem.defaultProps = {
    pricetitle: '₹99',
    content: 'Under ₹99'
};
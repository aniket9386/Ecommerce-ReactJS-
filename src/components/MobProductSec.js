import React from 'react'
import ProductListItemNoBtn from './ProductListItemNoBtn'

export default function MobProductSec(props) {
    return (
        <>
            <div className='container-fluid mb-1 mob-product-sec mob-sec'>
                <div className='d-flex justify-content-between align-items-center bg-white px-3 py-2'>
                    <h5 className='m-0'> {props.productsectitle} </h5>
                    <a href='/' className='btn btn-primary m-0'>View all</a>
                </div>
                <div className='bg-white pb-0'>
                    <hr className='m-0' />
                </div>
                <div className='row align-items-stretch m-0 bg-white'>
                    <div className='col-8 mob-product-sec-item'>
                        <ProductListItemNoBtn />
                    </div>
                    <div className='col-4 mob-product-sec-item mob-product-sec-item2'>
                        <div><ProductListItemNoBtn /></div>
                        <div><ProductListItemNoBtn /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

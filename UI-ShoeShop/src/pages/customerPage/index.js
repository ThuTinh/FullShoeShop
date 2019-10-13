import React from 'react';
import ProductList from '../../components/customer/productList';
import FilterProduct from '../../components/customer/filterProduct';
import './style.css'
import CarouselHome from '../../components/customer/carousel/carouselHome';

function CustomHomePage() {
    return (
        <div>
            <div className="container">
                <CarouselHome></CarouselHome>
                <div className="row mt-3">
                    <div className="col-3">
                        <FilterProduct></FilterProduct>
                    </div>
                    <div className="col-9">
                        <ProductList></ProductList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomHomePage;

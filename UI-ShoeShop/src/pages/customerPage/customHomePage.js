import React, { useState } from 'react';
import ProductList from '../../components/customer/productList';
import FilterProduct from '../../components/customer/filterProduct';
import Carousels from '../../components/customer/carousel/index'
import './style.css'
import Footer from '../../components/Footer';


function CustomHomePage() {
    return (
        <div className="container">
            <Carousels></Carousels>
            <ProductList></ProductList>
            <FilterProduct></FilterProduct>
            <Footer></Footer>
        </div>
    )
}

export default CustomHomePage;

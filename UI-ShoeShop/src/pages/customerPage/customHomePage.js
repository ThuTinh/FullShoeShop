import React, { useState } from 'react';
import ProductList from '../../components/customer/productList';
import FilterProduct from '../../components/customer/filterProduct';
import './style.css'

function CustomHomePage() {
    return (
        <div  className = "container">
           <ProductList></ProductList>
           <FilterProduct></FilterProduct>       
        </div>
    )
}

export default CustomHomePage;

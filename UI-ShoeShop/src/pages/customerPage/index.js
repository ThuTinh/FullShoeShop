import React, { useState } from 'react';
import ProductList from '../../components/customer/productList';
import FilterProduct from '../../components/customer/filterProduct';
import Carousels from '../../components/customer/carousel/index'
import './style.css'
import Footer from '../../components/Footer';
import Navbars from '../../components/customer/navbars';


function CustomHomePage() {
    return (
        <>
        <div className="container">
            <Navbars></Navbars>
            <Carousels></Carousels>
            <div className="row mt-3">
                <div className="col-3">
                    <FilterProduct></FilterProduct>
                </div>
                <div className="col-9">
                    <ProductList></ProductList>
                </div>
            </div>
           
        </div>
         <div className="mt-2">
         <Footer></Footer>
     </div>
     </>
    )
}

export default CustomHomePage;

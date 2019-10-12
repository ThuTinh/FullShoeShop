import React from 'react';
import './style.css'
import ProductItem from '../prodcutItem';


function ProductList() {

    return (
        < div className="row ">
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem /></div>
        </div>

    )
}

export default ProductList;

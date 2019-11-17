import React from 'react';
import './style.css'
import ProductItem from '../prodcutItem';
import {connect} from "react-redux"


function ProductList(props) {
    const renderProductList =()=>{
        var result = "";
    }
    return (
        < div className="row ">
            <div className="col-4" ><ProductItem  /></div>
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

export default connect(null, null)(ProductList);

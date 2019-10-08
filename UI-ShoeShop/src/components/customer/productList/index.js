import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css'
import ProductItem from '../prodcutItem';


class ProductList extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            < div className="row">
      
            <div className="col-4" ><ProductItem /></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
            <div className="col-4" ><ProductItem/></div>
    
          </div>
            
        )

    }

}

export default ProductList;

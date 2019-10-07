import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'
import ProductItem from '../prodcutItem';


class ProductList extends React.Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    handleScroll = () => {


    };

    render() {
        return (

            <div className = "container">
            <Row className = "product-items">
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
            <Col span={8}><ProductItem></ProductItem></Col>
          </Row>
          </div>
            
        )

    }

}

export default ProductList;

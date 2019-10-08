import React, { useState } from 'react';
import { Row, Col, Carousel } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'


class ProductItem extends React.Component {

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
            <div>
                <Row gutter={8}>
                    <Col span={12}>
                        <Carousel autoplay>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                        </Carousel>

                    </Col>
                    <Col span={12}>

                    </Col>

                </Row>
            </div>

        )

    }

}

export default ProductItem;

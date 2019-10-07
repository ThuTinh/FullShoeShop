import React, { useState } from 'react';
import { Card, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'
const { Meta } = Card;


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

            <div className="card-container ">
                <div className="card-item-image">
                    <img className="image-item" style={{ width: '250px', height: '200px' }}
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />

                </div>
                <div className="card-item-body">
                    <h5> Giayf Convert</h5>
                    <p>12$</p>

                </div>
                <div className="card-item-footer">
                    <div className="action-item">
                        <label> Mua Hang</label>
                    </div>
                    <div className="action-item">
                       <label>Chi tiet</label> 
                    </div>



                </div>

            </div>
        )

    }

}

export default ProductItem;

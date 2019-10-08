import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'



class FilterProduct extends React.Component {

    constructor(props) {
        super(props);
    }
  onChange = (e)=> {
        console.log(`checked = ${e.target.checked}`);
      }

    render() {
        return (

           <div className = "filter-contaner">
               <div className  = "filter-tile">
                   Lọc sản phẩm
               </div>
               <div className = "filter-content">
               <Checkbox onChange={this.onChange}>ABC</Checkbox>  
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
                <Checkbox onChange={this.onChange}>ABC</Checkbox>
                <div className = "divide"></div>
               </div>
           </div>
        )

    }

}

export default FilterProduct;

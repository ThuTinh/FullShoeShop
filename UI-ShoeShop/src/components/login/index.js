import React, { useState } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import './style.css'



class Login extends React.Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className="container-login">
                
                <Form onSubmit={this.handleSubmit} className="login-form">
                <div style = {{width: '100%', marginBottom:'50px'}}>
                    <h4 className = "title-login">WELCOME TO SHOE  </h4>
                    <h1 className = "title-login">SHOP</h1>
                </div>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                  </a>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ display: 'block', width: '100%', backgroundColor:'#f75f00' }}>
                            Log in
                  </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>


        )

    }

}

export default Login;

import React, { useState } from 'react';
import { Input } from 'antd';
import { Form, Icon, Button, Checkbox } from 'antd';



function ActionSupplier() {
    const onChange = e => {
        console.log(e);
    };
    return (

        <Form  className="login-form">
            <Form.Item>
                <Input onChange = {onChange}  placeholder="Tên nhà cung cấp" />
            </Form.Item>
            <Form.Item>
                <Input  placeholder="Địa chỉ" />
            </Form.Item>
            <Form.Item>
                <Input  placeholder="Số điện Thoại" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Lưu </Button>
                <Button type="primary" className="login-form-button">
                    Trở về </Button>
            </Form.Item>
        </Form>

    )
}

export default ActionSupplier;

import React, { useState } from 'react';
import { Input } from 'antd';
import { Form, Icon, Button, Checkbox, Select, InputNumber} from 'antd';
const { Option } = Select;

function OrderSupplier() {

   const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const onChange = ()=>{

    }
    return (
        <Form className="login-form">
            <Form.Item label="Tên Nhà Cung Cấp">
                <Input onChange={onChange} placeholder="Tên nhà cung cấp" />
            </Form.Item>
            <Form.Item label="Chọn Loại Giày">
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Size">
             <label>36 </label><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} />
             <label>37 </label><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} />
             <label>38 </label><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} />
             <label>39 </label><InputNumber  min={1} max={10} defaultValue={3} onChange={onChange} />
            </Form.Item>
            <Form.Item label="Số lương">
                <Input onChange={onChange} placeholder="Số lượng" />
            </Form.Item>
            <Form.Item label="Tổng tiền">
                <Input onChange={onChange} placeholder="Số lượng" />
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

export default OrderSupplier;

import React, { useState } from 'react';
import { Typography, Col, Row, Badge, Icon, Input } from 'antd';

import './style.css';

const { Text } = Typography;
Icon.setTwoToneColor('#ed5107');
Icon.getTwoToneColor();


function Footer() {
  return (
    <div className = "container-footer">
      <Row className="text-footer">
        <Col span={10} offset={2}>
          <Row justify="start" align="bottom">
            <Icon type="environment" theme="twoTone" className="icon-style flex-content" />
            <div>
              <p>Khu Phố 6- Phường linh trung</p>
              <p>Quận Thủ Đức-TPHCM</p>
            </div>

          </Row>
          <Row type="flex" justify="start" align="top"> <Icon type="phone" theme="twoTone" className="icon-style" /> <span>0981853640</span> </Row>
          <Row type="flex" justify="start" align="top" > <Icon type="mail" theme="twoTone" className="icon-style" /><span>237zjh@gmail.com</span> </Row>
        </Col>
        <Col span={12}>
          <h3 >About Group</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col >
          <Icon type="facebook" className="icon-contact" />
          <Icon type="youtube" className="icon-contact" />
          <Icon type="twitter" className="icon-contact" />
          <Icon type="instagram" className="icon-contact" />
          <div className="text-end">
            <p className="margin-bottom-0">Thank you! I like it and you?</p>
            <p>&copy; luckyStay</p>
          </div>

        </Col>
      </Row>
    </div>
  );
}

export default Footer;

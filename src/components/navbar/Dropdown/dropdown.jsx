import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
// import Background from 'hero-slider/dist/components/Slide/Background';

const CustomDropdown = ({ title, items }) => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a href="..." className="dropdownButton">
      <Space>
        {title}
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);

export default CustomDropdown;

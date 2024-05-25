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
    <button type="button" className="dropdownButton">
      <Space>
        {title}
      </Space>
    </button>
  </Dropdown>
);

export default CustomDropdown;

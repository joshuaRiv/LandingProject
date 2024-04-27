import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
// import Background from 'hero-slider/dist/components/Slide/Background';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const CustomDropdown = ({ title }) => (

  <Dropdown
    menu={{
      items,
    }}
  >
    <a href="..." className="dropdownButton">
      <Space>
        { title }
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);

export default CustomDropdown;

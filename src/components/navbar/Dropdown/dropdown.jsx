import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
// import Background from 'hero-slider/dist/components/Slide/Background';
import { useNavigate } from 'react-router-dom';

function CustomDropdown({ title, route, items }) {
  // console.log('ROUTE DROPDOWN: ', { title, route });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ route });
  };

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <button type="button" onClick={handleClick} className="dropdownButton">
        <Space>
          {title}
        </Space>
      </button>
    </Dropdown>
  );
}

export default CustomDropdown;

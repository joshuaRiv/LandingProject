import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Menu } from 'antd';
import items from './Dropdown/dropDownItems.js';
import CustomDropdown from './Dropdown/dropdown.jsx';
import logo from '../../assets/aicraftLogo.png';
import './navbar.css';

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [stateOpenKeys, setStateOpenKeys] = useState([]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <div className="gpt3__navbar">
      {/* <div className="gpt3__navbar-links"> */}
      <div className="gpt3__navbar-links_logo">
        <img src={logo} />
      </div>
      {/* </div> */}
      <div className="gpt3__navbar-links_container">
        <CustomDropdown title="Servicios" items={items.services} />
        <CustomDropdown title="Productos" items={items.products} />
        <CustomDropdown title="Entrenamiento" items={items.training} />
        <CustomDropdown title="Industrias" items={items.industries} />
        <CustomDropdown title="Recursos" items={items.resources} />
        <p>
          <a href="#blog" className="dropdownButtonTitle">
            Contacto
          </a>
        </p>
        <CustomDropdown title="Nosotros" items={items.company} />
      </div>

      <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button">Inicia Sesión</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            {/* <div className="gpt3__navbar-menu_container-links">
              <CustomDropdown title="Servicios" items={items.services} triggerMode="click" />
              <CustomDropdown title="Productos" items={items.products} triggerMode="click" />
              <CustomDropdown title="Entrenamiento" items={items.training} triggerMode="click" />
              <CustomDropdown title="Industrias" items={items.industries} triggerMode="click" />
              <CustomDropdown title="Recursos" items={items.resources} triggerMode="click" />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <button type="button">Inicia Sesión</button>
            </div> */}
            <Menu
              mode="inline"
              defaultSelectedKeys={[]}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 256,
              }}
              items={items}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

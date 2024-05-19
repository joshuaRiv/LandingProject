import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import items from './Dropdown/dropDownItems.js';
import CustomDropdown from './Dropdown/dropdown.jsx';
import logo from '../../assets/aicraftLogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      {/* <div className="gpt3__navbar-links"> */}
      <div className="gpt3__navbar-links_logo">
        <img src={logo} />
      </div>
      {/* </div> */}
      <div className="gpt3__navbar-links_container">
        <CustomDropdown title="Serviciosaa" items={items.services} />
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
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Servicios</a>
              </p>
              <p>
                <a href="#wgpt3">Productos</a>
              </p>
              <p>
                <a href="#possibility">Entrenamiento</a>
              </p>
              <p>
                <a href="#features">Recursos</a>
              </p>
              <p>
                <a href="#blog">Contacto</a>
              </p>
              <p>
                <a href="#blog">Nosotros</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              {/* <p>Sign in</p> */}
              <button type="button">Inicia Sesión</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

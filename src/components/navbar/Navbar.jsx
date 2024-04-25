import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import DropdownNPM from './dropdown.jsx';
import logo from '../../assets/aicraftLogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    isDropdownVisible(true);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    isDropdownVisible(false);
    setDropdownVisible(false);
  };

  return (
    <div className="gpt3__navbar">
      {/* <div className="gpt3__navbar-links"> */}
      <div className="gpt3__navbar-links_logo">
        <img src={logo} />
      </div>
      {/* </div> */}
      <div className="gpt3__navbar-links_container">
        <p>
          <a
            href="#wgpt3"
            className="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Productos
            {/* <DropdownMenu /> */}
            {isDropdownVisible && <DropdownNPM />}
          </a>
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
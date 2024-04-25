import React from 'react';

function DropdownItem({ name }) {
  return (
    <span className="w-full px-1 py-0.5 dropdownItemClass">
      {name}
    </span>
  );
}

export default function DropdownNPM() {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <DropdownItem name="Hola" />
        </li>
        <li>
          <DropdownItem name="Hola2" />
        </li>
        <li>
          <DropdownItem name="Hola3" />
        </li>
        <li>
          <DropdownItem name="Hola4" />
        </li>
      </ul>
    </div>
  );
}

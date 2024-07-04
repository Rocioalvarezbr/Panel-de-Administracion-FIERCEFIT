import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu() {
  return (
    <div className="SideMenu">
      <ul className="side-menu-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            <i className="fa-solid fa-house"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" activeClassName="active">
            <i className="fa-solid fa-bag-shopping"></i> Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/usuarios" activeClassName="active">
            <i className="fa-solid fa-user"></i> Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to="/ordenes" activeClassName="active">
            <i className="fa-solid fa-cart-shopping"></i> Ordenes
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;

import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div className="SideMenu">
      <ul className="side-menu-list">
        <li>
          <i class="fa-solid fa-house"></i> Dashboard
        </li>
        <Link to="/productos">
          <li>
            <i class="fa-solid fa-bag-shopping"></i> Productos
          </li>
        </Link>
        <li>
          <i class="fa-solid fa-user"></i> Usuarios
        </li>
        <li>
          <i class="fa-solid fa-cart-shopping"></i> Ordenes
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;

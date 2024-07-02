import React from "react";

function SideMenu() {
  return (
    <div className="SideMenu">
      <ul className="side-menu-list">
        <li>
          <i class="fa-solid fa-house"></i> Dashboard
        </li>
        <li><i class="fa-solid fa-bag-shopping"></i> Productos</li>
        <li><i class="fa-solid fa-user"></i> Usuarios</li>
        <li><i class="fa-solid fa-cart-shopping"></i> Ordenes</li>
      </ul>
    </div>
  );
}

export default SideMenu;

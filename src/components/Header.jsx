import React from "react";
import logo from "../img/DiseñoFooter.png";

function Header() {
  return (
    <div className="Header">
      <header
        className="navbar bg-dark"
        data-bs-theme="dark"
      >
        <div className="logo">
          <i className="bi bi-list fs-3 me-4"></i>
          <img src={logo} alt="FierceFIT Logo" />
        </div>
        <h2 className="title fst-italic">Panel de Control</h2>
      </header>
    </div>
  );
}

export default Header;

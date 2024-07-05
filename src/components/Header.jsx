import React from "react";
import logo from "../img/DiseñoFooter.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header className="navbar bg-dark" data-bs-theme="dark">
        <div className="logo">
          <i className="bi bi-list fs-3 me-4"></i>
          <img src={logo} alt="FierceFIT Logo" />
        </div>
        <h2 className="title fst-italic">Panel de Control</h2>
        <div>
          <Link to="/login">
            <h2>Iniciar Sesion</h2>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;

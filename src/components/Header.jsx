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
        <h2 id="panel-title" className="title fst-italic">Panel de Control</h2>
        <div>
          <Link to="/login" className="login-link">
            <h2 className="login-title">Iniciar Sesión</h2>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;

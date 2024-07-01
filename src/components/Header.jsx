import React, { useState } from "react";
import logo from "../img/FierceFIT(2).jpg";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <i className="bi bi-list fs-3 me-4"></i>
          <img src={logo} alt="FierceFIT Logo" />
        </div>
      </header>
    </div>
  );
}

export default Header;

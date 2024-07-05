import React from "react";
import logo from "../img/DiseñoFooter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          ©2024 <span className="span-text">FierceFIT</span>
        </p>
      </div>
      <div className="footer-center">
        <img src={logo} alt="FierceFIT" className="footer-logo" />
      </div>
      <div className="footer-right">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-behance"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

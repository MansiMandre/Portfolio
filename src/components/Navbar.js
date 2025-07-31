import React from 'react';
import {  FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for routing

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light font-extrabold" href="#">MANSI</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-4">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contacts</Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="d-flex gap-3 ms-auto" style={{ marginRight: '10px', marginLeft: '-20px' }}>
          
        
            <a href=" https://www.linkedin.com/in/mansi-mandre-557705255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn className="text-light" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

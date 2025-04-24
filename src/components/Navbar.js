import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter , FaLinkedinIn } from 'react-icons/fa';

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
          <a className="nav-link text-light" href="/#/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/#/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/#/resume">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/#/project">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/#contact">Contacts</a>
        </li>
       
      </ul>

      {/* Social Media Icons */}
      <div className="d-flex gap-3 ms-auto" style={{ marginRight: '10px', marginLeft: '-20px' }}>
        <a href="#"><FaFacebookF className="text-light" /></a>
        <a href="#"><FaInstagram className="text-light" /></a>
        <a href="#"><FaTwitter   className="text-light" /> {/* Changed Twitter to X */}</a>
        <a href="#"><FaLinkedinIn className="text-light" /></a>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

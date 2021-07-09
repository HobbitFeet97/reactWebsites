import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navBar">
        <div className="navBar-container">
          <Link to="/" className='navBar-main'>
          <i class="fas fa-tape"></i>SP Designs
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className='nav-links'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/installations" className='nav-links'>Installations</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className='nav-links'>Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className='nav-links'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

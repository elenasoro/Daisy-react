import React from "react";
import Logo from '../Logo/logo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header(){
    return (
      <header>
        <Logo />
        <nav className="menu">
          <ul>
            <li className="menu__item">
              <Link to="/">About</Link>
            </li>
            <li className="menu__item">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="menu__item">
              <Link to="/services">Services</Link>
            </li>
            <li className="menu__item">
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
      </header>

);
}

export default Header;
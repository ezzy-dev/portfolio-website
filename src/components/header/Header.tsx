import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <header>
      <nav className="header">
        <div className="header__left">
          <Link className="header__link" to="/">
            Home
          </Link>
        </div>
        <div className="header__right">
          {/* <Link className="header__link" to="/resume">
            Resume
          </Link>
          <Link className="header__link" to="/projects">
            Projects
          </Link> */}
          <Link className="header__link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

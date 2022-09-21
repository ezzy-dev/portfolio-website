import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(): JSX.Element {
  return (
    <header>
      <nav className="header">
        <Link className="header__link" to="/">
          Home
        </Link>
        {/* <Link className="header__link" to="/resume">
            Resume
          </Link> */}
          <Link className="header__link" to="/projects">
            Projects
          </Link>
          <Link className="header__link" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

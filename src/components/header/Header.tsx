import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header(): JSX.Element {
    return (
        <header>
            <nav className="header-container">
                <div className="header-left">
                    <Link to="/">Home</Link>
                </div>
                <div className="header-right">
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
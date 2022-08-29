import React from "react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
    return (
        <header>
            <nav className="header-container">
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
};

export default Header;
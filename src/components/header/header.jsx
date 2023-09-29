import React from "react";
import "../../css/header.css";

const Header = () => {
  return (
    <header className="navbar" id="navbar">
      <h1 className="nav-title">Rick & Morty</h1>
      <nav className="nav-item">
        <ul className="nav-ul" id="navbar-right">
          <li>
            <a href="/">Characters</a>
          </li>
          <li>
            <a href="/api">Api Hook</a>
          </li>
          <li>
            <a href="/asyncApi">Async Api</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

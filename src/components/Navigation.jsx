import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-name">
        <p className="first-name">Negar</p>
        <p className="last-name">Laleh</p>
      </div>

      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a
              href="/assets/documents/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

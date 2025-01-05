import React from "react";
import { Link } from "react-router-dom";
import "../CSSFiles/Navigation.css";

function NavigationBar() {
  return (
    <nav className="navbar text-primary p-1 rounded-1 custom-gradient">
      <Link className="navbar-brand font-color-white" to="/">
        maXspaces
      </Link>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Buy
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/buy">
                  Property for Sale
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/mortgage">
                  Get a Mortgage
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Rent
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/rent">
                  Property for Rent
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              House Prices
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/valuation">
                  Get a Valuation
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;

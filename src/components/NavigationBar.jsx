import React from "react";
import "../CSSFiles/Navigation.css";

function NavigationBar() {
  return (
    <>
      <nav className="navbar text-primary p-1 rounded-1 custom-gradient">
        <a className="navbar-brand font-color-white" href="#">
          maXspaces
        </a>
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
                  <a className="dropdown-item" href="src/pages/BuyPage.jsx">
                    Property for Sale
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="src/pages/Mortgage.jsx">
                    Get a Mortgage
                  </a>
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
                  <a className="dropdown-item" href="src/pages/BuyPage.jsx">
                    Property for Rent
                  </a>
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
                  <a className="dropdown-item" href="src/pages/Valuation.jsx">
                    Get a valuation
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;

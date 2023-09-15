import React from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";

export default function Navbarr() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
           Crystal Events
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="dive">
              <Link className="kal"to='/'>
              Home
              </Link>
              <Link className="abt">
                AboutUs
              </Link>
              <Link className="fli" >
               Events
              </Link>
              <Link className="lgn"  >
                Contact
              </Link>
          </div>
             
        </div>
      </nav>
    </div>
  );
}

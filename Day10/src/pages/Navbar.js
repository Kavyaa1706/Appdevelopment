import React from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";
import {HiHome} from "react-icons/hi";

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
              <Link className="hom" to="/">
                <div className="homeee">
                  Home
                </div>
              </Link>
              <Link  className="abts"to="/pages/Aboutus">
                <div className="abtus">
                
                    AboutUs
                
                </div>
              </Link>
              <Link  className="flis">
                <div className="fli">
                
                   Events
                
                </div>
              </Link>
              <Link to="/pages/Register">
                <div>
                
                   <button className="lgn1">Login/SignUp</button>
                
                </div>
              </Link>
          </div>
             
        </div>
      </nav>
    </div>
  );
}

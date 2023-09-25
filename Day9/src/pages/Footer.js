import React from "react";
import { Link } from "react-router-dom";
import "../assets/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="navbar1">
        <div className="container-fluid1">
        
         
              <Link to="/pages/Privacypolicy">
                  <div className="kal">
                    Privacy policy
                  </div>
              </Link>
              <Link to="/pages/Termsandconditions">
                  <div className="tc">
                   Terms and Conditions
                  </div>
              </Link>
              <Link to="/pages/Register">
                  <div className="admin">
                   Admin
                  </div>
              </Link>
              <Link to="/pages/Faqs">
                <div className="faq">
                FAQs
                </div>
              </Link>
              <div className="copyright">
              ©2023 by Crystal Events
              </div>
        
             
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import "../assets/Homepage.css";
import img from "../assets/company.jpg"
import { Link } from "react-router-dom";

import Navbarr from "./Navbar";
export default function Home(){
    return(
<div className="niv" >
    <div className="nav">
        <Navbarr/>
    </div>
   <div>
    <img className="image" src={img}></img>
   </div>
   <div className="black">

   </div>
   <div>
    <h1 className="event">
        <i>"Life is an Event!"</i>
    </h1>
   </div>
   <div>
    <h1 className="event1">
        <i>"Make it memorable..!"</i>
    </h1>
   </div>
   <div>
    <Link to='/pages/Register'><button className="cus">Customer</button></Link>
   </div>
   <div>
    <Link to='/pages/Register'><button className="em">Event Manager</button></Link>
   </div>
</div>
    )
}
import React from "react";
import "../assets/Homepage.css";
import img from "../assets/video1.mp4"
import img1 from "../assets/video2.mp4"
import img2 from "../assets/bgs.jpg"
import img3 from "../assets/beachweds.jpg"
import img4 from "../assets/babygirl.jpg"
import img5 from "../assets/babybirth.jpg"
import img6 from "../assets/dining.jpg"
import {GiPartyPopper} from "react-icons/gi"
import {GrFormNext} from "react-icons/gr"
import Footer from "./Footer.js";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Navbarr from "./Navbar";
export default function Home(){
    return(
<div className="niv" >
    <div className="nav">
        <Navbarr/>
    </div>
   <div>
    <video  className="image"  src={img} autoPlay loop muted/>
   </div>
   <div>
    <video  className="image1"  src={img1} autoPlay loop muted/>
   </div>
   <div>
    <img  className="image2"  src={img2} />
   </div>
   <div className="move">
       {/* <div className="black">
       </div> */}
       <div className="channa">
        {/* <div>
            <h1 className="event">
                <i>"Life is an Event!"</i>
            </h1>
                   </div>
                   <div>
            <h1 className="event1">
                <i>"Make it memorable..!"</i>
            </h1>
                   </div> */}
                   {/* <div>
            <Link to='/pages/Register'><button className="cus">Customer</button></Link>
                   </div>
                   <div>
            <Link to='/pages/Register'><button className="em">Event Manager</button></Link>
                   </div> */}
        </div>
   </div>
   <div>
    <h1 className="cs">
        Crystal Events
    </h1>
    <h1 className="eventmemory">
        <i>" Life is an Event , Make it memorable..! "</i>
    </h1>
   </div>
   <div className="massmove">
       <div>
        <h1 className="pp2">
            <GiPartyPopper/>
        </h1>
        <h1 className="pp1">
            <GiPartyPopper/>
        </h1>
        <p className="para">
            Crystal Events is a sophisticated online platform designed to streamline and simplify the process of planning and booking various aspects<br/>
             of events, ranging from small gatherings to large-scale conferences and everything in between. This website serves as a one-stop destination <br/>
             for event organizers, offering a wide range of features and services to ensure the seamless execution of events.
        </p>
        <p className="para1">
        With our Crystal events family, you can transform your event planning experience into a seamless, efficient, and stress-free process.
        Whether you're organizing a corporate conference, a wedding, a charity gala, or a small family gathering, our platform provides the tools
        and resources you need to create memorable events that exceed expectations. Embark on a journey to make your event dreams a reality.
        </p>
       </div>
       <div>
        <h2 className="works">
            Here are some of our works..!
        </h2>
       </div>
   </div>
       <div className="blockmoves  ">
           <div className="block"> </div>
           <div>
            <img className="image3" src={img3} />
            <img className="image4" src={img4} />
            <img className="image5" src={img5} />
            <img className="image6" src={img6} />
           </div>
           <Link to="/Services">
               <h1 className="arrow"><GrFormNext/></h1>
           </Link>
       </div>
     
   <div className="cu">
       <div className="magenda">
       </div>
           <div>
            <Contact/>
           </div>
   </div>

       <div className="foot">
    <Footer/>
   </div>
   
</div>
    )
}
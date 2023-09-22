import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import Navbarr from './Navbar'
import {FaSmile} from "react-icons/fa"
import "../assets/Dashboard.css";
function Dashboard() {
    const user=useSelector(selectUser)
   

  // Check if username is null before accessing it
  if (user === null) {
    // Handle the case where username is null, e.g., display a loading message
    return <div>Loading...</div>;
  }
    return (
        
        <>

        <div className='nav'><Navbarr/></div>
            <Layout />
            <div className='main-wrapper'>
                 <div className='welcome'>
                 <div className='fs'><FaSmile/></div > 
                    <h1 className='wel'>
                         Welcome <span>{user.username} </span> ! </h1>
                </div>  
                <div className='fog'>

                </div>
                <div>
                    <h1 className='ce'>  Crystal Events</h1>
                </div>
                <div>
                    <p  ><div className='quote'> Sitback while we create the</div> <div className='color'>experience</div><div className='life'> of a lifetime</div></p>
                </div>
                <div>                          
                    <p><div className='guest'>"Be Guest"</div> <div className='events'>at your own Event..!</div></p>
                </div>

            </div>
        </>
    )
}

export default Dashboard
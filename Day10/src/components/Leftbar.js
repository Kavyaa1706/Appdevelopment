import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import "../assets/Leftbar.css";
import {FaHome} from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa';
import{BiBarChartAlt2} from "react-icons/bi";
import{DiDropbox} from "react-icons/di";
import img from "../assets/bg1.jpg";


function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/pages/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Services')
}
const usersHandler = () =>{
    navigate('/Users')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
        <div>
            <img className='img' src={img}></img>
        </div>
            <div className='left-bar'>
                <div className='left-bar-container'>
                <button className='left-bar-button nav-btn' onClick={usersHandler}>
                       <div className='home'>< FaHome/></div>
                    </button>
                   
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                       <div className='users'><FaUserCircle/> </div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                    <div className='set'>
                        <BiBarChartAlt2 /> 
                    </div>
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    <div className='set'>
                        <DiDropbox /> 
                    </div>
                    </button>
                     <button className='log' onClick={logoutHandler}>
                        Logout
                    </button> 
                

                </div>
                
                <p className='hm'>
                  Dashboard
                </p>
                <p className='up'>
                    User profile
                </p>
                <p className='sett'>
                  Upcoming Events
                </p>
                <p className='settt'>
                  Services
                </p>
            </div>
        </>
    )
}

export default Leftbar